// js in objects literals 

const mySymbol = Symbol("Key1")

const user = {
    name: "Pintoo",
    "full name":"Pintoo Prajapati",
    [mySymbol] : "myKey1",
    age:18,
    location: "Ahmadabad",
    email: "pintoo@apple.com",
    isLogin: true 
}
// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log( user[mySymbol]);

user.email = "pintoo@web.com"
// Object.freeze(user)
user.email = "pintoo@cs.com"
// console.log(user);

user.greetings = function(){
    console.log("Hello world")
}

user.greetingsNew = function(){
    console.log(`hello js user , ${this.name}`)
}

// console.log(user.greetings());

// console.log(user.greetingsNew());

/********************************* Singleton object ************************************************/

const starUser = new Object()

starUser.id = "abc"
starUser.name = "logan"
starUser.isLogin = "True"

// console.log(starUser);

const newUser = {
    email: "star@web.com",
    fullname: {
        userfullname:{
            firstname:"Pintoo",
            lastname:"Prajapati"
        }
    }
}

// console.log(newUser.fullname.userfullname);

const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1, 
        email:"pintoo@we.com"
    },
    {
        id:2, 
        email:"pintoo@we.com"
    },
    {
        id:3, 
        email:"pintoo@we.com"
    }, 
]

users[1].email
// console.log(starUser);

// console.log(Object.keys(starUser));
// console.log(Object.values(starUser));
// console.log(Object.entries(starUser));

// console.log(starUser.hasOwnProperty("isLogin"));

const course = {
    name: "js",
    price: "99",
    courseInstructor: "gpt"
}

const {courseInstructor : ins} = course

console.log(ins);



