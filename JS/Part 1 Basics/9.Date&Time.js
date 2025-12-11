//! Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString("en-IN"));
// console.log(myDate.toLocaleTimeString("en-IN"));
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 10, 23); // Year, Month (0-11), Day
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 10, 23, 7 ,25); // Year, Month (0-11), Day , Hour, Minute
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date ("10-14-2025 19:25:00"); // MM-DD-YYYY HH:MM:SS AM/PM
// console.log(myCreatedDate.toLocaleString("en-IN"));

//! Timestamps -> actually used in polls and quizzes to calculate time difference
// let myTimestamp = Date.now(); // Timestamp in milliseconds
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime()); // getTime() method also returns timestamp in milliseconds
// console.log(Math.floor(Date.now() / 1000)); // Timestamp in seconds

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay()); // 0 - Sunday, 1 - Monday, ..., 6 - Saturday
// console.log(newDate.getMonth() + 1); // Months are zero-indexed
// console.log(newDate.getFullYear());
// console.log(newDate.getDate());
// console.log(newDate.getTime()); // Timestamp in milliseconds
// console.log(newDate.getMinutes());
// console.log(newDate.getHours());

console.log(newDate.toLocaleString('default', {
    weekday: 'long', // long, short, narrow
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
    day: 'numeric', // numeric, 2-digit
}))