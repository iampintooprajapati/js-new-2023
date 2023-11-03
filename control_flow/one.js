// if
// < , > , <= , >= , == != , === ,!==

const isUserLogin = true;

const temperature = 42;

// if (2 != 3) {
//     console.log("call");
// }

// if (temperature === 42) {
//   console.log("less then 50");
// } else {
//   console.log("temperature is greater then  50");
// }

const run = 200

// if (run > 100) {
//     const power = "Fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);

const balance = 1000

// if (balance > 500) console.log("test"); bad code 

// if(balance < 500){
//    console.log("less then 500");
// } else if(balance < 750){
//     console.log("less then 750");
// } else if(balance < 900){
//     console.log("less then 900");
// } else {
//     console.log("less then 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy tv");
}

if (loggedInFromGoogle || loggedInFromEmail || true) {
    console.log("user Logged in");
}


// Nullish Coalescing operator (??): null undefined 

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);

// Ternary operator 

// condition ? true : false;

const iceTea = 100
iceTea >= 80 ? console.log("less then 80") : console.log("more then 80");





