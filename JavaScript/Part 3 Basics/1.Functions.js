function myName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("U");
}

// myName(); // function invocation or function call

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(5, 7); // 12  
// addTwoNumbers(5, null); 
// addTwoNumbers(2, "2"); // 22

// the values 5, 7, 2, "2" are called arguments
// num1 and num2 are called parameters

// const result = addTwoNumbers(3, 5); 
// console.log(result); // undefined as the function does not return anything instead it prints the sum directly

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
    console.log("This will not print"); // code after return will not execute
    
}

// const result = addTwoNumbers(3, 5); 
// console.log("Result: ", result);

// function loginUserMessage(username = "defaultUser"){ // default parameter
function loginUserMessage(username){ // default parameter
    // if (username === undefined) {
    if (!username) {
        console.log("Please enter a valid Username.");
        return
    }
    return `Hello ${username}, you have successfully logged in`;
}

// console.log(loginUserMessage("Ashu"));
// console.log(loginUserMessage());

// const message = loginUserMessage(); // if no argument is passed, default parameter will be used
// console.log(message);

//* to pass an unknown amount of parameters to a function
// function calculateCartPrice(...num1){ //rest operator

function calculateCartPrice(val1, val2, ...num1){ 
    return num1; // gives output in array
}

// console.log(calculateCartPrice(200, 400, 500, 600))

const user = {
    username: "ashu",
    price: 699
}

function handleObject(anyObject) { //passing an object to function
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);
}

// handleObject(user)
// handleObject({
//     username: "Ashutoch",
//     price: 6969
// })

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800, 1000]));

