// Stack (Primitive type) , Heap (Non-primitive type)

// Stack memory -> stores primitive data types (number, string, boolean, null, undefined, symbol, bigint) -> stores actual values but changes made do not affect the original value

// Heap memory -> stores non-primitive data types (objects, arrays, functions) -> stores references to the actual values

let myName = "Ashu"; // stored in stack memory
let anotherName = myName; // anotherName gets a copy of the value stored in myName
anotherName = "Hooman";

console.log(myName);
console.log(anotherName);


let user = {
    email: "ashu@gmail.com",
    upi: "user@sbi",
}

let admin = user; // admin gets a reference to the same object in heap memory
admin.email = "admin@gmail.com";
console.log(admin.email);
console.log(user.email);
