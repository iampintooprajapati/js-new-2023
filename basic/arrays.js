// Arrays in js

const myArr = [0,1,2,3,4,5,6,7]

const myIdeals = ["Jobs" , "Mark" , "Bill"]

const myArr2 = new Array(1,2,3,4,5,6)

//console.log(myArr[3]);

// Arrays methods in js

// myArr.push(8)
// myArr.pop()
// myArr.unshift(101)
// myArr.shift()

// console.log(myArr.includes(201));

// console.log(myArr.indexOf(2001));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice 

// console.log("P ", myArr)

const myn1= myArr.slice(1,3)

// console.log(myn1)

// console.log("P1 ", myArr)

const myn2= myArr.splice(1,3)

// console.log("P2 ", myArr)

// console.log(myn2)

const marvel_heros = ["thor", "ironman", "siderman"]

const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const heros = marvel_heros.concat(dc)

// console.log(heros);

const new_world_dc = [...marvel_heros, ...dc]

// console.log(new_world_dc);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const useThisArray = anotherArray.flat(Infinity)

console.log(useThisArray);

console.log(Array.isArray("Pintoo"));

console.log(Array.from("Pintoo"));

console.log(Array.from({name:"Pintoo"}));

let player1 = 101

let player2 = 102

let player3 = 103 

console.log(Array.of(player1,player2,player3));







