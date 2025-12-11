const user = {
    username: "Ashu",
    price: 6969,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`); // this keyword refers to the current context (values)
        // console.log(this); // prints the current context (values)
        
    }
}
// user.welcomeMessage();
// user.username = "Ashutosh";  // changing the context (values)
// user.welcomeMessage(); 

// console.log(this); // shows an empty parenthesis as o/p but when we run it in a browser it will show a lot of things as inside a browser (console) there are a lot of things going on in the background

// function one(){
//     let username = "Ashu";
//     console.log(this.username); // this keyword can only work inside objects and not inside a regular function
// }
// one()

const one = () => { // arrow function
    let username = "Ashu";
    console.log(this.username); // undefined 
    console.log(this); // empty 
}
// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2; // implicit return
// const addTwo = (num1, num2) => (num1 + num2) 
//* if you are putting {} then we need to include the return keywords whereas if we are putting () or simply doing implicit return we dont need to add the return keyword

const addTwo = (num1, num2) => ({username: "Ashu", price: 6969})
// to pass objects in function it needs to be wrapped inside ({})

console.log(addTwo(3, 4));
