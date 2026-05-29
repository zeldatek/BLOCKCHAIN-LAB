const hre = require("hardhat");

async function main() {
    const contractAddress = "0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab";

    const Storage = await hre.ethers.getContractAt("SimpleStorage", contractAddress);

    console.log("Initial value:", await Storage.getValue());

    const tx = await Storage.setValue(42);
    await tx.wait();

    console.log("Value updated to 42");

    console.log("New value:", await Storage.getValue());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
