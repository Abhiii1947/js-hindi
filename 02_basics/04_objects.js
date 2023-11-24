// const tinderUser = new Object() //singalton object 

const tinderUser = {} // non singalton object

tinderUser.id = "123abc"
tinderUser.name = "Adam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

 const regularUser = {
    email: "Adam@google.com",
    fullname: {
        userfullname: {
            firstname: "Abhishek",
            lastname: "Nigam"
        }
    }
 }

//  console.log(regularUser.fullname.userfullname.firstname);

 const obj1 = {1:"a", 2:"b"}
 const obj2 = {3:"a", 4:"b"}

//  const obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//  console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));