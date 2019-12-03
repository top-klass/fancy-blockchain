const fs = require('fs')
const Fancy = artifacts.require('./Fancy.sol')

module.exports = function (deployer) {
  deployer.deploy(Fancy)
  .then(() => {
    if (Fancy._json) {
      fs.writeFile('deployABI', JSON.stringify(Fancy._json.abi),
      (err) => {
        if (err) throw err;
        console.log("SUCCESS FOR ABI FILE LOADED")
      })
    }

    fs.writeFile('deployedAddress', Fancy.address,
    (err) => {
      if(err) throw err;
      console.log("SUCCESS FOR ADDRESS FILE LOADED")
    })
  })
}
