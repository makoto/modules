const WalletLinkProvider = require('@walletconnect/web3-provider').default
const ethers = require('ethers').ethers
global.provider = (config) => new Promise((resolve) => {
  const INFURA_KEY = '27e484dcd9e3efcfd25a83a78777cdf1'
  const ETH_JSONRPC_URL = `https://${config.provider.network}.infura.io/v3/${INFURA_KEY}`
  const CHAIN_ID = (new ethers.providers.InfuraProvider(config.provider.network))._network.chainId;

  // Initialize WalletLink
  export const walletLink = new WalletLink({
    appName: 'ENSLogin'
  })
  
  // Initialize a Web3 Provider object
  const provider = walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID)  
  resolve(provider);
})
