import Caver from 'caver-js';

const config = {
  rpcURL: 'https://api.baobab.klaytn.net:8651'
}
const cav = new Caver(config.rpcURL);

const ERC20ABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
const contractAddress = '0x3ad4b7c644cfd908211f6d96512ed7700ee8c2cc'

const defaultAddress = '0xd9a36d4123785719e7056e0558f1d70036767086'; //wallet address
const defaultPrivateKey = '0xc15036dbf54c31b60378d3019c6541a8f7932626f1051058c5862ebb0ba4a781';
const userAddress = ''

const agContract = new cav.klay.Contract(
  ERC20ABI,
  contractAddress,
  {
    from: defaultAddress, // default from address
    gasPrice: "25000000000" // default gas price in peb, 25 Gpeb in this case
  }
);

cav.klay.accounts.wallet.add(
  '0xc15036dbf54c31b60378d3019c6541a8f7932626f1051058c5862ebb0ba4a781',
);

cav.klay.defaultAccount = defaultAddress;
agContract.options.from = defaultAddress; // default from address
agContract.options.gasPrice = "25000000000"; // default gas price in peb
agContract.options.gas = 5000000; // provide as fallback always 5M gas

const App = {
  callContractSupply: async function () {
    agContract.methods.totalSupply().call()
    .then(function(result) {
      const AAAAA = result;
      console.log(AAAAA/100000000);
    })
  },
  registerAlbum: function() {
    agContract.methods.transfer('0xb0f3fc04b7ac3ab873893559419fd6fb04abfb8d', 100000000).send()
    .then(function(result) {
      const AAAAA = result;
      console.log(AAAAA);

    })
  },
  perchaseThing: function() {
    //구매하는 user privatekey
    cav.klay.accounts.wallet.add(
      '0xd5c1751ba42ca5cb39e5875fb4f35b368d80da0a6fa825e296e1f85e3b3a5127',
    );
    
    //@param
    //(sender, receipt, amount)
    agContract.methods.transferFrom('0xb0f3fc04b7ac3ab873893559419fd6fb04abfb8d', defaultAddress, 100000000).send()
    .then(function(result) {
      const AAAAA = result;
      console.log(AAAAA);

    })
  },

  callBalanceOF: function() {
    console.log("Clicked BalanceOf, Owner : ");
    
    //msg.owner
    agContract.methods.balanceOf(defaultAddress).call()
    .then(function(result) {
      const AAAAA = result/100000000;
      console.log(AAAAA);
    })

    //test용 user acount
    agContract.methods.balanceOf('0xb0f3fc04b7ac3ab873893559419fd6fb04abfb8d').call()
    .then(function(result) {
      const AAAAA = result/100000000;
      console.log(AAAAA);
    })
  }
};
          
window.App = App;

window.addEventListener("load", function () {
  this.console.log("hello")
});