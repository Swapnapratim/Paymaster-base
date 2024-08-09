//utils.js
export const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"burner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"PauserChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"UnBlacklisted","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"CANCEL_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RECEIVE_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"authorizationState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blacklister","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"cancelAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"cancelAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currency","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"decrement","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"increment","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"string","name":"tokenCurrency","type":"string"},{"internalType":"uint8","name":"tokenDecimals","type":"uint8"},{"internalType":"address","name":"newMasterMinter","type":"address"},{"internalType":"address","name":"newPauser","type":"address"},{"internalType":"address","name":"newBlacklister","type":"address"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"}],"name":"initializeV2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"lostAndFound","type":"address"}],"name":"initializeV2_1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accountsToBlacklist","type":"address[]"},{"internalType":"string","name":"newSymbol","type":"string"}],"name":"initializeV2_2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"minterAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"receiveWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"receiveWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"removeMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenContract","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rescuer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"transferWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"unBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPauser","type":"address"}],"name":"updatePauser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRescuer","type":"address"}],"name":"updateRescuer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

export const abi2 = [{"inputs":[{"internalType":"address","name":"_functionsRouter","type":"address"},{"internalType":"address","name":"_usdcToken","type":"address"},{"components":[{"internalType":"uint8","name":"automationUpkeepBatchSize","type":"uint8"},{"internalType":"uint16","name":"advertiserFeePercentageBP","type":"uint16"},{"internalType":"uint16","name":"creatorFeePercentageBP","type":"uint16"},{"internalType":"uint24","name":"functionsCallbackGasLimit","type":"uint24"},{"internalType":"uint32","name":"flatFeeUsdc","type":"uint32"},{"internalType":"uint32","name":"minOfferDurationSeconds","type":"uint32"},{"internalType":"uint32","name":"minAcceptanceDurationSeconds","type":"uint32"},{"internalType":"uint32","name":"maxVerificationDelaySeconds","type":"uint32"},{"internalType":"uint64","name":"functionsSubscriptionId","type":"uint64"},{"internalType":"bytes32","name":"functionsDonId","type":"bytes32"},{"internalType":"bytes","name":"functionsEncryptedSecretsReference","type":"bytes"},{"internalType":"string","name":"functionsVerificationRequestScript","type":"string"},{"internalType":"string","name":"functionsPayoutRequestScript","type":"string"}],"internalType":"struct TunnlTwitterOffers.Config","name":"_config","type":"tuple"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"EmptyArgs","type":"error"},{"inputs":[],"name":"EmptySource","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[],"name":"NoInlineSecrets","type":"error"},{"inputs":[],"name":"OnlyRouterCanFulfill","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"offerId","type":"bytes32"},{"indexed":false,"internalType":"uint32","name":"payoutDate","type":"uint32"},{"indexed":false,"internalType":"address","name":"contentCreator","type":"address"}],"name":"Accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"offerId","type":"bytes32"},{"components":[{"internalType":"enum TunnlTwitterOffers.Status","name":"status","type":"uint8"},{"internalType":"uint16","name":"advertiserFeePercentageBP","type":"uint16"},{"internalType":"uint16","name":"creatorFeePercentageBP","type":"uint16"},{"internalType":"address","name":"advertiser","type":"address"},{"internalType":"address","name":"contentCreator","type":"address"},{"internalType":"uint32","name":"flatFeeUsdc","type":"uint32"},{"internalType":"uint32","name":"creationDate","type":"uint32"},{"internalType":"uint32","name":"acceptanceExpirationDate","type":"uint32"},{"internalType":"uint32","name":"payoutDate","type":"uint32"},{"internalType":"uint32","name":"dateToAttemptVerification","type":"uint32"},{"internalType":"uint256","name":"maxValueUsdc","type":"uint256"},{"internalType":"uint256","name":"amountPaidUsdc","type":"uint256"},{"internalType":"string","name":"verificationFailureMessage","type":"string"},{"internalType":"string","name":"payoutFailureMessage","type":"string"},{"internalType":"uint32","name":"offerDurationSeconds","type":"uint32"}],"indexed":false,"internalType":"struct TunnlTwitterOffers.Offer","name":"offer","type":"tuple"}],"name":"Created","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"offerId","type":"bytes32"},{"indexed":false,"internalType":"enum TunnlTwitterOffers.Status","name":"previousStatus","type":"uint8"},{"indexed":false,"internalType":"enum TunnlTwitterOffers.Status","name":"currentStatus","type":"uint8"}],"name":"OfferStatus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint8","name":"automationUpkeepBatchSize","type":"uint8"},{"internalType":"uint16","name":"advertiserFeePercentageBP","type":"uint16"},{"internalType":"uint16","name":"creatorFeePercentageBP","type":"uint16"},{"internalType":"uint24","name":"functionsCallbackGasLimit","type":"uint24"},{"internalType":"uint32","name":"flatFeeUsdc","type":"uint32"},{"internalType":"uint32","name":"minOfferDurationSeconds","type":"uint32"},{"internalType":"uint32","name":"minAcceptanceDurationSeconds","type":"uint32"},{"internalType":"uint32","name":"maxVerificationDelaySeconds","type":"uint32"},{"internalType":"uint64","name":"functionsSubscriptionId","type":"uint64"},{"internalType":"bytes32","name":"functionsDonId","type":"bytes32"},{"internalType":"bytes","name":"functionsEncryptedSecretsReference","type":"bytes"},{"internalType":"string","name":"functionsVerificationRequestScript","type":"string"},{"internalType":"string","name":"functionsPayoutRequestScript","type":"string"}],"indexed":false,"internalType":"struct TunnlTwitterOffers.Config","name":"previousConfig","type":"tuple"}],"name":"PreviousConfig","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"offerId","type":"bytes32"},{"components":[{"internalType":"enum TunnlTwitterOffers.Status","name":"status","type":"uint8"},{"internalType":"uint16","name":"advertiserFeePercentageBP","type":"uint16"},{"internalType":"uint16","name":"creatorFeePercentageBP","type":"uint16"},{"internalType":"address","name":"advertiser","type":"address"},{"internalType":"address","name":"contentCreator","type":"address"},{"internalType":"uint32","name":"flatFeeUsdc","type":"uint32"},{"internalType":"uint32","name":"creationDate","type":"uint32"},{"internalType":"uint32","name":"acceptanceExpirationDate","type":"uint32"},{"internalType":"uint32","name":"payoutDate","type":"uint32"},{"internalType":"uint32","name":"dateToAttemptVerification","type":"uint32"},{"internalType":"uint256","name":"maxValueUsdc","type":"uint256"},{"internalType":"uint256","name":"amountPaidUsdc","type":"uint256"},{"internalType":"string","name":"verificationFailureMessage","type":"string"},{"internalType":"string","name":"payoutFailureMessage","type":"string"},{"internalType":"uint32","name":"offerDurationSeconds","type":"uint32"}],"indexed":false,"internalType":"struct TunnlTwitterOffers.Offer","name":"previousOffer","type":"tuple"}],"name":"PreviousOffer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"RequestFulfilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"RequestSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"offerId","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"functionsRequestId","type":"bytes32"},{"indexed":false,"internalType":"enum TunnlTwitterOffers.Status","name":"offerStatus","type":"uint8"}],"name":"RequestSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"offerId","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"functionsRequestId","type":"bytes32"},{"indexed":false,"internalType":"enum TunnlTwitterOffers.Status","name":"previousStatus","type":"uint8"},{"indexed":false,"internalType":"enum TunnlTwitterOffers.Status","name":"newStatus","type":"uint8"}],"name":"Response","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"offerId","type":"bytes32"}],"name":"Submitted","type":"event"},{"inputs":[{"internalType":"bytes32","name":"offerId","type":"bytes32"},{"internalType":"address","name":"contentCreator","type":"address"}],"name":"acceptOffer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"offerId","type":"bytes32"}],"name":"cancelOffer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"checkUpkeep","outputs":[{"internalType":"bool","name":"upkeepNeeded","type":"bool"},{"internalType":"bytes","name":"performData","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"offerId","type":"bytes32"},{"internalType":"uint256","name":"maxPaymentUsdc","type":"uint256"},{"internalType":"uint32","name":"acceptanceDurationSeconds","type":"uint32"},{"internalType":"uint32","name":"_offerDurationSeconds","type":"uint32"}],"name":"createOffer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getConfig","outputs":[{"components":[{"internalType":"uint8","name":"automationUpkeepBatchSize","type":"uint8"},{"internalType":"uint16","name":"advertiserFeePercentageBP","type":"uint16"},{"internalType":"uint16","name":"creatorFeePercentageBP","type":"uint16"},{"internalType":"uint24","name":"functionsCallbackGasLimit","type":"uint24"},{"internalType":"uint32","name":"flatFeeUsdc","type":"uint32"},{"internalType":"uint32","name":"minOfferDurationSeconds","type":"uint32"},{"internalType":"uint32","name":"minAcceptanceDurationSeconds","type":"uint32"},{"internalType":"uint32","name":"maxVerificationDelaySeconds","type":"uint32"},{"internalType":"uint64","name":"functionsSubscriptionId","type":"uint64"},{"internalType":"bytes32","name":"functionsDonId","type":"bytes32"},{"internalType":"bytes","name":"functionsEncryptedSecretsReference","type":"bytes"},{"internalType":"string","name":"functionsVerificationRequestScript","type":"string"},{"internalType":"string","name":"functionsPayoutRequestScript","type":"string"}],"internalType":"struct TunnlTwitterOffers.Config","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"offerIds","type":"bytes32[]"}],"name":"getOffers","outputs":[{"components":[{"internalType":"enum TunnlTwitterOffers.Status","name":"status","type":"uint8"},{"internalType":"uint16","name":"advertiserFeePercentageBP","type":"uint16"},{"internalType":"uint16","name":"creatorFeePercentageBP","type":"uint16"},{"internalType":"address","name":"advertiser","type":"address"},{"internalType":"address","name":"contentCreator","type":"address"},{"internalType":"uint32","name":"flatFeeUsdc","type":"uint32"},{"internalType":"uint32","name":"creationDate","type":"uint32"},{"internalType":"uint32","name":"acceptanceExpirationDate","type":"uint32"},{"internalType":"uint32","name":"payoutDate","type":"uint32"},{"internalType":"uint32","name":"dateToAttemptVerification","type":"uint32"},{"internalType":"uint256","name":"maxValueUsdc","type":"uint256"},{"internalType":"uint256","name":"amountPaidUsdc","type":"uint256"},{"internalType":"string","name":"verificationFailureMessage","type":"string"},{"internalType":"string","name":"payoutFailureMessage","type":"string"},{"internalType":"uint32","name":"offerDurationSeconds","type":"uint32"}],"internalType":"struct TunnlTwitterOffers.Offer[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"bytes","name":"response","type":"bytes"},{"internalType":"bytes","name":"err","type":"bytes"}],"name":"handleOracleFulfillment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"performData","type":"bytes"}],"name":"performUpkeep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"offerIds","type":"bytes32[]"}],"name":"retryRequests","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"s_config","outputs":[{"internalType":"uint8","name":"automationUpkeepBatchSize","type":"uint8"},{"internalType":"uint16","name":"advertiserFeePercentageBP","type":"uint16"},{"internalType":"uint16","name":"creatorFeePercentageBP","type":"uint16"},{"internalType":"uint24","name":"functionsCallbackGasLimit","type":"uint24"},{"internalType":"uint32","name":"flatFeeUsdc","type":"uint32"},{"internalType":"uint32","name":"minOfferDurationSeconds","type":"uint32"},{"internalType":"uint32","name":"minAcceptanceDurationSeconds","type":"uint32"},{"internalType":"uint32","name":"maxVerificationDelaySeconds","type":"uint32"},{"internalType":"uint64","name":"functionsSubscriptionId","type":"uint64"},{"internalType":"bytes32","name":"functionsDonId","type":"bytes32"},{"internalType":"bytes","name":"functionsEncryptedSecretsReference","type":"bytes"},{"internalType":"string","name":"functionsVerificationRequestScript","type":"string"},{"internalType":"string","name":"functionsPayoutRequestScript","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint8","name":"automationUpkeepBatchSize","type":"uint8"},{"internalType":"uint16","name":"advertiserFeePercentageBP","type":"uint16"},{"internalType":"uint16","name":"creatorFeePercentageBP","type":"uint16"},{"internalType":"uint24","name":"functionsCallbackGasLimit","type":"uint24"},{"internalType":"uint32","name":"flatFeeUsdc","type":"uint32"},{"internalType":"uint32","name":"minOfferDurationSeconds","type":"uint32"},{"internalType":"uint32","name":"minAcceptanceDurationSeconds","type":"uint32"},{"internalType":"uint32","name":"maxVerificationDelaySeconds","type":"uint32"},{"internalType":"uint64","name":"functionsSubscriptionId","type":"uint64"},{"internalType":"bytes32","name":"functionsDonId","type":"bytes32"},{"internalType":"bytes","name":"functionsEncryptedSecretsReference","type":"bytes"},{"internalType":"string","name":"functionsVerificationRequestScript","type":"string"},{"internalType":"string","name":"functionsPayoutRequestScript","type":"string"}],"internalType":"struct TunnlTwitterOffers.Config","name":"_config","type":"tuple"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"offerId","type":"bytes32"},{"internalType":"bool","name":"isTweetVerified","type":"bool"}],"name":"setVerificationStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"offerId","type":"bytes32"},{"internalType":"uint32","name":"verificationDelaySeconds","type":"uint32"}],"name":"submitTweet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];
