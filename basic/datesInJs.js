// Dates 

let myDate = new Date()

// console.log(typeof myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023,2,23)

let myCreatedDate = new Date("2023-11-23")

console.log(myCreatedDate.toDateString());

let timeStamp = Date.now()

console.log(Math.floor(timeStamp/1000));

console.log(myCreatedDate.getTime());