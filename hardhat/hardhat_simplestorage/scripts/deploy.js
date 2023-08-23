const { ethers } = require("hardhat");

async function main() {
  const Token = await ethers.getContractFactory("SimpleStorage");

  const simpleStorage = await Token.deploy();

  console.log("token address: ", await simpleStorage.getAddress());

  // const currentVal = await simpleStorage.retrieve();
  // console.log("current favorite number is ", currentVal);

  //update the favourite number
  const setFavNum = await simpleStorage.store(7);
  await setFavNum.wait(1); //wait for one block

  const updatedValue = await simpleStorage.retrieve();
  console.log("updated fav number is ", updatedValue);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(-1);
  });
