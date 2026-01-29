// const coding = ["js", "ruby", "java", "python", "cpp"]

// //Can foreach loop return a value ? No it can't return any thing
// // if u manually return, output -: undefined, so forEach loop do not return anything.
// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//way -1
//Implicit return

// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//     num > 4
// })
// console.log(newNums); //output -: [] emptty array ;it shows error as u want to acess the element of inner scope {}
//way -2
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);// As u want to acess element of inner scope u first need to retuen element explicitly then u print

//way-3
const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums)



