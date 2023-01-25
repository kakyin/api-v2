const Web3 = require("web3");
const abi = require("./abiWBNB.json");

const web3 = new Web3('https://bsc-dataseed1.binance.org/'); // @dev Input blockchain node link
const wbnbContract = new web3.eth.Contract(abi, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'); // @dev Input smart-contract that you need

module.exports = wbnbContract;