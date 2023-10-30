const score = 400

const balance = new Number(100)

// console.log(balance); //[Number: 100]
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00


const otherNumber = 23.8765
// console.log(otherNumber.toPrecision(3)); //23.9

const anotherNumber = 123.8843
// console.log(anotherNumber.toPrecision(3)); //124
// console.log(anotherNumber.toPrecision(4)); //123.9
// console.log(anotherNumber.toPrecision(2)); //1.2e+2



//**************Maths*****************

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4));
// console.log(Math.round(4.1));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(3,6,4,2,9,7));
// console.log(Math.max(3,6,4,2,9,7));
// console.log(Math.random());
// console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min);