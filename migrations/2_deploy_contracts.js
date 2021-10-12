const AzerothNFT = artifacts.require("AzerothNFT");

module.exports = function(deployer) {
    deployer.deploy(AzerothNFT);
};