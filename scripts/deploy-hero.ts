import "@nomiclabs/hardhat-ethers";
import {ethers} from "hardhat";
import {Hero} from "../typechain";

async function deploy() {
    const Hero = await ethers.getContractFactory("Hero");
    const hero = await Hero.deploy();
    await hero.deployed();

    return hero;
}

async function sayHello(hero: Hero) {
    console.log("hero Deployed");
}

deploy().then(async (hero) => await sayHello(hero));