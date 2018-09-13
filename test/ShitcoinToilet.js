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
    shitcoinToilet2 = await ShitcoinToilet.new();
  });

  it('initialize ERC20 mock tokens', async () => {
    let supply = await token.totalSupply.call();
    assert.equal(supply.valueOf(), 0, 'should be 0');

    supply = await token2.totalSupply.call();
    assert.equal(supply.valueOf(), 0, 'should be 0');

  });

  it('mint ERC20 mock tokens', async () => {
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

  it('initialize ShitcoinToilet token', async () => {
    let name = await shitcoinToilet.name.call();
    assert.equal(name, '💩COIN', 'should be 💩COIN');

    let symbol = await shitcoinToilet.symbol.call();
    assert.equal(symbol, '💩COIN', 'should be 💩COIN');

    let supply = await shitcoinToilet.totalSupply.call();
    assert.equal(supply.valueOf(), 0, 'should be 0');
  });

  it('approve, toilet flush, mint token at ShitcoinToilet', async () => {
    let userBalance = await token.balanceOf.call(user);
    await token.approve(shitcoinToilet.address, Number.MAX_SAFE_INTEGER, {from: user});
    let amountToSpend = await token.allowance.call(user, shitcoinToilet.address);
    assert.equal(amountToSpend.valueOf(), Number.MAX_SAFE_INTEGER, 'should be large number');

    let shitcoinBalance = await shitcoinToilet.balanceOf.call(user);
    assert.equal(shitcoinBalance.valueOf(), 0, 'should be 0');

    await shitcoinToilet.toilet(token.address, userBalance, {from: user});

    let contractBalanceOfToken = await token.balanceOf.call(shitcoinToilet.address);
    assert.equal(contractBalanceOfToken.valueOf(), 1000, 'should be 1000');

    let userBalanceOfToken = await token.balanceOf.call(user);
    assert.equal(userBalanceOfToken.valueOf(), 0, 'should be 0');

    let contractShitcoinBalance = await shitcoinToilet.balanceOf.call(shitcoinToilet.address);
    assert.equal(contractShitcoinBalance.valueOf(), 0, 'should be 0');

    let userShitcoinBalance = await shitcoinToilet.balanceOf.call(user);
    assert.equal(userShitcoinBalance.valueOf(), 1000, 'should be 1000');

    let supply = await shitcoinToilet.totalSupply.call();
    assert.equal(supply.valueOf(), 1000, 'should be 1000');

  });

  it('approve, toilet flush, mint token2 at ShitcoinToilet', async () => {
    let userBalance = await token2.balanceOf.call(user);
    await token2.approve(shitcoinToilet.address, Number.MAX_SAFE_INTEGER, {from: user});
    let amountToSpend = await token2.allowance.call(user, shitcoinToilet.address);
    assert.equal(amountToSpend.valueOf(), Number.MAX_SAFE_INTEGER, 'should be large number');

    let shitcoinBalance = await shitcoinToilet.balanceOf.call(user);
    assert.equal(shitcoinBalance.valueOf(), 1000, 'should be 1000');

    await shitcoinToilet.toilet(token2.address, userBalance, {from: user});

    let contractBalanceOfToken = await token2.balanceOf.call(shitcoinToilet.address);
    assert.equal(contractBalanceOfToken.valueOf(), 17, 'should be 17');

    let userBalanceOfToken = await token2.balanceOf.call(user);
    assert.equal(userBalanceOfToken.valueOf(), 0, 'should be 0');

    let contractShitcoinBalance = await shitcoinToilet.balanceOf.call(shitcoinToilet.address);
    assert.equal(contractShitcoinBalance.valueOf(), 0, 'should be 0');

    let userShitcoinBalance = await shitcoinToilet.balanceOf.call(user);
    assert.equal(userShitcoinBalance.valueOf(), 1017, 'should be 1017');

    let supply = await shitcoinToilet.totalSupply.call();
    assert.equal(supply.valueOf(), 1017, 'should be 1017');

  });

  it('transfer flushed token from contract to external address', async () => {
    await shitcoinToilet.contractTransfer(token.address, accounts[2], 500, {from: owner});
    let externalBalance = await token.balanceOf.call(accounts[2]);
    assert.equal(externalBalance.valueOf(), 500, 'should be 500');

    let contractBalanceOfToken = await token.balanceOf.call(shitcoinToilet.address);
    assert.equal(contractBalanceOfToken.valueOf(), 500, 'should be 500');

  });

  it('user transfer ERC223 💩COIN to another address', async () => {
    let userShitcoinBalance = await shitcoinToilet.balanceOf.call(user);
    assert.equal(userShitcoinBalance.valueOf(), 1017, 'should be 1017');

    await shitcoinToilet.transfer(accounts[2], 200, {from: user});
    let externalBalance = await shitcoinToilet.balanceOf.call(accounts[2]);
    assert.equal(externalBalance.valueOf(), 200, 'should be 200');
    let userBalance = await shitcoinToilet.balanceOf.call(user);
    assert.equal(userBalance.valueOf(), 817, 'should be 817');

  });

  it('approve, toilet flush, mint ERC223 💩COIN at ShitcoinToilet2', async () => {
    await shitcoinToilet.approve(shitcoinToilet2.address, 817, {from: user});
    let amountToSpend = await shitcoinToilet.allowance.call(user, shitcoinToilet2.address);
    assert.equal(amountToSpend.valueOf(), 817, 'should be 817');

    let shitcoinBalance2 = await shitcoinToilet2.balanceOf.call(user);
    assert.equal(shitcoinBalance2.valueOf(), 0, 'should be 0');

    await shitcoinToilet2.toilet(shitcoinToilet.address, 300, {from: user});

    let contractBalanceOfshitcoinToiletToken =
      await shitcoinToilet.balanceOf.call(shitcoinToilet2.address);
    assert.equal(contractBalanceOfshitcoinToiletToken.valueOf(), 300, 'should be 300');

    let userBalanceOfToken = await shitcoinToilet.balanceOf.call(user);
    assert.equal(userBalanceOfToken.valueOf(), 517, 'should be 517');

  });

/*
// truffle bug: can't test function defined twice with same name but different
// number of parameters. works fine when named something besides transfer.
  it('transfer ERC223 💩COIN to contract without calling approve', async () => {
    await shitcoinToilet.transfer(shitcoinToilet2.address, 500, 0, {from: user});

    let userBalanceOfToken = await shitcoinToilet.balanceOf.call(user);
    assert.equal(userBalanceOfToken.valueOf(), 0, 'should be 0');

  });
*/
});
