const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MythicalToken.sol/Mythical.json");
require('dotenv').config();

const tokenAddress = "0xA1Be1249eba30eA4E5aa79Cb5Fc2A16699C5aFc0"; // Update with your deployed contract address
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x896cbEAb1458da62077E4AD2b97E55Aa54443415";
const metadataBaseURI = "ipfs://QmYRbm9sfxEgJ4ft374PgVaJkd4Pqo1WVrbCaEcfEBmXp8/"
const numberOfNFTs = 10;

async function main() {
  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

  for (let i = 1; i <= numberOfNFTs; i++) {
    const tokenId = i;
    const tokenAmount = 10; // Set the token amount for each minted token
    //const metadataURI = `${metadataBaseURI}${i}.json`; // Replace with your respective metadata URI

    const mintTx = await token.burn( tokenId, tokenAmount);
    await mintTx.wait();

    

    console.log(`Burned NFT ${tokenId} with amount ${tokenAmount} `);
  }

  console.log("All tokens Burned");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
