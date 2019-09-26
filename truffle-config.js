const HDWalletProvider = require("truffle-hdwallet-provider-klaytn")

const NETWORK_ID = '1001'
const URL = 'https://api.baobab.klaytn.net:8651'
const GASLIMIT = '8500000'

const PRIVATE_KEY = 
'0x3de0c90ce7e440f19eff6439390c29389f611725422b79c95f9f48c856b58277'

module.exports = {
    networks: {
        baobab: {
            host:'127.0.0.1',
            port: 8551,
            from: null,//enter the account address
            provider: () => new HDWalletProvider(PRIVATE_KEY, URL),
            network_id: '1001',//baobab testnet
            gas: GASLIMIT, 
            gasPrice: 25000000000,//gasPrice of Baobab is 25 Gpeb
        },
    },
    compilers: {
        solc: {
            version: '0.4.24',
        },
    },
}

/** Deploy contract by unlocked account
klaytn: {
    host: HOST,
    port: PORT,
    network_id: NETWORK_ID,
    from: FROM,
    gas: GASLIMIT,
    gasPrice: null,
},**/