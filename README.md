# This is ELO reward system projects

# `elo-project`

> React components and hooks for fast building dApps without running own backend

This Project is built on [react-moralis](https://github.com/MoralisWeb3/react-moralis). Also has its own context provider for quick access to `chainId` or `ethAddress`

There are many components in this boilerplate that do not require an active web3 provider, they use Moralis Web3 API. Moralis supports the most popular blockchains and their test networks. You can find a list of all available networks in [Moralis Supported Chains](https://docs.moralis.io/moralis-server/web3-sdk/intro#supported-chains)

Please check the [official documentation of Moralis](https://docs.moralis.io/#user) for all the functionalities of Moralis.

# 🚀 Quick Start

📄 Clone or fork `elo-project`:
```sh
git clone the repo
```
💿 Install all dependencies:

yarn install 
```
✏ Rename `.env.example` to `.env` in the main folder and provide your `appId` and `serverUrl` from Moralis ([How to start Moralis Server](https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server)) 
Example:
```jsx
REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
REACT_APP_MORALIS_SERVER_URL = https://xxxxxx.grandmoralis.com:2053/server
```
🚴‍♂️ Run your App:
```sh
yarn start
```

### `useNativeTransactions()` 

🧾 Gets the transactions from the current user or specified address. Returns an object with the number of transactions  and the array of native transactions 

**Options**:
- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain.
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `from_date` (optional): The date from where to get the transactions (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date' If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional):  Get the transactions to this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date' If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `from_block` (optional): The minimum block number from where to get the transactions Provide the param 'from_block' or 'from_date' If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): The maximum block number from where to get the transactions. Provide the param 'to_block' or 'to_date' If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `offset` (optional): Offset.
- `limit` (optional): Limit.

#
#
# ##################################