const accountId = 1234532 // the value is constant and will not change
let accountEmail = "ashutoshmeher885@gmail.com" // the value can be changed
var accountPassword = "Ashu@885" // the value can be changed
accountCity = "Bargarh" // the value can be changed
let accountState;

/*
prefer not to use var as it causes issues in block scope / functional scope
*/

// accountId = 2 //not allowed
accountEmail = "ashutoshmeher966@gmail.com"
accountPassword = "Ashu@966"
accountCity = "Delhi"

// console.log(accountEmail);

console.table([accountId,accountEmail, accountPassword, accountCity,accountState]);
