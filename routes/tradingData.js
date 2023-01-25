const express = require("express");
const tokenContract = require("../contractInfo.js");
const wbnbContract = require("../contractInfoWBNB.js");
const router = express.Router();

router.get("/", async (req, res, next) => {

    const pairAddress = '0xB69742936b2B5BdC63E700C133D386e6fE910FbB';

    const amountOfWbnb = await wbnbContract.methods.balanceOf(pairAddress).call();
    const wbnbDecimals = await wbnbContract.methods.decimals().call();
    const adjustedWbnbBalance = amountOfWbnb * 10 ** -wbnbDecimals;

    const amountOfCpbc = await tokenContract.methods.balanceOf(pairAddress).call();
    const cpbcDecimals = await tokenContract.methods.decimals().call();
    const adjustedCpbcBalance = amountOfCpbc * 10 ** -cpbcDecimals;

    const price = adjustedWbnbBalance / adjustedCpbcBalance;

    const result = {
        "updated_at": Date.now(),
        data: {
            "name": "CapybaraCoin",
            "symbol": "CPBC",
            "price_BNB": price,
        }
    }

    return res.status(200).json(result);
});

module.exports = router;