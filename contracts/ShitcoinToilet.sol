pragma solidity ^0.4.24;

import "./ERC777/contracts/ERC20Token.sol";
import { ERC777ERC20BaseToken } from "./ERC777/contracts/ERC777ERC20BaseToken.sol";
import { Ownable } from "openzeppelin-solidity/contracts/ownership/Ownable.sol";

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
contract ShitcoinToilet is ERC777ERC20BaseToken, Ownable {

  event Flushed(address indexed user, address token, uint amount);

  address[] _defaultOperators = [msg.sender];

  // initialize base constructor with coin parameters
  constructor() public ERC777ERC20BaseToken("💩COIN", "💩COIN", 1, _defaultOperators) {}

  // toilet() requires that msg.sender has already called approve() on the token
  // with this contract's address to allow this contract to receive the tokens
  function toilet(address token, uint amount) external returns(uint) {
    require(token != address(this));  // would be pointless to do this
    require(ERC20Token(token).allowance(msg.sender, address(this)) >= amount);
    require(ERC20Token(token).balanceOf(msg.sender) >= amount);
    require(ERC20Token(token).transferFrom(msg.sender, address(this), amount));
    emit Flushed(msg.sender, token, amount);
    // mints ERC777 💩coin in amount equal to that received by user's token
    doMint(msg.sender, amount, ""); // emits its own Minted event
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

  /* -- Mint And Burn Functions (not part of the ERC777 standard, only the Events/tokensReceived call are) -- */
  //
  /// @notice Generates `_amount` tokens to be assigned to `_tokenHolder`
  ///  Sample mint function to showcase the use of the `Minted` event and the logic to notify the recipient.
  /// @param _tokenHolder The address that will be assigned the new tokens
  /// @param _amount The quantity of tokens generated
  /// @param _operatorData Data that will be passed to the recipient as a first transfer
  function mint(address _tokenHolder, uint256 _amount, bytes _operatorData) public onlyOwner {
      doMint(_tokenHolder, _amount, _operatorData);
  }

  function doMint(address _tokenHolder, uint256 _amount, bytes _operatorData) private {
      requireMultiple(_amount);
      mTotalSupply = mTotalSupply.add(_amount);
      mBalances[_tokenHolder] = mBalances[_tokenHolder].add(_amount);

      callRecipient(msg.sender, 0x0, _tokenHolder, _amount, "", _operatorData, true);

      emit Minted(msg.sender, _tokenHolder, _amount, _operatorData);
      if (mErc20compatible) { emit Transfer(0x0, _tokenHolder, _amount); }
  }

}
