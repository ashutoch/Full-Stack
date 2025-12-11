let a = 300 //! global scope

if(true){ //block scope
    let a = 10
    const b = 20
    // var c = 30
    // c = 30 //* also treated like var
    // console.log("Inner a: ", a);
    
} //scope of a, b and c is within this scope only and if reaches outside of the scope it will cause issues

// console.log(a);
// console.log(b);
// console.log(c); //* var will print thats why we avoid var

// {} => Scope when used with functions

function one(){
    const username = "Ashu";

    function two(){
        const website = "Google"
        // console.log(username);
    }
    // console.log(website);
    two();
}
one();

if (true){
    const username = "Ashu";
    if (username === "Ashu"){
        const website = "Google"
        // console.log(username + website);
    }
    // console.log(website); //* out of scope
}
// console.log(username); //* out of scope


// ++++++++++++++++ Interesting +++++++++++++++++

console.log(addone(5)); // the function can be declared like this as well if its value is not being stored in some variable

function addone(num){
    return num + 1;
}

//! hoisting
addTwo(5) // accessing the function before declaring
const addTwo = function(num){
    return num + 2;
}


//* in the addone function we are only declaring the function before writing the function but in addTwo we are also storing it so it gives error as we can't use something before it is passed to the function (before the function is declared) and thats why it gives us error

