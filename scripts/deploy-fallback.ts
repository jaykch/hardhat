import "@nomiclabs/hardhat-ethers";
import {ethers} from "hardhat";

async function deploy(name: string, ...args: any[]) {
    const Fallback = await ethers.getContractFactory(name);
    const fallback = await Fallback.deploy(...args);
    await fallback.deployed();

    console.log(fallback.address);

    return fallback;
}

async function fallback() {
    const a = await deploy("A");
    const b = await deploy("B", a.address);

    console.log("A", await a.getA());
    console.log("B", await b.getB());
    console.log("---------------------------");

    await a.setA(42);
    console.log("A", await a.getA());
    console.log("B", await b.getB());
    console.log("---------------------------");

    await b.setB(69);
    console.log("A", await a.getA());
    console.log("B", await b.getB());
    console.log("---------------------------");
}

fallback().then();


// class Foo{
//     private bar: number;
//     foo(){
//         console.log("foo", this.bar)
//     }
//
// }
//
// const foo = new Foo();
//
// foo.foo();
// foo.foo.call({
//     bar: 42
// })
