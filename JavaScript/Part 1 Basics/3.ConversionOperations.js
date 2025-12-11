// let score = "33abcd"; // string
// if we write null then the o/p will be 0

// !implicit conversion

// console.log(typeof(score));
// console.log(typeof score);

// let valueInNumber = Number(score); // conversion, it gurantees that the number is converted to number
// console.log("valueInNumber:", valueInNumber);
// console.log("typeof valueInNumber:", typeof valueInNumber);
// if the string has number and text or only text then the output will be NaN

// "33" => 33
// "33abcd" => NaN
// true => 1

// let isLoggedIn = 1; // 0 => false, 1 => true
// // 1 => true, 0 => false
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log("typeof isLoggedIn:", typeof booleanIsLoggedIn);
// console.log("isLoggedIn:", booleanIsLoggedIn);

// falsy values
// 0
// ""
// null
// undefined
// NaN
// false
// everything else is truthy value

// let someNumber = 33
// let stringNumber = String(someNumber);
// console.log("stringNumber:", stringNumber);
// console.log("typeof stringNumber:", typeof stringNumber);

// !********Operations************

// let value = 3
// let negValue = -value; // unary negation
// console.log(negValue);
// console.log(value);

// console.log(-(-3)); // 3

// console.log(2+2);
// console.log("2" + 2); // "22" string concatenation
// console.log(2 + "2"); // "22" string concatenation
// console.log("2" + "2"); // "22" string concatenation
// console.log("2" + 2 + "2"); // "222" string concatenation
// console.log(1 + 2 + "2"); // "32" string concatenation


// console.log("4" - "2"); // 2
// console.log("4" * "2"); // 8
// console.log("4" / "2"); // 2    
// console.log("4" % "2"); // 0

// console.log("4" - 2); // 2
// console.log(4 - "2"); // 2 

// console.log("4" * 2); // 8
// console.log(4 * "2"); // 8

// console.log("4" / 2); // 2
// console.log(4 / "2"); // 2
// console.log("4" % 2); // 0
// console.log(4 % "2"); // 0  

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3) //power
// console.log(2/2)
// console.log(2%2)


// let str1 = "hello "
// let str2 = "world"
// // console.log(str1 + " " + str2); // concatenation
// let str3 = str1 + str2
// console.log(str3);

// console.log(+true); // 1
// console.log(+false); // 0

// console.log(!0); // true
// console.log(!""); // true
// console.log(!null); // true
// console.log(!undefined); // true
// console.log(!NaN); // true

// console.log(+""); // 0
// console.log(+null); // 0
// console.log(+undefined); // NaN
// console.log(+NaN); // NaN  

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2 // 4

let gameCounter = 100
++gameCounter
console.log(gameCounter);
