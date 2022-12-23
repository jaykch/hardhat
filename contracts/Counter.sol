// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Counter {
    uint counter;

    event CounterInc(address indexed add, uint counter);

    function count() public {
        counter++;
        console.log("Counter is now", counter);
        emit CounterInc(msg.sender, counter);
    }

    function getCount() public view returns (uint){
        return counter;
    }
}