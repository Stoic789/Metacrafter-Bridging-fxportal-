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

  const tokenId = [1,2,3,4,5,6,7,8,9,10];
  const tokenAmount = [10,10,10,10,10,10,10,10,10,10];
  const mintTx = await token.mintBatch(walletAddress, tokenId, tokenAmount);
  await mintTx.wait();

  for (let i = 1; i <= numberOfNFTs; i++) {
    const tokenId = i; 
    const metadataURI = `${metadataBaseURI}${i}.json`; 

    const setUriTx = await token.setURI(tokenId, metadataURI);
    await setUriTx.wait();

    console.log(`Minted NFT ${tokenId} with amount ${tokenAmount} and metadata URI: ${metadataURI}`);
  }

  console.log("All tokens minted and metadata URIs set!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
