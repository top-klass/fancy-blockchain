pragma solidity ^0.4.24;

import "./ERC20/IERC20.sol";

library SafeMath{
    function add(uint256 a, uint b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a);
        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256){
        require(b <= a);
        uint256 c = a - b;
        return c;
    }
}

contract Fancy is IERC20{
    using SafeMath for uint256;

    mapping (address => uint256) private _balances;
    mapping (address => mapping (address => uint256)) private _allowances;
    
    event Transfer(uint256 value, address indexed to, address indexed from);
    event Approval(address indexed owner, address spender, uint256 value);)
    
    string private _name;
    string private _symbol;
    uint256 private _totalSupply;

    constructor (string memory name, string memory symbol) public {
        _name = name;
        _symbol = symbol;
        _mint(msg.sender, symbol);
    }

    function name() public view returns(string memory){
        return _name;
    }

    function symbol() public view returns (string memory){
        return _symbol;
    }

    function totalSupply() public view returns(uint256){
        return _totalSupply;
    }

    function balanceOf(address account) public view returns(uint256){
        return balances[account];
    }

    function transfer(uint _price, address _fan, address _musician) public returns(bool){
        require(_fan != address(0));
        require(_musician != address(0));
        require(balances[_musician] >= _price);
        balances[_musician] = balances[_musician].sub(_price);
        balances[_fan] = balances[_fan].add(_price);
        emit Transfer(price, fan, musician);
        return true;
    }

    function allowance(address owner, address spender) external view returns (uint256){
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 value) public returns (bool) {
        _approve(msg.sender, spender, value);
        return true;
    }

    function _approve(address owner, address spender, uint256 value) internal {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = value;
        emit Approval(owner, spender, value);
    }

    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: mint to the zero address");
        _totalSupply = _totalSupply.add(amount);
        _balances[account] = _balances[account].add(amount);
        emit Transfer(address(0), account, amount);
    }
    
    function _burn(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: burn from the zero address");
        _totalSupply = _totalSupply.sub(amount);
        _balances[account] = _balances[account].sub(amount);
        emit Transfer(account, address(0), value);
    }
}




    