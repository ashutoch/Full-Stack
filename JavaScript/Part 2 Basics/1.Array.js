// arrays

const myArr = [0, 1, 2, 3, 4, 5, "ashu", true]
// console.log(myArr);

// accessing array elements
// console.log(myArr[0]);
// console.log(myArr[6]);

//* when we copy an array to another variable, it creates a reference to the original array and not a new array. So, changes made to the new variable will also affect the original array. -> shallow copy

//* deep copy: deep copy of an object doesn't share references with the original object. Changes made to the deep-copied object do not affect the original object, and vice versa. like splice, slice, concat, ... (spread operator)

const myHeroes = ["shaktiman", "naagraj", "doga", "bade miya"];

const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr[1]);

//! Array Methods
// myArr.push(6) // adds element at the end
// myArr.push(9)
// console.log(myArr);

// myArr.pop() // removes element from the end
// console.log(myArr);

// myArr.unshift(9) // adds element at the beginning
// console.log(myArr)

// myArr.shift() // removes element from the beginning
// console.log(myArr)

// console.log(myArr.includes(9)) // returns true if element is present else false

// console.log(myArr.indexOf(3)) // returns index of the element if present else -1


// const newArr = myArr.join() // converts array to string
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(2, 5) // removes elements from index 2, 5 elements
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1, 3) // removes 3 elements from index 1
console.log(myn2);
console.log("C ", myArr); // splice also modifies the original array