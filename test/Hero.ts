import {ethers} from "hardhat";
import {expect} from "chai";
import {Contract} from "ethers";
import {create} from "domain";

describe("Hero", function () {

    async function createHero() {
        const Hero = await ethers.getContractFactory("TestHero");
        const hero = await Hero.deploy();
        await hero.deployed();

        return hero;
    }

    let hero: Contract;

    // Create a hero instance
    before(async function () {
        hero = await createHero();
    })

    it("should get a zero hero array", async function () {
        expect(await hero.getHeroes()).to.deep.equal([]);
    });

    it("should fail at creating hero because of low ether", async function () {
        let e;
        try {
            await hero.createHero(0, {
                value: ethers.utils.parseEther("0.049")
            });
        } catch (err) {
            e = err;
        }
        // @ts-ignore
        expect(e.message.includes("Not enough ether sent!")).to.equal(true);
    })

    it("should create hero", async function () {
        await hero.setRandom(69);
        await hero.createHero(0, {
            value: ethers.utils.parseEther("0.05")
        });

        const h = (await hero.getHeroes())[0];

        console.log(h);

        // [S, H, D, I, M]
        expect(await hero.getMagic(h)).to.equal(16);
        expect(await hero.getHealth(h)).to.equal(2);
    })
});
