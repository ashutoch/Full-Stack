const marvel_heroes = ["ironman", "thor", "hulk", "captain america"];
const dc_heroes = ["batman", "superman", "flash", "wonder woman"];

// marvel_heroes.push(dc_heroes); // adds at the end
// console.log(marvel_heroes);
// console.log(marvel_heroes[4][1]); // accessing nested array element

// const allHeroes = marvel_heroes.concat(dc_heroes); // merges two arrays and returns a new array
// console.log(allHeroes);
//* returns a new array without modifying the existing arrays so we need to declare a new variable to store the merged array but we can only add 2 arrays at a time

// const allHeroes = [...marvel_heroes, ...dc_heroes]; // using spread operator to merge two arrays
// console.log(allHeroes);
//* spread converts the array elements into individual elements and then merges them into a new array and we can add more than 2 arrays together

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity) // flattens the nested arrays up to the specified depth
// console.log(real_another_array);


console.log(Array.isArray("Ashu")); // checks if the given value is an array or not
console.log(Array.from("Ashutosh")) // converts an iterable or array-like object into an array

console.log(Array.from({name: "Ashutosh"})); // converts an object into an array but since the object is not iterable, i.e., Key-value pairs, it returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3, 400, 500)); // creates a new array from the given arguments