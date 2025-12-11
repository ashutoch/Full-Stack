const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift'
}

for (const key in myObject) {
    // console.log(key); // for only keys
    // console.log(myObject[key]); //for only values
    console.log(`${key} for ${myObject[key]}`); // for both
}

const programming = ['js', 'cpp', 'rb', 'swift', "python"]
for (const key in programming) {
    // console.log(key); // for only keys
    console.log(`${key} for ${programming[key]}`);
}

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States of America')
map.set('UK', 'United Kingdom')
map.set('AU', 'Australia')
map.set('CA', 'Canada')

for (const key in map) {
    console.log(key, ':', value); // map is not iterable so we cant use for-in loop for it
}