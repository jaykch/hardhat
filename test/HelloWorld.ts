import {ethers} from "hardhat";
import {expect} from "chai";

describe("Hello World", function () {
    it("should correctly return hello message", async function () {
        // 1. setup
        const HelloWorld = await ethers.getContractFactory("HelloWorld");

        // 2. deploy contract
        const hello = await HelloWorld.deploy();
        await hello.deployed();

        // 3. call functions to test
        expect(await hello.hello()).to.equal("New hello world!");
    })
});
