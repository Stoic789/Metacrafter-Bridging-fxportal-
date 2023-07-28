require("@nomicfoundation/hardhat-toolbox");
//require(”@nomiclabs/hardhat-etherscan”);
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    },
  etherscan: {
    apiKey: {
      goerli: '7MDJTAMN2W4S1Q72P8867VNUXS78PQW4KC',
      polygonMumbai: '3IF22MWJ98B337EHB7R51GZ9CEDFVTVACZ'
    }
  }
};
