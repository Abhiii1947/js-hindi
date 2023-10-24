const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 1234567898765n

const heros = ["shaktiman","ironman","hulk"];
let myObj = {
    name: "Abhishek",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof myFunction);
// console.log(typeof heros);


//*************************************

//Stack(Primitive) , Heap(Non-Primitive)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne  //Address is Allocated

userTwo.email = "abhishek@google.com"

console.log(userOne.email);
console.log(userTwo.email);