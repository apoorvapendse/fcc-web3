const ethers = require("ethers");
const fs = require("fs-extra");
async function main() {
  const ganache = require("ganache");

  const provider = new ethers.JsonRpcProvider("HTTP://127.0.0.1:8545");
  //line no 4 connects us to the blockchain on localhost

  const wallet = new ethers.Wallet(
    "0x77660aaada8be33d10c80ebc844f8a75a77100d0676de4f99ab24c5fc4809ae8",
    provider
  );
  //line no 8 connects the wallet with given private key to the blockchain on localhost

  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy();
  // const contract = await contractFactory.deploy({ gasPrice: 100000000000 })

  console.log(contract.deploymentTransaction());
}
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
