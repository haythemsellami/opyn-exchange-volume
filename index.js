/*const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

const OptionsExchange = require('./ABI/OptionsExchange.json');

const mnemonic = "require voice shadow muffin razor history favorite tilt same chimney balance siege";
const web3 = new Web3(new HDWalletProvider(mnemonic, 'https://mainnet.infura.io:443'));

const optionExchangeAddress = "0x5778f2824a114F6115dc74d432685d3336216017";
const cDaiAddress = "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643";
const cUsdcAddress = "0x39AA39c021dfbaE8faC545936693aC917d5E7563";
const ocDaiAddress = "0x98cc3bd6af1880fcfda17ac477b2f612980e5e33";
const ocUsdcAddress = "0x8ED9f862363fFdFD3a07546e618214b6D59F03d4";

const optionExchange = new web3.eth.Contract(OptionsExchange, optionExchangeAddress);

/*optionExchange.getPastEvents('SellOTokens', {
    fromBlock: 0,
    toBlock: 'latest'
}, function(error, events){ console.log(events); })
.then(function(events){
    console.log(events) // same results as the optional callback above
});*/

//console.log(optionExchange);

/*function getBalance () {
    return new Promise (function (resolve, reject) {
        web3.eth.getBlockNumber(function (error, result) {
            if (error) {
            reject(error);
            } else {
            resolve(result);
            }
        })
    })
}


getBalance();*/

  