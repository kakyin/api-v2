const express = require("express");
const tokenContract = require("../contractInfo.js");
const addresses = require("../addresses.js");
const router = express.Router();

router.get("/", async (req, res, next) => {
  let frozenAmount = 0; // Amount of tokens that exist out of circulation
  for (let i = 0; i < addresses.length; i++) {
      const element = addresses[i];
      const walletBalance = await tokenContract.methods.balanceOf(element).call();
      frozenAmount += +(walletBalance);
  }
  const decimals = await tokenContract.methods.decimals().call();
  const totalSupply = await tokenContract.methods.totalSupply().call();
  const circulationSupply = totalSupply - frozenAmount;
  const adjustedCirculationSupply = circulationSupply * 10 ** -decimals;
  return res.status(200).json(adjustedCirculationSupply);
});

module.exports = router;
