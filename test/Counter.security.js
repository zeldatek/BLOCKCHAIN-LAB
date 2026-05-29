const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter Security Tests", function () {
  let counter;
  let owner;
  let attacker;

  beforeEach(async function () {
    // Get signers (accounts provided by your Ganache node)
    [owner, attacker] = await ethers.getSigners();
    
    // Deploy the contract before each test to ensure a clean state
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
  });

  it("Should prevent unauthorized users from resetting the counter", async function () {
    // This test assumes your contract has a reset() function
    // and an 'onlyOwner' modifier or similar access control logic.
    
    // We attempt to call the reset function using the 'attacker' account
    // We expect the contract to REVERT with an error message
    await expect(counter.connect(attacker).reset())
      .to.be.reverted; 
  });
});