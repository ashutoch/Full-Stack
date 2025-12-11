// for of
const arr = [1,2,3,4,5,6,7,8,9,10]
for (const num of arr) {
    // console.log(num);
    
}

const greetings = 'Hello World'
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// map

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States of America')
map.set('UK', 'United Kingdom')
map.set('AU', 'Australia')
map.set('CA', 'Canada')
map.set('CA', 'Canada')  // wont get copied as maps are known for its unique key & value pair

console.log(map);

for(const [key, value] of map) { // [key, value] destructuring of array
    console.log(key, ':', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA',
    'game3': 'Spiderman'
}

// for (const [key, value] of Object.entries(myObject)) {
//     console.log(key, ':', value);
// }