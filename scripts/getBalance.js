// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MythicalToken.sol/Mythical.json");

const tokenAddress = "0x0D945fDb49f192c73da76Eb5D39a6e37090d58de"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x896cbEAb1458da62077E4AD2b97E55Aa54443415"; // place your public address for your wallet here
const id = 1;

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress,id) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });