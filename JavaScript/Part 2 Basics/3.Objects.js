//! singleton object: made from any constructor
// Object.create //constructor function

// object literal

const mySym = Symbol("key1"); // symbol is a unique and immutable data type

const JsUser = {
    "name": "Ashutosh",
    age: 20,
    email: "ashutosh@example.com",
    location: "India",
    blogs: ["why mac & cheese rules", "10 ways to be lazy"],
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"],
    [mySym]: "key1", // symbol as a key
}

console.log(JsUser.email);
console.log(JsUser.name);
console.log(JsUser["name"]); // alternate way to access object properties, also as it is a string we need to use doublequotes

// console.log(typeof JsUser.mySym); // can't access symbol property like this
console.log(JsUser[mySym]); // accessing symbol property using bracket notation

JsUser.age = 21; // updating existing property
console.log(JsUser.age);

// Object.freeze(JsUser); // freezes the object, i.e., makes it immutable
// JsUser.name = "Ashu"; // won't update as the object is frozen
// console.log(JsUser.name);
// console.log(JsUser);

JsUser.greeting = function() { // adding method to the object
    console.log(`Hello JsUser, ${this.name} !`); // 'this' refers to the current object
}

console.log(JsUser.greeting);

JsUser.greeting(); // calling the method
// console.log(this); // in global context, 'this' refers to the global object (window in browsers)