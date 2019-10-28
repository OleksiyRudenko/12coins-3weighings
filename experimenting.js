const findFake = require("./find-fake.js");
const balanceMaker = require("./balance.js");

let array;

array = [2,5,2,2,2,2,2,2,2,2,2,2];
console.log(array, '=>', findFake(array, balanceMaker()));

array = [2,1,2,2,2,2,2,2,2,2,2,2];
console.log(array, '=>', findFake(array, balanceMaker()));
