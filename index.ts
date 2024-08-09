import "dotenv/config"
import { writeFileSync } from 'fs'
import {
    ENTRYPOINT_ADDRESS_V07, 
    GetUserOperationReceiptReturnType, 
    UserOperation,
    bundlerActions, 
    createSmartAccountClient, 
    getAccountNonce, 
    getSenderAddress, 
    getUserOperationHash, 
    signUserOperationHashWithECDSA, 
    waitForUserOperationReceipt
} from "permissionless"
import { 
    privateKeyToSafeSmartAccount, 
    privateKeyToSimpleSmartAccount, 
    signerToSafeSmartAccount 
} from "permissionless/accounts"
import { pimlicoBundlerActions, pimlicoPaymasterActions } from "permissionless/actions/pimlico"
import { createPimlicoBundlerClient, createPimlicoPaymasterClient } from "permissionless/clients/pimlico"
import { 
    Address, 
    Hash, 
    Hex, 
    concat, 
    createClient, 
    createPublicClient, 
    encodeFunctionData, 
    http, 
    parseAbiItem 
} from "viem"
import { generatePrivateKey, privateKeyToAccount, signMessage } from "viem/accounts"
import { lineaTestnet, polygonMumbai, baseSepolia, optimismSepolia } from "viem/chains"
import { abi, abi2 } from "./utils.js";

console.log("Hello world!")

const apiKey = "pim_ammn1zD8yNhhQ2PyuWqeTW"
const paymasterUrl = `https://api.pimlico.io/v2/11155420/rpc?apikey=pim_ammn1zD8yNhhQ2PyuWqeTW`
 
const privateKey =
	(process.env.PRIVATE_KEY as Hex) ??
	(() => {
		const pk = generatePrivateKey()
		writeFileSync(".env", `PRIVATE_KEY=${pk}`)
		return pk
	})()
 
export const publicClient = createPublicClient({
	transport: http("https://rpc.ankr.com/optimism_sepolia"),
})
 
export const paymasterClient = createPimlicoPaymasterClient({
	transport: http(paymasterUrl),
	entryPoint: ENTRYPOINT_ADDRESS_V07,
})

// console.log("paymaster client --------------------------------\n", paymasterClient)

const account = await signerToSafeSmartAccount(publicClient, {
	signer: privateKeyToAccount(privateKey),
	entryPoint: ENTRYPOINT_ADDRESS_V07, // global entrypoint
	safeVersion: "1.4.1",
})
 
console.log(`Smart account address: https://sepolia-optimism.etherscan.io/address/${account.address}`)

const bundlerUrl = `https://api.pimlico.io/v2/11155420/rpc?apikey=pim_ammn1zD8yNhhQ2PyuWqeTW`
 
const bundlerClient = createPimlicoBundlerClient({
	transport: http(bundlerUrl),
	entryPoint: ENTRYPOINT_ADDRESS_V07,
})
 
const smartAccountClient = createSmartAccountClient({
	account,
	entryPoint: ENTRYPOINT_ADDRESS_V07,
	chain: optimismSepolia,
	bundlerTransport: http(bundlerUrl, {
		timeout: 30_000 // Wait 30 seconds for user operation to be included
	}),
	middleware: {
		gasPrice: async () => {
			return (await bundlerClient.getUserOperationGasPrice()).fast
		},
		sponsorUserOperation: paymasterClient.sponsorUserOperation,
	},
})

// console.log("smart account client --------------------------------\n", smartAccountClient)

const targetContract = "0x036CbD53842c5426634e7929541eC2318f3dCF7e" // usdc
const tunnlTwitterOffers = "0x438B8c0592902BD738594e0454CAFcc9c8dE9637"
const myEoa = "0x11e9890626D6cC378d1c9B845B44e6AA77503e46";

const callData = encodeFunctionData({
    abi: abi,
    functionName: "approve",
    args: [tunnlTwitterOffers, 100000000n], // 100 USDC tokens approval
  });

// const callData2 = encodeFunctionData({
// abi: abi,
// functionName: "transfer",
// args: [myEoa, 10000n],
// });

const callData3 = encodeFunctionData({
    abi: abi2,
    functionName: "createOffer",
    args: ["0x49de9cdb92a19e04ba1fd7d99fde0721dde4cfb749dbd70128482355cced9711", 1000001n, 3600n, 14400n]
})

// offer id: 49de9cdb92a19e04ba1fd7d99fde0721dde4cfb749dbd70128482355cced9711

const txHash = await smartAccountClient.sendTransaction({
	to: targetContract,
	value: 0n,
	data: callData,
})
console.log(txHash);

await publicClient.waitForTransactionReceipt({ hash: txHash });
// Check allowance
const allowance = await publicClient.readContract({
    address: targetContract,
    abi: abi,
    functionName: "allowance",
    args: [smartAccountClient.account.address, tunnlTwitterOffers],
});
console.log(`Allowance of TunnlTwitterOffers contract for USDC of Brand wallet: ${allowance}`);

// if (allowance >= 100000n) {
//     const txHash2 = await smartAccountClient.sendTransaction({
//         to: targetContract,
//         value: 0n,
//         data: callData2,
//     });

//     console.log(txHash2);
// } else {
//     console.log("Insufficient allowance, transferFrom will fail.");
// }

// const balance = await publicClient.readContract({
//     address: targetContract,
//     abi: abi,
//     functionName: "balanceOf",
//     args: [smartAccountClient.account.address],
// });
// console.log(`Balance: ${balance}`);

// const txHash2 = await smartAccountClient.sendTransaction({
//         to: targetContract,
//         value: 0n,
//         data: callData2,
// });

const txHash3 = await smartAccountClient.sendTransaction({
    to: tunnlTwitterOffers,
    value: 0n,
    data: callData3,
});
console.log(`CreateOffer transaction hash: ${txHash3}`);
const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash3 });
console.log("Transaction receipt:", receipt);
 // 1000000-10000
 //  990000

 
// console.log(`User operation included: https://sepolia.basescan.org/tx/${txHash3}`)
console.log(`User operation included: https://sepolia-optimism.etherscan.io/tx/${txHash3}`)