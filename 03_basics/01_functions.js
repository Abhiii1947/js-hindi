function addTwoNumbers (number1, number2) {//number1 and number2 are parameters
    return (number1 + number2)
}

// addTwoNumbers(3,4); // 3 and 4 are arguments
// addTwoNumbers(3,"4");
// addTwoNumbers(3,"a");

const result = addTwoNumbers(3,4)
// console.log("result: ", result);



// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(200));


// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500)); 



// function calculateCartPrice(val1, val2, ...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000));



const user = {
    username: "abhishek",
    price: 199
}



function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
}

// handleObject(user);

// handleObject({
//     username: "yash",
//     price: 399
// })



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100, 600]));



