// Module(by deafult module are protected) protectes their variables and function from leaking;

console.log("Sum Module Executed");

function calculateSum(a, b) {

    const sum = a + b;
    console.log(sum);
}

// show to use this module into other first we have to export this and then import this where we want to use like this
// module.exports = calculateSum; //. for single export now 

module.exports = { calculateSum};
