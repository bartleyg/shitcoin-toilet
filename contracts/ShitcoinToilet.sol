pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "./erc223-20-contracts/contracts/ERC223BasicToken.sol";
import "./erc223-20-contracts/contracts/ERC223ReceivingContract.sol";

/*
Contract receives ERC20 tokens and mints equal amount ERC223 💩coin in return
This requires 2 separate transactions by user
Transaction 1: user does approve(address thisContract, uint amt) transaction on the token in web3
Transaction 2: once mined user calls this contract toilet(address token, uint amt) which:
  1. checks token.allowance(address msg.sender, address thisContract) matches amt
  2. checks token.balanceOf(address msg.sender) >= amt (is this checked already in approve?)
  3. token.transferFrom(address msg.sender, address thisContract, uint amt)
  4. mints ERC223 💩coin in amount equal to that received by user's token
*/
contract ShitcoinToilet is DetailedERC20, MintableToken, ERC223BasicToken, ERC223ReceivingContract {

  string constant NAME = "💩COIN";
  string constant SYMBOL = "💩COIN";
  uint8 constant DECIMALS = 18;

  event Flushed(address indexed user, address token, uint amount);

  // initialize base constructor with coin parameters
  constructor()
    DetailedERC20(NAME, SYMBOL, DECIMALS)
    public
  {}

  // toilet() requires that msg.sender has already called approve() on the token
  // with this contract's address to allow this contract to receive the tokens
  function toilet(address token, uint amount) external returns(uint) {
    require(token != address(this), 'cant send 💩COIN to own toilet');  // would be pointless to do this
    require(ERC20(token).allowance(msg.sender, address(this)) >= amount, 'insufficient allowance');
    require(ERC20(token).balanceOf(msg.sender) >= amount, 'insufficient balance');
    require(ERC20(token).transferFrom(msg.sender, address(this), amount), 'transferFrom failed');
    emit Flushed(msg.sender, token, amount);
    // mints 💩COIN in amount equal to that received by user's token
    require(toiletMint(msg.sender, amount), 'toiletMint failed');
    return balanceOf(msg.sender);
  }

  function toiletMint(address _to, uint256 _amount) private canMint returns (bool) {
    totalSupply_ = totalSupply_.add(_amount);
    balances[_to] = balances[_to].add(_amount);
    emit Mint(_to, _amount);
    emit Transfer(address(0), _to, _amount);
    return true;
  }

  // handler called when an ERC223 token is sent to this contract
  function tokenFallback(address _from, uint256 _value, bytes _data) public {}

  // add ability for contract to transfer 3rd party ERC20 tokens it owns
  function contractTransfer(address token, address to, uint tokens) public onlyOwner {
    ERC20(token).transfer(to, tokens);
  }

  // add ability for contract to approve 3rd party ERC20 tokens it owns
  function contractApprove(address token, address spender, uint tokens) public onlyOwner {
    ERC20(token).approve(spender, tokens);
  }

  // add ability for contract to transfer 3rd party ERC20 tokens it owns
  function contractTransferFrom(address token, address from, address to, uint tokens)
  public onlyOwner {
    ERC20(token).transferFrom(from, to, tokens);
  }

}
