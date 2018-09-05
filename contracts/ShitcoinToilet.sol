pragma solidity ^0.4.24;

import { Ownable } from "openzeppelin-solidity/contracts/ownership/Ownable.sol";

/*
Contract receives ERC20 tokens and mints equal amount 💩coin in return
This requires 2 separate transactions by user
Transaction 1: user does approve(address thisContract, uint amt) transaction on the token in web3
Transaction 2: once mined user calls this contract toilet(address token, uint amt) which:
  1. checks token.allowance(address msg.sender, address thisContract) matches amt
  2. checks token.balanceOf(address msg.sender) >= amt (is this checked already in approve?)
  3. token.transferFrom(address msg.sender, address thisContract, uint amt)
  4. mints ERC777 💩coin in amount equal to that received by user's token
*/
contract ShitcoinToilet is Ownable {

  event Flushed(address indexed user, address token, uint amount);

  address[] _defaultOperators = [msg.sender];

  // initialize base constructor with coin parameters
  //constructor() public ERC777ERC20BaseToken("💩COIN", "💩COIN", 1, _defaultOperators) {}

  // toilet() requires that msg.sender has already called approve() on the token
  // with this contract's address to allow this contract to receive the tokens
  function toilet(address token, uint amount) external returns(uint) {
    require(token != address(this));  // would be pointless to do this
    require(ERC20Token(token).allowance(msg.sender, address(this)) >= amount);
    require(ERC20Token(token).balanceOf(msg.sender) >= amount);
    require(ERC20Token(token).transferFrom(msg.sender, address(this), amount));
    emit Flushed(msg.sender, token, amount);
    // mints 💩coin in amount equal to that received by user's token

    return balanceOf(msg.sender);
  }

  // add ability for contract to transfer 3rd party ERC20 tokens it owns
  function contractTransfer(address token, address to, uint tokens) {
    ERC20Token(token).transfer(to, tokens);
  }

  // add ability for contract to approve 3rd party ERC20 tokens it owns
  function contractApprove(address token, address spender, uint tokens) {
    ERC20Token(token).approve(spender, tokens);
  }

  // add ability for contract to transfer 3rd party ERC20 tokens it owns
  function contractTransferFrom(address token, address from, address to, uint tokens) {
    ERC20Token(token).transferFrom(from, to, tokens);
  }

}
