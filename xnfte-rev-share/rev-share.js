var ethers = require('ethers');  
var fs = require('fs');
var arbitrum_rpc = 'https://arb1.arbitrum.io/rpc';


var customHttpProviderArbitrum = new ethers.providers.JsonRpcProvider(arbitrum_rpc);

const NFTContractABI  = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "error",
      "name": "ApprovalCallerNotOwnerNorApproved",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "ApprovalQueryForNonexistentToken",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "ApprovalToCurrentOwner",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "ApproveToCaller",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "BalanceQueryForZeroAddress",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "MintToZeroAddress",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "MintZeroQuantity",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "OperatorNotAllowed",
      "inputs": [
        {
          "type": "address",
          "name": "operator",
          "internalType": "address"
        }
      ],
      "outputs": []
    },
    {
      "type": "error",
      "name": "OwnerQueryForNonexistentToken",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "TransferCallerNotOwnerNorApproved",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "TransferFromIncorrectOwner",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "TransferToNonERC721ReceiverImplementer",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "TransferToZeroAddress",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "error",
      "name": "URIQueryForNonexistentToken",
      "inputs": [],
      "outputs": []
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "approved",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "operator",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "bool",
          "name": "approved",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ClaimConditionsUpdated",
      "inputs": [
        {
          "type": "tuple[]",
          "name": "claimConditions",
          "components": [
            {
              "type": "uint256",
              "name": "startTimestamp",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "maxClaimableSupply",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "supplyClaimed",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "quantityLimitPerWallet",
              "internalType": "uint256"
            },
            {
              "type": "bytes32",
              "name": "merkleRoot",
              "internalType": "bytes32"
            },
            {
              "type": "uint256",
              "name": "pricePerToken",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "currency",
              "internalType": "address"
            },
            {
              "type": "string",
              "name": "metadata",
              "internalType": "string"
            }
          ],
          "indexed": false,
          "internalType": "struct IClaimCondition.ClaimCondition[]"
        },
        {
          "type": "bool",
          "name": "resetEligibility",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ContractURIUpdated",
      "inputs": [
        {
          "type": "string",
          "name": "prevURI",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "newURI",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "DefaultRoyalty",
      "inputs": [
        {
          "type": "address",
          "name": "newRoyaltyRecipient",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "newRoyaltyBps",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Initialized",
      "inputs": [
        {
          "type": "uint8",
          "name": "version",
          "indexed": false,
          "internalType": "uint8"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "MaxTotalSupplyUpdated",
      "inputs": [
        {
          "type": "uint256",
          "name": "maxTotalSupply",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OperatorRestriction",
      "inputs": [
        {
          "type": "bool",
          "name": "restriction",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnerUpdated",
      "inputs": [
        {
          "type": "address",
          "name": "prevOwner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "newOwner",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PlatformFeeInfoUpdated",
      "inputs": [
        {
          "type": "address",
          "name": "platformFeeRecipient",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "platformFeeBps",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PrimarySaleRecipientUpdated",
      "inputs": [
        {
          "type": "address",
          "name": "recipient",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleAdminChanged",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "previousAdminRole",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "newAdminRole",
          "indexed": true,
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleGranted",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleRevoked",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoyaltyForToken",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "royaltyRecipient",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "royaltyBps",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TokenURIRevealed",
      "inputs": [
        {
          "type": "uint256",
          "name": "index",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "revealedURI",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TokensClaimed",
      "inputs": [
        {
          "type": "uint256",
          "name": "claimConditionIndex",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "claimer",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "receiver",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "startTokenId",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "quantityClaimed",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TokensLazyMinted",
      "inputs": [
        {
          "type": "uint256",
          "name": "startTokenId",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "endTokenId",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "baseURI",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "bytes",
          "name": "encryptedBaseURI",
          "indexed": false,
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "DEFAULT_ADMIN_ROLE",
      "inputs": [],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "type": "address",
          "name": "operator",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "burn",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "claim",
      "inputs": [
        {
          "type": "address",
          "name": "_receiver",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_quantity",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "_currency",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_pricePerToken",
          "internalType": "uint256"
        },
        {
          "type": "tuple",
          "name": "_allowlistProof",
          "components": [
            {
              "type": "bytes32[]",
              "name": "proof",
              "internalType": "bytes32[]"
            },
            {
              "type": "uint256",
              "name": "quantityLimitPerWallet",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "pricePerToken",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "currency",
              "internalType": "address"
            }
          ],
          "internalType": "struct IDrop.AllowlistProof"
        },
        {
          "type": "bytes",
          "name": "_data",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "claimCondition",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "currentStartId",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "count",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "contractType",
      "inputs": [],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "contractURI",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "contractVersion",
      "inputs": [],
      "outputs": [
        {
          "type": "uint8",
          "name": "",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encryptDecrypt",
      "inputs": [
        {
          "type": "bytes",
          "name": "data",
          "internalType": "bytes"
        },
        {
          "type": "bytes",
          "name": "key",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "type": "bytes",
          "name": "result",
          "internalType": "bytes"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encryptedData",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "bytes",
          "name": "",
          "internalType": "bytes"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getActiveClaimConditionId",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getApproved",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBaseURICount",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBatchIdAtIndex",
      "inputs": [
        {
          "type": "uint256",
          "name": "_index",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getClaimConditionById",
      "inputs": [
        {
          "type": "uint256",
          "name": "_conditionId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "tuple",
          "name": "condition",
          "components": [
            {
              "type": "uint256",
              "name": "startTimestamp",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "maxClaimableSupply",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "supplyClaimed",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "quantityLimitPerWallet",
              "internalType": "uint256"
            },
            {
              "type": "bytes32",
              "name": "merkleRoot",
              "internalType": "bytes32"
            },
            {
              "type": "uint256",
              "name": "pricePerToken",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "currency",
              "internalType": "address"
            },
            {
              "type": "string",
              "name": "metadata",
              "internalType": "string"
            }
          ],
          "internalType": "struct IClaimCondition.ClaimCondition"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getDefaultRoyaltyInfo",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "uint16",
          "name": "",
          "internalType": "uint16"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPlatformFeeInfo",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "uint16",
          "name": "",
          "internalType": "uint16"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRevealURI",
      "inputs": [
        {
          "type": "uint256",
          "name": "_batchId",
          "internalType": "uint256"
        },
        {
          "type": "bytes",
          "name": "_key",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "type": "string",
          "name": "revealedURI",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleAdmin",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleMember",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "uint256",
          "name": "index",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "member",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleMemberCount",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "count",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoyaltyInfoForToken",
      "inputs": [
        {
          "type": "uint256",
          "name": "_tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "uint16",
          "name": "",
          "internalType": "uint16"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getSupplyClaimedByWallet",
      "inputs": [
        {
          "type": "uint256",
          "name": "_conditionId",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "_claimer",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "supplyClaimedByWallet",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grantRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "hasRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "hasRoleWithSwitch",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "initialize",
      "inputs": [
        {
          "type": "address",
          "name": "_defaultAdmin",
          "internalType": "address"
        },
        {
          "type": "string",
          "name": "_name",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "_symbol",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "_contractURI",
          "internalType": "string"
        },
        {
          "type": "address[]",
          "name": "_trustedForwarders",
          "internalType": "address[]"
        },
        {
          "type": "address",
          "name": "_saleRecipient",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "_royaltyRecipient",
          "internalType": "address"
        },
        {
          "type": "uint128",
          "name": "_royaltyBps",
          "internalType": "uint128"
        },
        {
          "type": "uint128",
          "name": "_platformFeeBps",
          "internalType": "uint128"
        },
        {
          "type": "address",
          "name": "_platformFeeRecipient",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "operator",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isEncryptedBatch",
      "inputs": [
        {
          "type": "uint256",
          "name": "_batchId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isTrustedForwarder",
      "inputs": [
        {
          "type": "address",
          "name": "forwarder",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "lazyMint",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "_baseURIForTokens",
          "internalType": "string"
        },
        {
          "type": "bytes",
          "name": "_data",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "batchId",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "maxTotalSupply",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "multicall",
      "inputs": [
        {
          "type": "bytes[]",
          "name": "data",
          "internalType": "bytes[]"
        }
      ],
      "outputs": [
        {
          "type": "bytes[]",
          "name": "results",
          "internalType": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "nextTokenIdToClaim",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "nextTokenIdToMint",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "operatorRestriction",
      "inputs": [],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownerOf",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "primarySaleRecipient",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "reveal",
      "inputs": [
        {
          "type": "uint256",
          "name": "_index",
          "internalType": "uint256"
        },
        {
          "type": "bytes",
          "name": "_key",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "type": "string",
          "name": "revealedURI",
          "internalType": "string"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "revokeRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "royaltyInfo",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "salePrice",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "receiver",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "royaltyAmount",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        },
        {
          "type": "bytes",
          "name": "data",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setApprovalForAll",
      "inputs": [
        {
          "type": "address",
          "name": "operator",
          "internalType": "address"
        },
        {
          "type": "bool",
          "name": "approved",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setClaimConditions",
      "inputs": [
        {
          "type": "tuple[]",
          "name": "_conditions",
          "components": [
            {
              "type": "uint256",
              "name": "startTimestamp",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "maxClaimableSupply",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "supplyClaimed",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "quantityLimitPerWallet",
              "internalType": "uint256"
            },
            {
              "type": "bytes32",
              "name": "merkleRoot",
              "internalType": "bytes32"
            },
            {
              "type": "uint256",
              "name": "pricePerToken",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "currency",
              "internalType": "address"
            },
            {
              "type": "string",
              "name": "metadata",
              "internalType": "string"
            }
          ],
          "internalType": "struct IClaimCondition.ClaimCondition[]"
        },
        {
          "type": "bool",
          "name": "_resetClaimEligibility",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setContractURI",
      "inputs": [
        {
          "type": "string",
          "name": "_uri",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setDefaultRoyaltyInfo",
      "inputs": [
        {
          "type": "address",
          "name": "_royaltyRecipient",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_royaltyBps",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setMaxTotalSupply",
      "inputs": [
        {
          "type": "uint256",
          "name": "_maxTotalSupply",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setOperatorRestriction",
      "inputs": [
        {
          "type": "bool",
          "name": "_restriction",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setOwner",
      "inputs": [
        {
          "type": "address",
          "name": "_newOwner",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setPlatformFeeInfo",
      "inputs": [
        {
          "type": "address",
          "name": "_platformFeeRecipient",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_platformFeeBps",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setPrimarySaleRecipient",
      "inputs": [
        {
          "type": "address",
          "name": "_saleRecipient",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setRoyaltyInfoForToken",
      "inputs": [
        {
          "type": "uint256",
          "name": "_tokenId",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "_recipient",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_bps",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "type": "bytes4",
          "name": "interfaceId",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenURI",
      "inputs": [
        {
          "type": "uint256",
          "name": "_tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalMinted",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "verifyClaim",
      "inputs": [
        {
          "type": "uint256",
          "name": "_conditionId",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "_claimer",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_quantity",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "_currency",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_pricePerToken",
          "internalType": "uint256"
        },
        {
          "type": "tuple",
          "name": "_allowlistProof",
          "components": [
            {
              "type": "bytes32[]",
              "name": "proof",
              "internalType": "bytes32[]"
            },
            {
              "type": "uint256",
              "name": "quantityLimitPerWallet",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "pricePerToken",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "currency",
              "internalType": "address"
            }
          ],
          "internalType": "struct IDrop.AllowlistProof"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "isOverride",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    }
  ];
const NFTcontractAddress = "0x8778B7FD7e2480C6F9Ad1075Bd848B7Ce1b9d90C";
const NFTcontract = new ethers.Contract(NFTcontractAddress, NFTContractABI,);
const xNFTEContractABI  = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "add_to_whitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newController",
				"type": "address"
			}
		],
		"name": "changeController",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkpoint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_unlock_time",
				"type": "uint256"
			}
		],
		"name": "create_lock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "deposit_for",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "increase_amount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token_addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "min_time",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "provider",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "locktime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum VotingEscrow.DepositType",
				"name": "deposit_type",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ts",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_unlock_time",
				"type": "uint256"
			}
		],
		"name": "increase_amount_and_time",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_unlock_time",
				"type": "uint256"
			}
		],
		"name": "increase_unlock_time",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "remove_from_whitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "prevSupply",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "supply",
				"type": "uint256"
			}
		],
		"name": "Supply",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "provider",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ts",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_unlock_time",
				"type": "uint256"
			}
		],
		"name": "withdraw_and_create_lock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_block",
				"type": "uint256"
			}
		],
		"name": "balanceOfAt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_t",
				"type": "uint256"
			}
		],
		"name": "balanceOfAtT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "contracts_whitelist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "controller",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "epoch",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "get_last_user_slope",
		"outputs": [
			{
				"internalType": "int128",
				"name": "",
				"type": "int128"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "locked",
		"outputs": [
			{
				"internalType": "int128",
				"name": "amount",
				"type": "int128"
			},
			{
				"internalType": "uint256",
				"name": "end",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "locked__end",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAXTIME",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MINTIME",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "point_history",
		"outputs": [
			{
				"internalType": "int128",
				"name": "bias",
				"type": "int128"
			},
			{
				"internalType": "int128",
				"name": "slope",
				"type": "int128"
			},
			{
				"internalType": "uint256",
				"name": "ts",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "blk",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "slope_changes",
		"outputs": [
			{
				"internalType": "int128",
				"name": "",
				"type": "int128"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "supply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_block",
				"type": "uint256"
			}
		],
		"name": "totalSupplyAt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "t",
				"type": "uint256"
			}
		],
		"name": "totalSupplyAtT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transfersEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlocked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "user_point_epoch",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "user_point_history",
		"outputs": [
			{
				"internalType": "int128",
				"name": "bias",
				"type": "int128"
			},
			{
				"internalType": "int128",
				"name": "slope",
				"type": "int128"
			},
			{
				"internalType": "uint256",
				"name": "ts",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "blk",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_idx",
				"type": "uint256"
			}
		],
		"name": "user_point_history__ts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "version",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const xNFTEContractAddress = "0x0303A0e45aE3Ee7c0027BFF0eF38310DFf79EEf9";
const xNFTEcontract = new ethers.Contract(xNFTEContractAddress, xNFTEContractABI, customHttpProviderArbitrum);
const revenueContractABI  = [{"name":"tokens_per_week","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"uint256","name":"arg0"}],"stateMutability":"view","type":"function"},{"name":"ve_for_at","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"address","name":"_user"},{"type":"uint256","name":"_timestamp"}],"stateMutability":"view","type":"function"},{"name":"ve_supply","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"uint256","name":"arg0"}],"stateMutability":"view","type":"function"}];
// const revenueContractAddress = "0xC15DDD98341346A2d2C9bf0187f56666247dF4C6";
// const revenueContract = new ethers.Contract(revenueContractAddress, revenueContractABI, customHttpProviderArbitrum);
const WEEK = 604800;
const currentTime = Math.round(new Date().getTime() / 1000);
let last_epoch_start_time = Math.floor((currentTime-WEEK) / WEEK) * WEEK; 
console.log("Last Epoch timestamp: ",last_epoch_start_time);
console.log("Last Epoch start time: ",new Date(last_epoch_start_time*1000).toLocaleDateString("en-US", { timeZone: 'UTC' }),new Date(last_epoch_start_time*1000).toLocaleTimeString("en-US", { timeZone: 'UTC' }));
var totalSupply = 0;
var tokenOwners = [];
var tokens_in_epoch;
var ve_supply;
var txList = [['token_type,token_address,receiver,amount,id']];
async function loadHolders(){
    // read method
    await NFTcontract.totalSupply()
    .then((output) => 
        console.log("Total NFT Supply: ",totalSupply = output.toNumber())
    );
    await revenueContract.ve_supply(last_epoch_start_time)
    .then((output) => 
        console.log("ve supply: ",ve_supply = ethers.utils.formatEther(output))
    );
    await revenueContract.tokens_per_week(last_epoch_start_time)
    .then((output) => 
        console.log("ETH in last Epoch: ",tokens_in_epoch = ethers.utils.formatEther(output))
    );
    
    i = 1;
    while(i<=totalSupply){
        console.log("Checking token ID",i);
        let tokenOwner;
        await NFTcontract.ownerOf(i).then((address) => tokenOwner = address);
        if ( ! tokenOwners.includes(tokenOwner) ) {
            tokenOwners.push(tokenOwner)
            console.log("Owner: ",tokenOwner);
    
            let ve_for_at;
    
            await revenueContract.ve_for_at(ethers.utils.getAddress(tokenOwner),last_epoch_start_time)
            .then((balance) => console.log("xNFTE Amount: ",ve_for_at = ethers.utils.formatEther(balance)));
    
            if ( ve_for_at > 0 ) {
                let ve_share = ve_for_at / ve_supply;
                let eth_share = ve_share * tokens_in_epoch;
    
                console.log("Percentage share of weekly pool: ",ve_share*100);
                console.log("----> Owner will receive rev share");
                console.log("Allocated ETH: ",Number(eth_share).toFixed(18));
    
                txList.push(['erc20','',tokenOwner,Number(eth_share).toFixed(18),'']);
            }
        }
        i++;
    }
    console.log(txList);
    let csv = txList.join('\n');
    fs.writeFile('./airdrop_data/txList'+last_epoch_start_time+'.csv', csv, 'utf8', function(err) {
        if (err) {
          console.log('Some error occured - file either not saved or corrupted file saved.');
        } else {
          console.log('It\'s saved!');
        }
    });
}
loadHolders();