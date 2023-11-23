// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const mySum = Symbol("key1")

const JsUser = {
    name: "Abhishek",
    "full name": "Abhishek Nigam",
    [mySum]: "mykey1",
    location: "Kanpur",
    email: "abhishek@google.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySum])

// JsUser.email = "abhishek@microsoft.com"
// Object.freeze(JsUser)
// JsUser.email = "abhishek@facebook.com"
// console.log(JsUser)


JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());