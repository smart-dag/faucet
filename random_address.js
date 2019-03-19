const config = require('./config');
const { default: Wallet } = require("sdagwallet.js");
//import Wallet from 'sdagwallet.js';
let wallet = new Wallet();
var mnemonic = wallet.generateMnemonic();

wallet.configHub(config.hub);
wallet.loginWithMnemonic(mnemonic).then(() => {
    var address = wallet.getAddress();
    console.log("mnemonic",mnemonic);
    console.log("address",address);
    // wallet.getBalance().then((balance) => {
    //     console.log("balance",balance);
    // });
});