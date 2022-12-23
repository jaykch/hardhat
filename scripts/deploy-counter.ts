import "@nomiclabs/hardhat-ethers";
import {ethers} from "hardhat";
import {Counter} from "../typechain";

async function deploy() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    console.log(counter.address);

    return counter;
}

async function count(counter: Counter) {
    await counter.count();
    console.log("Count:", await counter.getCount());
}

deploy().then(async (counter) => await count(counter));