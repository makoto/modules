const Portis = require('@portis/web3')

global.provider = (config) => new Promise((resolve, reject) => {
  const portis = new Portis(
    config._portis ? config._portis.appId : '3269932e-25a4-4350-b543-e5e762acb9ae',
    config.provider.network
  )
  portis.provider.disable       = portis.logout.bind(portis);
  portis.provider.changeNetwork = portis.changeNetwork.bind(portis);
  resolve(portis.provider)
})
