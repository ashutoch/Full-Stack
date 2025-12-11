const userEmail = "ashu.ai" 

if (userEmail) {
    console.log("Got the user email")
} else {
    console.log("Failed to get the user email")
}

//! falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//! truthy values:
// true," " (space inside string), "0", "false", [], {}, function(){}

const usermail = [] //* empty array
if (usermail.length === 0) {
    console.log("Array is empty");
}
//* we dont just pass the varaiable name in if condition to see if its empty or not, we use .length method

const emptyObj = {} //* empty object
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

false == 0 //* true
false == '' //* true
0 == '' //* true

false === 0 //* false
false === '' //* false
0 === '' //* false 

//! Nullish Coalescing Operator (??) [all the work is done in null & undefined]

let val1 
// val1 = 5 ?? 10 //* 5
// val1 = null ?? 10 //* 10
// val1 = undefined ?? 90 //* 90
val1 = null ?? 1 ?? 15 //* 1

console.log(val1);

//* checks if the value is null / undefined or not, if its null then it passes the other given value to the variable

//! Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");