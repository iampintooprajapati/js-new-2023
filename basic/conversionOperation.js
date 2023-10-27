let age = 124  

let newAge = "100" 

console.log(typeof age);

console.log(typeof(age));

console.log(typeof newAge);

let valueInNumber = Number(newAge)

console.log(typeof valueInNumber);

let oldAge = "100abc"

let valueInNumberNew = Number(oldAge)

console.log(typeof valueInNumberNew);

console.log(valueInNumberNew);

let coldAge = null

let valueInNumberColdAge = Number(coldAge)

console.log(typeof valueInNumberColdAge);

console.log(valueInNumberColdAge);

// "100" => 100 Number op
// "100pintoo" => NaN op type is still number confusing
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// isLoggedIn = 1 => true op 
// isLoggedIn = 0 => false op
// isLoggedIn = "1" => true op
// isLoggedIn = "0" => true op
// isLoggedIn =  "" => false op 
// isLoggedIn = null => false op
// isLoggedIn = undefined => false op

let newNumber = 101

let stringNumber = String(newNumber)

console.log(typeof stringNumber);

console.log(stringNumber);


