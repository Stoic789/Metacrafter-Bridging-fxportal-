// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MythicalToken.sol/Mythical.json");
const tokenAddress = "0xA1Be1249eba30eA4E5aa79Cb5Fc2A16699C5aFc0"; // Update with your deployed contract address
const tokenABI = tokenContractJSON.abi;
async function main() {
const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
const description = await token.promptDescription();

   console.log(description);

    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});