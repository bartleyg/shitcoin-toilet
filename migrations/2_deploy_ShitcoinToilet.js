const ShitcoinToilet = artifacts.require("ShitcoinToilet");

module.exports = async function(deployer) {
  // deployment steps
  await deployer.deploy(ShitcoinToilet);
};
