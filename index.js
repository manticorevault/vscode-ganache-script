let Web3 = require("web3");

let url = "HTTP://127.0.0.1:7545"; // :8545 if using ganache-cli

let web3 = new Web3(url)

web3.eth.getAccounts().then(accounts => console.log(accounts));