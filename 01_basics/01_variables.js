const accountId = 1553
let accountEmail = "yash@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed

accountEmail = "Abhishek@google.com"
accountPassword = "123456"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because os issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);