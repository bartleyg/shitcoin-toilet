pragma solidity ^0.4.24;

import "ReferenceToken.sol";

/*
Contract receives ERC20 tokens and mints equal amount ERC777 💩coin in return
This requires 2 separate transactions by user
Transaction 1: user does approve(address thisContract, uint amt) transaction on the token in web3
Transaction 2: once mined user calls this contract toilet(address token, uint amt) which:
  1. checks token.allowance(address msg.sender, address thisContract) matches amt
  2. checks token.balanceOf(address msg.sender) >= amt (is this checked already in approve?)
  3. token.transferFrom(address msg.sender, address thisContract, uint amt)
  4. mints ERC777 💩coin in amount equal to that received by user's token
*/
contract ShitcoinToilet is ReferenceToken {

  event Flushed(address indexed user, address token, uint amount);

  constructor() public {
    ReferenceToken("💩COIN", "💩COIN", 1);
  }

  // toilet() requires that msg.sender has already called approve() on the token
  // with this contract's address to allow this contract to receive the tokens
  function toilet(address token, uint amount) external {
    require(token != address(this));  // would be pointless to do this
    require(ERC20(token).allowance(msg.sender, address(this)) >= amount);
    require(ERC20(token).balanceOf(msg.sender) >= amount);
    require(ERC20(token).transferFrom(msg.sender, address(this), amount));
    emit Flushed(msg.sender, token, amount);
    // mints ERC777 💩coin in amount equal to that received by user's token
    mint(msg.sender, amount, 0x); // emits its own message
    return balanceOf(msg.sender);
  }

  /* add ability for contract to handle 3rd party tokens it owns */
  function contractTransfer(address token, address to, uint tokens) {
    ERC20(token).transfer(to, tokens);
  }

  function contractApprove(address token, address spender, uint tokens) {
    ERC20(token).approve(spender, tokens);
  }

  function contractTransferFrom(address token, address from, address to, uint tokens) {
    ERC20(token).transferFrom(from, to, tokens);
  }

}

contract ERC20 {
  function totalSupply() public constant returns (uint);
  function balanceOf(address tokenOwner) public constant returns (uint balance);
  function allowance(address tokenOwner, address spender) public constant returns (uint remaining);
  function transfer(address to, uint tokens) public returns (bool success);
  function approve(address spender, uint tokens) public returns (bool success);
  function transferFrom(address from, address to, uint tokens) public returns (bool success);
  event Transfer(address indexed from, address indexed to, uint tokens);
  event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}
