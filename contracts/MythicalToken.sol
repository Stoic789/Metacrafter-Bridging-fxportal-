// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Mythical is ERC1155, Ownable {

    string public name;
    string public symbol;

    mapping(uint => string) public tokenURI;

    constructor() ERC1155("") {
        name = "Mytical Creature";
        symbol = "MTH";
    }

    function mint(address _to, uint _id, uint _amount) external onlyOwner {
        _mint(_to, _id, _amount, "");
    }

    function mintBatch(address _to, uint[] memory _ids, uint[] memory _amounts) external onlyOwner {
        _mintBatch(_to, _ids, _amounts, "");
    }

    function burn(uint _id, uint _amount) external {
        _burn(msg.sender, _id, _amount);
    }

    function setURI(uint _id, string memory _uri) external onlyOwner {
        tokenURI[_id] = _uri;
        emit URI(_uri, _id);
    }

    function uri(uint _id) public override view returns (string memory) {
        return tokenURI[_id];
    }

   
    function getBalance(address _owner, uint _id) external view returns (uint) {
        return balanceOf(_owner, _id);
    }

   
    function promptDescription() external pure returns (string memory) {
        return "Explore an extraordinary array of mythical beings, each dwelling in a realm tailored to its existence. From the depths of oceanic kingdoms to the celestial expanse of galaxies, from the fiery heart of volcanoes to the serene serenades of floating islands, the settings are as diverse as the creatures themselves.";
    }
}
