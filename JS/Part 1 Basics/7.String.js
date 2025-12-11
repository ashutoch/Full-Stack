// const name = "Ashu"
// const repoCount = 7

// console.log(name + repoCount + "Value") // Ashu7Value

// Template literals (ES6 feature)
// !also called string interpolation
// !use backticks ` ` instead of single or double quotes
// !embed expressions inside ${}
// console.log(`Hello! My name is ${name} and my Repo Count is ${repoCount}`) // Name: Ashu, Repo Count: 7

// benefits of template literals
// 1. easier to read and write
// 2. allows multi-line strings
// 3. allows embedding expressions like {name.toUpperCase()} inside ${} => Hello! My name is ASHU and my Repo Count is 7

const gameName = new String("-hooman")  // instance of String object
// console.log(gameName) // [String: 'Hooman']
// console.log(typeof gameName) // object

console.log(gameName[0]);  // H  //! accessing characters using index / key value pairs
console.log(gameName.__proto__); 
// String {'', length: 6, constructor: ƒ, anchor: ƒ, big: ƒ, …}  // !prototype of String object, can be seen in any console 

console.log(gameName.length); // 6
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4); // 0 to 4-1 = 3
console.log(newString); // -hoo

const anotherString = gameName.slice(-5, 2); // -6 means starting from 0 index, 2 means upto 2-1=1 index
console.log(anotherString);

const url = "https://ashu.com/about/me";
console.log(url.replace("about", "contact")); // https://ashu.com/contact/me

console.log(url.includes("ashu")); // true

console.log(url.split('/'));
