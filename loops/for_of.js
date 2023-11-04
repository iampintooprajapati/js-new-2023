// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char : ${greet}`);
}

// Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "usa")
map.set('Fr', "France")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,value);
}

const myObject = {
    'game1':"Cricket",
    'game2':"NFS"
}

// for (const [key,value] of myObject) {
//     console.log(key,value);
// }

const myNewObject = {
    js: "javaScript", 
    cpp: "C++", 
    rb: "Ruby", 
    kt: "Kotlin"
}

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const key in myNewObject) {
    // console.log(`${key} shortcut is for ${myNewObject[key]}`);
}

const newArr = [1,2,3,4,5]

for (const key in newArr) {
   // console.log(newArr[key]);   
}

// for each

const coding = ["js" , "py", "cpp", "kt" , "dart"]

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach((element) => {
//     console.log(element);
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (ite,index,arr) => {
//     console.log(ite,index,arr);
// })

const myCoding = [
    {
        lanName:"javaScript",
        fileName:"js"
    },
        {
        lanName:"kotlin",
        fileName:"kt"
    },
        {
        lanName:"java",
        fileName:"java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.lanName, item.fileName);
})