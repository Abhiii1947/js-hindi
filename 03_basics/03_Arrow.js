const user = {
    username: "abhishek",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage();  //abhishek, welcome to website
// user.username = "Yash"
// user.welcomeMessage();  //Yash, welcome to website
// console.log(this);  //{}


// function chai(){
//     let username = "abhishek"
//     console.log(this.username); // 'this' is not working in function
// }


// const chai = function (){
//     let username = "abhishek"
//     console.log(this.username); // 'this' is not working in function
// }


const chai = () => {
    let username = "abhishek"
    console.log(this.username);
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4)); // 7


// const addTwo = (num1, num2) => num1 + num2 // implicit return

// console.log(addTwo(4,5)); // 9

const addTwo = (num1, num2) => ({username: "abhishek"}) 

console.log(addTwo(4,5)); // { username: 'abhishek' }