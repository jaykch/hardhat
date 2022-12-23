import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    networks: {
        hardhat: {
            chainId: 1337
        },
        goerli: {
            url: 'https://eth-goerli.g.alchemy.com/v2/W7u1reGJFSqOCCflrlNp-B0HUSM0B1t7',
            accounts: ["753f65187061335b3db047b04e641489a36666c7f3c368a3f27f65899cd82694"]
        }
    }
};

export default config;
