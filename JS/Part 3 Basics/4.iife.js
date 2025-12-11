// Immediately Invoked Function Expression (IIFE)
//* used when we want to invoke a function immediately when the program starts, this helps to prevent the pollution of variables inside the function by other global scope variables

(function chai (){ //! named IIFE as it contains a name
    console.log(`DB CONNECTED`);
})(); //end it with a semicolon as the interpreter doesnt know when to stop the context

// (Function definition)(Function call)

(() => { //! simple IIFE as it doesnt have a name
    console.log(`DB CONNECTED TWO`);
})();

// See it as a function and use it
((name) => { //! passing parameters to IIFE
    console.log(`DB CONNECTED BY ${name}`);
})("ASHU");