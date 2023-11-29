let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30

    // console.log("Inner: ", a); // a = 10
}

// console.log(a);  // a = 300


function addOne(num1)  {
    return num1 + 1
}
console.log(addOne(5));



const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5));