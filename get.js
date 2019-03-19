const send = require('./send');
var arguments = process.argv.splice(2);
var address = arguments[0];
var amount = arguments[1];
var text = "hello"
console.log("address", address);
send.pay(address, amount, text).then((msg) => {
    console.log("ok", msg);
}).catch((err) => {
    console.log("err", err);
});