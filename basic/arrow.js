const user = {
    username: "Pintoo",
    price: 999, 
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to my site`);
       //  console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "mark"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "Pintoo"
//     console.log(this.username);
// }

// one()

// const oneTea = function(){
//     let username = "Pintoo"
//     console.log(this.username);
// }

const oneTea = () => {
    let username = "Pintoo"
    console.log(this);
}

// oneTea()

// const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1 , num2) =>  ({username : "Pintoo"})

// console.log(addTwo(5,9));



