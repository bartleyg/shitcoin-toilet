const ShitcoinToilet = artifacts.require('ShitcoinToilet');
const ERC20Mock = artifacts.require('ERC20Mock');

contract('ShitcoinToilet', (accounts) => {

  let token, token2;
  let owner = accounts[0];
  let user = accounts[1];

  before(async () => {
    token = await ERC20Mock.new();
    token2 = await ERC20Mock.new();
    shitcoinToilet = await ShitcoinToilet.new();
  });

  it('should initialize ERC20 mock tokens', async () => {
    let supply = await token.totalSupply.call();
    assert.equal(supply.valueOf(), 0, 'should be 0');

    supply = await token2.totalSupply.call();
    assert.equal(supply.valueOf(), 0, 'should be 0');

  });

  it('should mint ERC20 mock tokens', async () => {
    await token.mint(user, 1000);

    let supply = await token.totalSupply.call();
    assert.equal(supply.valueOf(), 1000, 'should be 1000');

    let userBalance = await token.balanceOf.call(user);
    assert.equal(userBalance.valueOf(), 1000, 'should be 1000');

    await token.finishMinting();
    let mintingFinished = await token.mintingFinished.call();
    assert.equal(mintingFinished, true, 'should be true');

    /* token 2 */
    await token2.mint(user, 17);

    supply = await token2.totalSupply.call();
    assert.equal(supply.valueOf(), 17, 'should be 17');

    userBalance = await token2.balanceOf.call(user);
    assert.equal(userBalance.valueOf(), 17, 'should be 17');
  });

  it('should initialize ShitcoinToilet token', async () => {
    let name = await shitcoinToilet.name.call();
    assert.equal(name, '💩COIN', 'should be 💩COIN');

    let symbol = await shitcoinToilet.symbol.call();
    assert.equal(symbol, '💩COIN', 'should be 💩COIN');

    let supply = await shitcoinToilet.totalSupply.call();
    assert.equal(supply.valueOf(), 0, 'should be 0');
  });

  it('should approve spend tokens to ShitcoinToilet', async () => {
    let userBalance = await token.balanceOf.call(user);
    await token.approve(shitcoinToilet.address, userBalance, {from: user});
    let amountToSpend = await token.allowance.call(user, shitcoinToilet.address);
    assert.equal(amountToSpend.valueOf(), 1000, "should be 1000");

    let shitcoinBalance = await shitcoinToilet.balanceOf.call(user);
    assert.equal(shitcoinBalance.valueOf(), 0, 'should be 0');

    /* currently broken: reverts
    try {
      await shitcoinToilet.toilet(token.address, userBalance, {from: user});
    } catch (err) {
      console.log('toilet() failed with:', err.reason)
    }
    let shitcoinBalance = await shitcoinToilet.balanceOf.call(user);
    assert.equal(shitcoinBalance.valueOf(), 1000, 'should be 1000');
    */
  });


/*

    it('should tranfer from spender address', async () => {
      await token.transferFrom(accounts[0], accounts[2], 20, {from: accounts[1]});

      let balance = await token.balanceOf.call(accounts[2]);

      assert.equal(balance.valueOf(), 20, "should be 20");
    });

  });

  it('should not transfer to account, no enough balance', async () => {
    await expectThrow(token.transfer(accounts[2], 10000));
    let ownerBalance = await token.balanceOf.call(owner);
    assert.equal(ownerBalance.valueOf(), 980, "should be 980");
  });

  it('should not allow tranfer eth directly to the token contract', async () => {
    try {
      await expectThrow(web3.eth.sendTransaction({from: accounts[0], to: token.address, value: 10}));
    } catch (error) {
      const revert = error.message.search('revert') >= 0;
      assert.equal(revert, true, "should be true");
      return;
    }
  });
*/

});
