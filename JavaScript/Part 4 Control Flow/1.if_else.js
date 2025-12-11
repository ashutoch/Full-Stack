//! if

if (2 !== -2) {
    // console.log("inside if statement");
}

//! basic comparison operators that can be used to check for conditions:
//* <, >, <=, >=, ==, !=, === (checks for its type as well), !== (checks for negative sign as well)
//* 2 !== -2 //op will be true

// const temperature = 41;
// if (temperature < 50) {
//     console.log("less than 50");    
// } else {
//     console.log("greater than 50");
// }

// const score = 200;
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
//* console.log(`User power: ${power}`); // this will provide error as the scope of the variable power is within the if block, we can use 'var' to make 'power' have a global scope but its not recommended

// const balance = 1001
// if (balance > 500) console.log("test"); //* implicit scope (can only write one line only if we put a semicolon)

// if (balance > 500) console.log("test"),
// console.log("test2");
//* can write multiples lines if we use comma instead of semicolon but it is unreadable, it is advised to use { }

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("greater than 1000");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard) {
    console.log("Allowed to buy the course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
