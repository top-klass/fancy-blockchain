# fancy-blockchain
## Directory Structure

```fancy
|_ contracts
  |__ Fancy.sol
  |__ Migrations.sol
  |__ ERC20
  |__ ERC721
|_ migrations
  |__ 1_initial_migrations.js
  |__ 2_deploy_contracts.js
|_ truffle-config.js

```

## Description

```contracts/``` : Directory for Solidity source files of the smart contract

|__  ```Fancy.sol``` : a smart contract (written in Solidity) that creates a Fancy token

|__ ```Migrations.sol``` : a seperate Solidity file that manages and updates the status of the deployed smart contract

|__ ```ERC20/``` : Directory for Solidity source files of the ERC-20

|__ ```ERC721/``` : Directory for Solidity source files of the ERC-721

```migrations/``` : Directory for scriptable deployment files(written in JavaScript)

|__ ```1_initial_migrations.js``` : Migration (deployment) script for the ```Migrations``` contract found in the ```Migrations.sol``` file

|__ ```2_deploy_contracts.js``` : Migration script for the ```Fancy``` contract. (This will be executed after ```1_initial_migrations.js``` file is runned

```truffle-config.js``` : Truffle configuration file for setting network information and other project-related settings

