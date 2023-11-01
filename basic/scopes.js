

let apple = 500
if(true){
    let apple = 100
const banana = 50
// console.log('inner: ', apple);
// var chary= 20

}

// console.log(apple);
// console.log(banana);
// console.log(chary);

function one(){
    const username = "Pintoo"

    function two() {
        const website = "twitter"
       //  console.log(username);

    }
   // console.log(website);
    two()
}

one()

//*********************************** hoisting in javascript ******************************************************** */

console.log(addOne(20));
function addOne(num){
    return num + 1
}

// addTwo(100)
const addTwo= function(num){
    return num + 2
}

