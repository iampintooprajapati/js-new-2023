


// Primitive datatypes

// As per below catagories Primitive datatypes (around 7) : Call by value 

// String , number , boolean , null , undefined , Symbol , BigInt 

const rank = 101

const rankValue = 102.0

const isFirst = false

const ausWin = null

let winWc2023;

const id = Symbol('123')

const rankId = Symbol('123')

console.log(id === rankId);

// const bigNumber = 74185596542214863

// Reference (Non Primitive datatypes)

// Array :  

const socialMediaApps = ["Facebook" , "X" , "Instagram" , "Koo"]

// Objects :

let myObject = {
    name: "Pintoo",
    age:"121"

}

// Functions : 

const myAge = function(){
    console.log("18");
}

console.log(typeof socialMediaApps);

// ******************************* Memory *********************************************

// Stack ( Primitive )

let myGitId = "iampintoo"

let myGitIdNew = myGitId

myGitIdNew = "No chai no code"

console.log(myGitIdNew);

console.log(myGitId);

// Heap ( Non - Primitive)    

let user = {
    email: "pintoo@mailinator.com",
    age: "18"
}

let userNew = user

userNew.email = "pintoo1@mailinator.com"

console.log(user.email);
console.log(userNew.email);



