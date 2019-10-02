# fancy-blockchain
## Directory Structure

```fancy
|_ contracts
  |__ Fancy.sol
  |__ Migrations.sol
  |__ ERC20
      |__ IERC.sol
|_ migrations
  |__ 1_initial_migrations.js
  |__ 2_deploy_contracts.js
|_ truffle-config.js

```

## Description

```contracts/``` : Directory for Solidity source files of the smart contract

|_ ```Fancy.sol``` : a smart contract (written in Solidity) that creates a Fancy token

|_ ```Migrations.sol``` : a seperate Solidity file that manages and updates the status of the deployed smart contract

|_ ```ERC20/``` : Directory for Solidity source files of the ERC-20

|___ ```IERC20.sol``` : Interface all the ERC20 implementations

```migrations/``` : Directory for scriptable deployment files(written in JavaScript)

|_ ```1_initial_migrations.js``` : Migration (deployment) script for the ```Migrations``` contract found in the ```Migrations.sol``` file

|_ ```2_deploy_contracts.js``` : Migration script for the ```Fancy``` contract. (This will be executed after file is runned

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

### ```function balanceOf(address _owner) public veiw returns(uint256)```
function which shows the balance of the `msg.sender`

### ```function transfer(uint _price, address _fan, address _musician) public returns(bool)```
function which transfer certain amount of token(_price) from musician to fan if balance of musician should be bigger than the _price.
then emit `Transfer` event

### ```function approve(address spender, uint value) public returns (bool) {}```
-> function which allows spender to withdraw from your account multiple times, up to the amount

-> approve just invokes internal method _approve which implements actual behavior of approve. msg.sender is passed as the account owner.

### ```function _approve(address owner, address spender, uint256 value) internal {}```
-> function which approves updates `_allowances` which is a 2-dimensional dictionary maintaining allowed value for spender from specific address

### ```function _mint(address account, uint256 amount) internal {}```
-> Function that create a new ERC20 tokens. This is invoked only once from constructor when deploying the smart contract to mint a predefined amount of token

-> If additional token is required after deploying the smart contract, a new public method such as mint should be introduced.

-> CAUTION : only authorized users should be able to mint tokens

-> reference : https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20Mintable.sol

### ```function _burn(address account, uint256 amount) internal {}```
-> Function which destroys `amount` tokens from `account`, reducing the total supply.

