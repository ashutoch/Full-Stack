// console.log(2 > 1); // true
// console.log(2 < 1); // false
// console.log(2 >= 2); // true
// console.log(2 <= 1); // false
// console.log(2 == 2); // true
// console.log(2 != 1); // true

// // comparing 2 different data types
// console.log("2" > 1); // true
// console.log("2" < 1); // false
// console.log("2" >= 2); // true
// console.log("2" <= 1); // false
// console.log("2" == 2); // true
// console.log("2" != 1); // true

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// the reason that an equality check behaves differently from a comparison is that equality check does not convert null to a number whereas comparisons do convert null to a number and treat it as 0, thats why null >= 0 is true and null > 0 is false

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// !strict check (also checks the data type)

console.log(2 == "2"); // true
console.log('2' === 2); // false
