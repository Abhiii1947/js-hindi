// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false, " ", [], {}, function(){}

// if(false == 0) //true

// if(false == ' ') //true

// if(0 == ' ') //true

// Nullish Coalescing Operator (??) : null undefinde

let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15
// val1 = null ?? 20 ?? 25 //20 
// val1 = null ?? null ?? 25 //25 
// val1 = null ?? null ?? 25 ?? 30//25 


// console.log(val1);



//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

// iceTeaPrice <= 80 ? console.log("less than or equal to 80"): console.log("greater than 80") //greater than 80