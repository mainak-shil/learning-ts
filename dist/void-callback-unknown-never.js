"use strict";
// void
function add10(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("result " + num);
}
printResult(add10(4, 3));
let combineValues;
combineValues = add10;
console.log(combineValues(8, 7));
// callback
function addNHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addNHandle(10, 20, (result) => {
    console.log(result);
});
// unknown
let userInput;
let userName;
userInput = 5;
userInput = "Mak";
if (typeof userInput === "string") {
    // extra safe side check is needed
    userName = userInput;
}
// never
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
}
generateError("An error occurred", 500);
//# sourceMappingURL=void-callback-unknown-never.js.map