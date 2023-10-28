const name = "pintoo"

const rank = " 3000"

// console.log(name + rank + " No");

// string interpolation 
console.log(`hello my name is ${name} and my rank ${rank}`);

const playerName = new String('pintookmp-erhourswork')

// accessing the value pair 
// console.log(playerName[0]);
// console.log(playerName.__proto__);
// console.log(playerName.length);
// console.log(playerName.toUpperCase());
// console.log(playerName.charAt(11));
// console.log(playerName.indexOf('o'));

const newString = playerName.substring(0,6)

console.log(newString);

const anotherString = playerName.slice(-12,6)

console.log(anotherString);

const trimTheName = "    pintoo    "
console.log(trimTheName);
console.log(trimTheName.trim());

const oldUrl = "https://google.com/new%1245world"

console.log(oldUrl.replace("%1245" ,"the"));

console.log(oldUrl.includes("com"));

console.log(playerName.split('-'));