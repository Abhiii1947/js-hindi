const name = "Abhishek"
const userId = 1947

// console.log(name+userId);


// console.log(`Hello my name is ${name} and my userId is ${userId}.`);


const gameName = new String('FreeFire')

// console.log(gameName);  //[String: 'FreeFire']
// console.log(gameName[0]); //F
// console.log(gameName.__proto__); //{}

// console.log(gameName.length); //8

// console.log(gameName.toUpperCase());  //FREEFIRE
// console.log(gameName.charAt(2));  //e

// console.log(gameName.indexOf('i'));  //5

const newString = gameName.substring(0, 4);
// console.log(newString); // Free

const anotherString = gameName.slice(-8,4)
// console.log(anotherString); //Free


const newStringOne = "   Abhishek   ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); //Abhishek


const url = "https://abhishek.com/abhishek%20nigam"
// console.log(url.replace('%20',"-")) //https://abhishek.com/abhishek-nigam

// console.log(url.includes("abhishek")); //true
// console.log(url.includes("youtube")); //false

const fullName = "Abhishek Nigam"
console.log(fullName.split(" ")); //[ 'Abhishek', 'Nigam' ]

