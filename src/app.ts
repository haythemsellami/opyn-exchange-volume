const OptionsExchange = require('../ABI/OptionsExchange.json');

const optionExchangeAddress = "0x5778f2824a114F6115dc74d432685d3336216017";
const cDaiAddress = "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643";
const cUsdcAddress = "0x39AA39c021dfbaE8faC545936693aC917d5E7563";
const ocDaiAddress = "0x98cc3bd6af1880fcfda17ac477b2f612980e5e33";
const ocUsdcAddress = "0x8ED9f862363fFdFD3a07546e618214b6D59F03d4";

const graphData = require( "./graphqlQuery");

(async () => {
    console.log("oTokens buy/sell total volume");
    try {
        let latestGraphBlock = 9686892;
        let oneDayBlocks = latestGraphBlock - 5760;

        let oTokensSellVolume = 0;
        let oTokensBuyVolume = 0;
        let sellInInsurranceValue = 0;
        let buyInInsurranceValue = 0;

        graphData.sellOTokensActions.forEach(sell => {
            if(parseInt(sell.block) >= oneDayBlocks) {
                oTokensSellVolume += parseInt(sell.oTokensToSell); 
                sellInInsurranceValue += parseInt(sell.oTokensToSell) * parseInt(sell.token.strikePriceValue);   
            }
        });

        graphData.buyOTokensActions.forEach(buy => {
            if(parseInt(buy.block) >= oneDayBlocks) {
                oTokensBuyVolume += parseInt(buy.oTokensToBuy);    
                buyInInsurranceValue += parseInt(buy.oTokensToBuy) * parseInt(buy.token.strikePriceValue);
            }
        });

        console.log("oTokens sell volume: ", oTokensSellVolume);
        console.log("oTokens buy volume: ", oTokensBuyVolume);
        console.log("oTokens total exchange volume: ", oTokensBuyVolume+oTokensSellVolume);
        console.log("sell in $ value of insurrance coverage: ", sellInInsurranceValue);
        console.log("buy in $ value of insurrance coverage: ", buyInInsurranceValue);
    } catch (e) {
      console.error(e);
      return;
    }
})();