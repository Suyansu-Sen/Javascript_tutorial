//DataTypes -> Majorly 2 types Primitive,  non- primitive  --->[On the basis of data we store on the memory and how we acess them ]

//  primitive -> 7 types : String , Number, Boolean, null, undefined, Symbol,BigInt(For Scientific values)

// JavaScript - > Dyamically typed Language as we don't need to declare Datatype of variable before use, bc JS checks Datatype of variable at runtime

// while in Statically typed language u have to declare Datatype of variable then u can use accrording to it like java, c

//Reference Type (non-primitive type) -> Array, Objects, Functions

const score = 100;
const scoreVa = 100.3;
console.log(typeof (scoreVa));
console.log(typeof (score)); // As in JS there is no mentoined float , decimal  --> DataType of 10, 10.3 r similar = Number type

const isLoggedin = true;
const outsideTemp = null;
let userEmail = undefined;

console.log(userEmail); // undefined

const id1 = Symbol('123');
const id2  = Symbol('123');
console.log(id1 === id2); // false 


//Objects -> inside { curly braces and in key : value pair}
// {
//     name : "Suyansu",
//     age : 23
// };  alone curly braces{} containing key : value pair treated as block rather an Object as u don't assign to variable .

let myObj = {
    name : "Ridhi",
    age : 24
};
console.log(myObj); // as it is object properties r printed in key : value
console.log(typeof myObj);// object



let myFun = function(){
    console.log("Heyy , Suyansu!!!");
} 
console.log(myFun);// [Function: myfun] -> function Object
console.log(typeof myFun); // function







