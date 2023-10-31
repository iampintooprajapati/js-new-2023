
function sayMyName(){
    console.log("P");
    console.log("i");
    console.log("n");
    console.log("t");
    console.log("0");
    console.log("0");
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//    console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result;
    // console.log(num1 + num2);

    return num1 + num2
 }

const result = addTwoNumbers(5,8)

// console.log("result : ", result);

function loginUserMessage(username = "mark"){
    if(!username){
        console.log("Please Enter the username");
        return
    }
    return `${username} welcome to login`
}

// console.log(loginUserMessage())

function addCartPrice(...num1){
  return num1
}

// console.log(addCartPrice(2,5,9,5,8,7,7));

const user = {
    name:"Pintoo",
    age:18
}

function handleObjects(toObject){
  console.log(`my name ${toObject.name} and age is ${toObject.age}`);
}

// handleObjects(user)

handleObjects({
    name:"Mark", 
    age: 100

})