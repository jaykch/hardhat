// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Hero.sol";

// Test class to pass in random number;
contract TestHero is Hero {
    uint random;

    function generateRandomNumber() public override view returns (uint){
        return random;
    }

    function setRandom(uint r) public {
        random = r;
    }
}