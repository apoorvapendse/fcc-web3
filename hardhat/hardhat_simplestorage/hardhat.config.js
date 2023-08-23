require("@nomicfoundation/hardhat-toolbox");
require("./tasks/blockNumber");
require("hardhat-gas-reporter");
require("solidity-coverage");
const dotenv = require("dotenv");
dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",

  defaultNetwork: "hardhat",

  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    localhost: {
      url: "http://127.0.0.1:8545", //acconts are already placed in hardhat
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP,
  },
};
