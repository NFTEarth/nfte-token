# NFTE Token

NFTEarth mrketplace native token information and relevant contracts. Staking and incentive contracts are under development and to be deployed on L2 chains. 

The $NFTE token contract been deployed to Ethereum Mainnet, Optimism and Arbitrum, Polyogon zkEVM, and Polygon POS.
[Etherscan](https://etherscan.io/token/0x0f9b80fc3c8b9123d0aef43df58ebdbc034a8901) - 
[Optimistic Etherscan](https://optimistic.etherscan.io/address/0xc96f4f893286137ac17e07ae7f217ffca5db3ab6) -
[Arbiscan](https://arbiscan.io/address/0xb261104a83887ae92392fb5ce5899fcfe5481456)
# NFTEarth

[![Node.js CI](https://github.com/consenlabs/tokenlon-contracts/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/consenlabs/tokenlon-contracts/actions/workflows/node.js.yml)
[![Built-with openzeppelin](https://img.shields.io/badge/built%20with-OpenZeppelin-3677FF)](https://docs.openzeppelin.com/)

NFTEarth is a decentralized NFT marketplace and hub on built on Layer2 blockchain technology. Visit [nftearth.exchange](https://nftearth.exchange)

> Notice: This repository may contain changes that are under development. Make sure the correct commit is referenced when reviewing specific deployed contract.


## Deployed contracts (Arbitrum, Optimism, Ethereum Mainnet)

| Contracts                        | Address                                                                                                               | Module           |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------- |
| NFTE                             | [0x0f9b80fc3c8b9123D0aEf43Df58ebDBC034A8901](https://etherscan.io/address/0x0f9b80fc3c8b9123d0aef43df58ebdbc034a8901) | Token            |
| ---------------- |
| NFTE  Optimism                   | [0xc96f4f893286137ac17e07ae7f217ffca5db3ab6](https://optimistic.etherscan.io/address/0xc96f4f893286137ac17e07ae7f217ffca5db3ab61) | Token            |
| ---------------- |
| NFTE  Arbitrum                   | [0xb261104a83887ae92392fb5ce5899fcfe5481456](https://arbiscan.io/address/0xb261104a83887ae92392fb5ce5899fcfe5481456) | Token            |
| ---------------- |
| xNFTE                            | [0x0f9b80fc3c8b9123D0aEf43Df58ebDBC034A89XX](https://etherscan.io/address/0x0f9b80fc3c8b9123d0aef43df58ebdbc034a8901) | Staking          |
| NFTEStaking (Logic contract)     | [0x0f9b80fc3c8b9123D0aEf43Df58ebDBC034A89XX](https://etherscan.io/address/0x0f9b80fc3c8b9123d0aef43df58ebdbc034a8901) | Staking          |

The total token supply is hardcapped at 100,000,000 across ALL network deployments and is to be allocated and distributerd per the voted tokenomic schedule across each network the token is live on.

Airdrop 1 of the token began on February 21, 2023. 1,786 addresses qualified afor airdrop 1. Airdrop 2 starting date is TBD.

Eligible addresses for airdrop 1 can be viewed in this workbook here - [Google Sheets](https://docs.google.com/spreadsheets/d/1IkqCVrBkbT_s4IkQAbFAkgWXHICVqO7eKBE_AumzZco/edit?usp=sharing)

See the [Documentation](docs.nftearth.exchange) for more information on NFTEarth and the tokenomics of $NFTE.

Open Zeppelin is the web3 gold standard in terms of contract libraries for token contract deployments for use cases such as NFTE, they provide a library for secure smart contract development. The token was deployed using Open Zeppelin's Contracts Library and this can be referenced [here](https://docs.openzeppelin.com/contracts/4.x/).
