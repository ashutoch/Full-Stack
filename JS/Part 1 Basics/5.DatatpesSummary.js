// primitive data types: number, string, boolean, null, undefined, symbol, bigint -> when we access the data, a copy of the original value is given and changes are made to the copy itself and the original data remains unchanged  
// !null is of type 'object' -> this is a bug in JS but it is kept for legacy reasons

// JS is a dynamically typed language -> data types are determined at runtime and we don't need to specify the data type while declaring a variable

// !primitive type of data type ka return type when it is used with typeof operator is same as the data type

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); // false because each symbol is unique even if they have the same description

const bigNumber = 9007199254741991n; // BigInt data type

// Non-primitive or reference data types: object, array, function -> when we try to access these data then a reference to the original data is given, and any changes made changes the original data
// !non-primitive type of data type ka return type when it is used with typeof operator is always 'object', except for function where it returns 'function'

const heroes = ["shaktiman", "naagraj", "doga"];
console.log(heroes);

let myObj = {
    name: "Ashu",
    age: 23,
}

function greet() {
    console.log("Hello Ashu");
}
greet();

/* 
const myFunc = function() {
    console.log("Hello Ashu");
}
*/

console.log(typeof bigNumber);
