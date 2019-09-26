const Fancy = artifacts.require('./Fancy.sol')
const fs = require('fs')

module.exports = function (deployer) {
    deployer.deploy(Fancy)
    .then(() => {
        if(Fancy._json) {
            fs.writeFile(
                'deployedABI',
                JSON.stringify(Fancy._json.abi, 2),
                (err) => {
                    if(err) throw err
                    console.log(`The abi of ${Fancy._json.contractName} is recorded on deployedABI file`)
                })
        }
        fs.writeFile(
            'deployedAddress',
            Fancy.address,
            (err) => {
                if(err) throw err
                console.log(`The deployed contract address * ${Fancy.address} * is recorded on deployedAddress file`)
            })
    })
}