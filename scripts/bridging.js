const { ethers } = require("ethers");
const FxERC1155RootTunnelAbi = require("../fxrootcontract.json");
const FxERC1155ChildTunnelAbi = require("../fxchildcontract.json");
const MyERC1155NFT = require("../artifacts/contracts/MythicalToken.sol/Mythical.json"); // Replace with the actual path and filename for your deployed ERC1155 contract on Ethereum
require("dotenv").config();

const rootTunnelAbi = FxERC1155RootTunnelAbi;
const childTunnelAbi = FxERC1155ChildTunnelAbi;

async function main() {
  const mumbaiRpcUrl = 'https://rpc-mumbai.maticvigil.com'; 
  const goerliRpcUrl = 'https://ethereum-goerli.publicnode.com'
  const privateKey = process.env.PRIVATE_KEY; // Your private key
  const ethereumProvider = new ethers.providers.JsonRpcProvider(goerliRpcUrl);
  const polygonProvider = new ethers.providers.JsonRpcProvider(mumbaiRpcUrl);
  const wallet = new ethers.Wallet(privateKey, ethereumProvider);

  // Step 1: Deployed ERC1155 contract on the root chain (Ethereum)
  const erc1155NFTAddress = "0xA1Be1249eba30eA4E5aa79Cb5Fc2A16699C5aFc0";
  const erc1155NFT = new ethers.Contract(erc1155NFTAddress, MyERC1155NFT.abi, wallet);

  // Step 2: Approve FxERC1155RootTunnel to transfer tokens
   const fxERC1155RootTunnelAddress = "0x48DE785970ca6eD289315036B6d187888cF9Df48";
   const fxERC1155RootTunnel = new ethers.Contract(fxERC1155RootTunnelAddress, rootTunnelAbi, wallet);
  const isApproved = await erc1155NFT.isApprovedForAll(wallet.address, fxERC1155RootTunnelAddress);
  if (!isApproved) {
    const approveTx = await erc1155NFT.setApprovalForAll(fxERC1155RootTunnelAddress, true);
    await approveTx.wait();
    console.log("Approval for FxERC1155RootTunnel is confirmed.");
  } else {
    console.log("Already approved for FxERC1155RootTunnel.");
  }

 

  // Step 4: Query child token address on FxERC1155ChildTunnel
  const fxERC1155ChildTunnelAddress = "0x3A0f90D3905601501652fe925e96d8B294243Efc";
  const fxERC1155ChildTunnel = new ethers.Contract(fxERC1155ChildTunnelAddress, childTunnelAbi, polygonProvider);
  const childTokenAddress = await fxERC1155ChildTunnel.rootToChildToken(erc1155NFTAddress);
  console.log("Child token address on Polygon:", childTokenAddress);

  // Step 5: Deposit ERC1155 tokens to FxERC1155RootTunnel to initiate the transfer to Polygon
  const gaslimit = 0x07a120;
  const receiver = "0x896cbEAb1458da62077E4AD2b97E55Aa54443415";
  const tokenId = 1; 
  const amount = 1; 
  const depositTx = await fxERC1155RootTunnel.deposit(erc1155NFTAddress, receiver, tokenId, amount,gaslimit);
  await depositTx.wait();
  console.log("ERC1155 NFT deposited to FxERC1155RootTunnel. It will be transferred to Polygon shortly.");
}
// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
