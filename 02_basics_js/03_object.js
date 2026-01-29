//Object can be created in two waays  
// i. Object literals
// ii. Constructor


// Object Literals
// Data is stored as key :  value pair
//Internally all keys r strings , even if u do't see quotes , But values can be string, Number, Boolean, null 
const jsUser = {
    name: "Suyansu",
    age: 18,
    emailId: "suyansusen7@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Moonday", "Tuesday", "Saturday"]
}

// U can acess Object member via two ways 
// Dot Notation, use this approach when key has no spaces, and it be simple
console.log(jsUser.emailId); //suyansusen7@gmail.com. 
//Bracket Notation, use this when key is Dynamic(stored in variable as like Symbol),  if key contain spaces , API responses {Most Powerful ways }
console.log(jsUser["emailId"]); //suyansusen7@gmail.com


const jsUser1 = {
    "full name": "Suyansu Sen",
    age: 18,
    emailId: "suyansusen7@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Moonday", "Tuesday", "Saturday"]
}
// console.log(jsUser1.full name); Syntax Error : can't acess as key -> Spaces
console.log(jsUser1["full name"]);


// Notes-:
// Symbol is a unique Primitive Datatype
// u can't use Symbol directly , u hv to declare 1st beefore use as object member
// Use [symbol] to define object key.
//Acess using object[symbol]


//Scope defines where variables are accessible; JavaScript supports global, function, block, and module scopes with lexical scoping.

const mySym = Symbol("Key1");

const jsUser2 = {
    "full name": "Suyansu Sen",
    [mySym]: "mykey1",
    age: 18,
    emailId: "suyansusen7@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Moonday", "Tuesday", "Saturday"]
}

console.log(jsUser2[mySym]);
console.log(typeof jsUser2[mySym]);
console.log(typeof(mySym));


jsUser2.emailId = "hitesh@gmail.com";
console.log(jsUser2.emailId);// hitesh@gmail.com

//Object.freeze(jsUser2);// via using this Object.freeze() no chnages in object Member be acceptable 

jsUser2.emailId = "suyansusen7@gmail.com"; // while i chnage email, value can't propagate

console.log(jsUser2);

jsUser2.greeting = function(){
    console.log("Hello, jsUser");
}

console.log(jsUser2.greeting);// [Function (anonymous)], function is not executed, only function refernece is return back.
console.log(jsUser2.greeting());

//refering object member  from function , String Interpolation -> u have to keep  msg inside back tick, and variable inside {}, For referring same Object use Keyword "this"

jsUser2.greeting_2 = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}
console.log(jsUser2.greeting_2());// Hello JS user, Suyansu Sen

