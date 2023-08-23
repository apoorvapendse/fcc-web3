const { task } = require("hardhat/config");

//hre=>hardhat runtime env
task("block-number", "Prints the current block number").setAction(
  async (taskArgs, hre) => {
    const blockNum = await hre.ethers.provider.getBlockNumber();
    console.log("current block num:", blockNum);
  }
);

module.exports = {};
