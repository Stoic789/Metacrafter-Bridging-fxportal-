# Project README.md

This project involves creating an NFT (Non-Fungible Token) using Hardhat, Solidity, Goerli test network, MetaMask, OpenSea testnet, and then transferring the token based on ID and amount to the Polygon network using the FX Portal from the Ethereum chain. The testnet for Polygon is Mumbai.

## Smart Contract - Mythical.sol

The smart contract provided is named `Mythical.sol` and it implements the ERC1155 standard, allowing for the creation and management of NFTs.

### Contract Details

- Name: Mythical Creature

- Symbol: MTH

### Contract Functions

1\. `constructor()`: The constructor function sets the name and symbol for the NFT.

2\. `mint(address _to, uint _id, uint _amount) external onlyOwner`: Allows the contract owner to mint a specific amount of NFTs with a given ID and send them to the specified address.

3\. `mintBatch(address _to, uint[] memory _ids, uint[] memory _amounts) external onlyOwner`: Allows the contract owner to mint multiple NFTs with different IDs and amounts and send them to the specified address.

4\. `burn(uint _id, uint _amount) external`: Allows an address to burn (destroy) a specific amount of NFTs with the given ID that they own.

5\. `setURI(uint _id, string memory _uri) external onlyOwner`: Allows the contract owner to set the metadata URI for a specific NFT ID.

6\. `uri(uint _id) public override view returns (string memory)`: Returns the metadata URI for a given NFT ID.

7\. `getBalance(address _owner, uint _id) external view returns (uint)`: Returns the balance of NFTs with a specific ID owned by the given address.

8\. `promptDescription() external pure returns (string memory)`: Returns a static description of the NFT collection.

## Tech Stack

The project utilizes the following technologies and tools:

- **Hardhat**: A development environment and testing framework for Ethereum smart contracts.

- **Solidity**: The programming language used to write the smart contract.

- **Goerli Test Network**: An Ethereum test network used for deploying and testing the smart contract.

- **MetaMask**: A popular browser extension wallet that allows for easy interaction with Ethereum and test networks.

- **OpenSea Testnet**: A testnet version of the OpenSea marketplace used for showcasing and trading the NFTs.

- **Polygon (Matic) Network**: A layer 2 scaling solution for Ethereum, used for transferring the NFTs from the Ethereum chain.

- **Mumbai Testnet**: The test network for Polygon, where transactions can be tested before deploying to the mainnet.

- **FX Portal**: A bridge that facilitates the transfer of assets between Ethereum and Polygon networks.


## How to Use

To use this project, follow the steps below:

1\. Install Hardhat, Solidity, and other dependencies for your project.

2\. Deploy the smart contract to the Goerli test network.

3\. Interact with the smart contract using MetaMask to mint NFTs and set metadata URIs.

4\. Once you have minted the NFTs on the Goerli test network, you can view them on the OpenSea testnet.

5\. To transfer the tokens to the Polygon network, use the FX Portal from the Ethereum chain. Make sure you are connected to the Mumbai testnet for Polygon.

## Smart Contract Deployment and Testing

Please provide the deployment and testing scripts or instructions specific to your development environment.

**Note:** Before deploying to the mainnet or using real tokens, ensure you understand the implications and risks associated with smart contracts and NFTs. Use test networks for development and testing.

## Important Notes

- The smart contract is set up to work with the ERC1155 standard, which allows for the management of multiple NFTs within a single contract.

- Remember to fund your MetaMask wallet with test ETH for the Goerli test network and the Mumbai testnet.

- Exercise caution when transferring tokens between networks, and always verify the network you are connected to before initiating any transaction.

- This project is intended for educational and testing purposes. Be mindful of gas costs when interacting with smart contracts on the Ethereum and Polygon networks.

