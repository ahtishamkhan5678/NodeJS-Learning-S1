
const data = require("./data.json");
const {calculateSum, multiplicationValue} = require("./calculator");

var name = "Mohammad Ahtisham";
var a = 8;
var b = 10;

calculateSum(a, b);
console.log("Json Data : ", data.name)
multiplicationValue(a,b);

// console.log(name);
// console.log(number);

// global object consoling bleow here
// console.log(global);

// but in the node if we print this then it will give empty object not global object like broswer object 
// console.log(this)

// general globalObject print from browers and nodejs engine
// console.log(globalThis);