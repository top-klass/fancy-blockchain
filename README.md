# fancy-blockchain
## Directory Structure

```fancy
|_ contracts
  |__ Fancy.sol
  |__ Migrations.sol
|_ migrations
  |__ 1_initial_migrations.js
  |__ 2_deploy_contracts.js
|_ src
  |__ index.js
|_ truffle-config.js

```

## Description

```contracts/``` : Directory for Solidity source files of the smart contract

|_ ```Fancy.sol``` : a smart contract (written in Solidity) that creates a Fancy token

|_ ```Migrations.sol``` : a seperate Solidity file that manages and updates the status of the deployed smart contract

```migrations/``` : Directory for scriptable deployment files(written in JavaScript)

|_ ```1_initial_migrations.js``` : Migration (deployment) script for the ```Migrations``` contract found in the ```Migrations.sol``` file

|_ ```2_deploy_contracts.js``` : Migration script for the ```Fancy``` contract. (This will be executed after file is runned

```contracts/``` : Directory for javascript source files of function using caver-js

```truffle-config.js``` : Truffle configuration file for setting network information and other project-related settings


## ```Fancy.sol``` 

### ```event Transfer(uint256 value, address indexed to, address indexed from);```
-> Fancy/ERC20/IERC20.sol

-> Emitted when `value` tokens are moved from one account (`from`) to another (`to`).

### ```constructor(string memory name, string memory symbol) public{}```
-> Constructor defines a new ERC20 token's name and symbol, and to mint a predefined amount of token.

->The `name` of the token contract is the long name by which the token contract should be known

->The `symbol` of the token contract is the symbol by which the token contract should be known

### ```function totalSupply() public view returns(uint256) {}```
->  Function which returns the amount of tokens in existence

### ```function balanceOf(address account) public veiw returns(uint256)```
function which shows the balance of the account

### ```function transfer(address recipient, uint256 amount) public returns(bool)```
function which transfer certain amount of token(_price) from musician to fan if balance of musician should be bigger than the _price.
then emit `Transfer` event

### ```function transferFrom(address sender, address recipient, uint256 amount) public returns(bool)```
function which transfer certain amount of token(_price) from musician to fan if balance of musician should be bigger than the _price.
then emit `Transfer` event

### ```function _mint(address account, uint256 amount) internal {}```
-> Function that create a new ERC20 tokens. This is invoked only once from constructor when deploying the smart contract to mint a predefined amount of token

-> If additional token is required after deploying the smart contract, a new public method such as mint should be introduced.

-> CAUTION : only authorized users should be able to mint tokens

-> reference : https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20Mintable.sol

## ```index.js``` 

### ```value```

- ERC20ABI : 배포된 Smart Contract ERC20ABI
- contractAddress -> 배포된 Smart Contract Address 
- defaultAddress -> 배포된 Smart Contract Address default acount의 address
- defaultPrivateKey -> 배포된 Smart Contract Address default acount의 privatekey
- userAddress -> 로그인 되어있는 해당 유저의 address 


### ```App.callContractSupply```

-> Total Supply 조회

### ```App.registerAlbum(string userAdd)```

-> 앨범 등록 후 토큰 사용자의 계정에 토큰 지급

### ```App.perchaseThing(string userPk, string userAdd)```

-> 물건 구매 후 계정의 토큰 차감

### ```App.callBalanceOF(string userAdd)```

-> 사용자 계정의 잔고 조회