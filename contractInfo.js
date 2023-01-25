const Web3 = require("web3");
const abi = require("./abi.json");

const web3 = new Web3('https://bsc-dataseed1.binance.org/'); // @dev Input blockchain node link
const tokenContract = new web3.eth.Contract(abi, '0x62538B75606f08c1cac2C543DB9D6500d351624E'); // @dev Input smart-contract that you need

module.exports = tokenContract;