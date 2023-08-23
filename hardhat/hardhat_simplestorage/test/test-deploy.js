const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("simple storage", function () {
  //beforeEach defines what to do before each it
  //we can also have decribes inside of describes that contain more before each and more it(basically nesting)

  let simpleStorageFactory, simpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with a favourite number = 0 ", async function () {
    expect(await simpleStorage.retrieve()).to.equal(0);
  });

  //assert or expect is just a personal pref
  it("Should update favorite number when store is called", async function () {
    await simpleStorage.store(12);
    assert.equal("12", await simpleStorage.retrieve());
  });

  it("Should add person properly", async () => {
    await simpleStorage.addPerson("aditya", 15);

    let adityaNum = await simpleStorage.nameToFavoriteNumber("aditya");
    console.log("aditya number is:", adityaNum);
    expect(adityaNum).to.equal(15);
  });
});
