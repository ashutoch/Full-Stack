// const tinderUser = new Object();  // singleton object using Object constructor
const tinderUser = {};  // non-singleton object using object literal syntax
tinderUser.id = "123abc";
tinderUser.name = "Ashu";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ashutosh",
            lastname: "Meher"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); // Optional chaining to avoid errors if any property is undefined
//* ? = optional chaining

const obj1 = {1: "a", 2: "b"}; // keys are numbers
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2} // nested objects
//* it will create obj3 like {obj1: {1: "a", 2: "b"}, obj2: {3: "a", 4: "b"}} which is a combination of nested objects and we dont want that

const obj3 = Object.assign({}, obj1, obj2); // Object.assign to combine objects

//* syntax: Object.assign(target, ...sources)
//* we pass an empty object as an optional first parameter to avoid mutating obj1 or obj2

// const obj3 = {...obj1, ...obj2} // spread operator to combine objects
// console.log(obj3); 

const users = [
    {
        id: 1,
        email: "something1@gmail.com"
    },
    {
        id: 2,
        email: "something2@gmail.com"
    },
    {
        id: 3,
        email: "something3@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
// Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

// it shows the key value pairs in array format and while working with databases it will be easier for us to work with it and use loops to read and get the values using all the array properties and methods.

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// determines whether an object has a property with the specified name. It returns true or false as appropriate. Helps in preventing errors while accessing properties that may not exist.


const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Ashu"
}

// const {courseInstructor} = course; // object destructuring
// console.log(courseInstructor);
// Object destructuring allows us to extract properties from an object and assign them to variables in a more concise way without having to access each property individually.

const {courseInstructor: instructor} = course; // renaming while destructuring
// console.log(instructor);

//! Json
// {
//     "courseInstructor": "Ashu",
//     "courseName": "JavaScript",
//     "price": 999,
//     "isAvailable": true
// }

