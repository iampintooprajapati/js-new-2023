const userEmail = "pintoo@mailinator.com"

if (userEmail) {
    console.log("got user email");
    
} else {
    console.log("don't user email");
}


// falsy value
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy value
// "0" , 'false' , " ", [] , {} , function(){} , 

const emtObject = {}

if (Object.keys(emtObject).length === 0) {
    console.log("object is empty");
}