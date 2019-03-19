var Promise = require("bluebird");
const { default: Wallet } = require("sdagwallet.js");
const config = require('./config');
//import Wallet from 'sdagwallet.js';
let wallet = new Wallet();
wallet.configHub(config.hub);
exports.pay = function (address, amount, text) {
    return new Promise(function (resolve, reject) {
        wallet.loginWithMnemonic(config.mnemonic).then(async () => {
            await wallet.getBalance();
            wallet.send({
                to: address,
                amount: amount,
                text: text
            }).then(() => {
                resolve("ok");
            }).catch((err) => {
                reject(err);
            });
        });
    });
}