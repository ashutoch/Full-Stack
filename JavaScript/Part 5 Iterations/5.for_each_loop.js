const coding = ['js', 'cpp', 'rb', 'swift', "python"]

coding.forEach(function (val) {  // callback function so it doesn't have a name
    // console.log(val);
})

coding.forEach((item) => {
    // console.log(item);
})

function printMe (item){
    // console.log(item);
}
// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'C++',
        languageFileName: 'cpp'
    },
    {
        languageName: 'Ruby',
        languageFileName: 'rb'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

