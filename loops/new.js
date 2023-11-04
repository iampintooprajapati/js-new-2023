const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num) => num + 10 )

// console.log(newNums);

const newNumbers = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)


// console.log(newNumbers);

// reduce in js 

const myNewNumbers = [1,2,3]

// const total = myNewNumbers.reduce(function (acc, curVal){
//     console.log(`acc : ${acc} , curVal : ${curVal}`);
//     return acc + curVal
// },0)

const total = myNewNumbers.reduce( (acc,curVal) => acc + curVal,0)

// console.log(total);

const shoppingCart = [
    {
        itemName : "Js Course", 
        price:99
    },
    {
        itemName : "java Course", 
        price:9991
    },
    {
        itemName : "mob Course", 
        price:9999
    }
]

const pay = shoppingCart.reduce( (acc,item) => acc + item.price ,0)

console.log(pay);