// Array.reduce();

// accumulator -> empty  Array

// way -1
// const array1 = [1, 2,, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,initialValue
// );

// console.log(sumWithInitial); // Output -: 10


//Way - 2
// const myNums = [1,2,3,4,5,6];
// const myTotal = myNums.reduce( function (acc,currVal) {
//     console.log(`Accumulator : ${acc} and CurrentValue : ${currVal}`);
//     return acc + currVal
// },0);
// console.log(myTotal);

// way - 3 (Using arrow function)

const myNums = [1, 2, 3, 4, 5]
const TotalSum = myNums.reduce( (acc,currVal) => acc + currVal , 0)
console.log(TotalSum);


// shoppingCart Example usinng array.reduce comcept

const shoppingCart = [
    {
        itemName: "JavaScript",
        price: 999
    },
    {
        itemName: "Web dev Cohort",
        price: 7999
    },
    {
        itemName: "Data Science",
        price: 2999
    },
    {
        itemName: "ruby on rails",
        price: 1999
    },
]

const TotalPrice = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(`You have to pay : ${TotalPrice}`);

