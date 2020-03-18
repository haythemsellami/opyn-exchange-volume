## HOW TO RUN
```
$ npm i
$ npm start
```

## GraphQL query
```
{
  sellOTokensActions(orderBy: block) {
    block
    oTokensToSell
    payoutTokenPrice
    payoutTokenAddress
    payoutTokensReceived
    timestamp
    transactionHash
    usdcPrice
    token {
      strike
      strikePriceValue
    }
  }
  
  buyOTokensActions(orderBy: block) {
    block
    exchangeRateCurrent
    tokenUnderlyingAddress
    cTokenUnderlyingPrice
    oTokensToBuy
    paymentTokenPrice
    paymentTokenAddress
    premiumPaid
    timestamp
    transactionHash
    usdcPrice
    token {
      strike
      strikePriceValue
    }
  }
}
```

