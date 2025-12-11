// const score = 500;
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // coverts number to string and then counts length
// console.log(balance.toFixed(2)); // converts number to string with 2 decimal places


// const otherNumber = 123.123456;
// console.log(otherNumber.toPrecision(5)); // converts number to string with specified length

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); // converts number to string with locale formatting

// ************* Maths ****************

// console.log(Math);
// console.log(Math.abs(-8));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 3));
// console.log(Math.min(2, 33, 4, 1, 55, -23));
// console.log(Math.max(2, 33, 4, 1, 55, -23));
// console.log(Math.random());

console.log(Math.floor(Math.random() * 10)); // gives random number between 0 and 9
console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between min and max (both inclusive)
// !we add 1 to get value > 0  and also we do (max - min) to get value starting from min and then add min to shift range to start from min