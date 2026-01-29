const user = {
    username: "Hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        // As u refer the current Context like  username , u use this.variable_name; to execute

        console.log(this);
    }
}

user.welcomeMessage()

user.username = "Suyansu"
user.welcomeMessage()

//this refers to the current execution context, and its value depends on how a function is invoked.
// inside the object.method -> this === Object

console.log(this);// output -: {}

// Inside Node envirounment global Object -> {}; Empty
// Inside browser the global object -> Window{....} Object
// console.log(this) behave differently while u executing in Devtools of browser , and inside node Envirounment

//+++++++ CONCEPT +++++++++++

// via Function declaration
function chai(){
    let username = "Suyansu"
    // console.log(this.username);// undefined; As this is used inside Object can't inside the function
    console.log(this);
}
chai();

// checking via function Expression
const chaiExpr = function(){
    return this;// Here inside function this ->  refers to global object; so it return many global methods
}
console.log(chaiExpr());

// const chai2 = function(){
//     let username = "Hitesh"
//   console.log(this.username)
// }
// chai2();

// arow function -> remove function in expression; add arrow after parathesis

//1
const chai2 = () =>{
    let username = "Hitesh"
    console.log(this.username)
}
chai2();// undefined

//1.1
const addTwo = (num1, num2) =>{
    // explicit return; due to use of return key word and use of {Curly Braces}
    return num1 + num2
}
console.log(addTwo(7,8));

//1.1.1
// u can write like this
const AddThree = (num1, num2, num3) => num1 + num2 + num3
console.log(AddThree(10,20,30));

//1.1.1.1
// u can write like this


// implicit return ;
const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4);
console.log(addFour(10,20,30,40))

//1.2
// How to return Object using arrow operator

// const add = (num1, num2) => {username: "Suyansu"} // wrong way of  returning Object using arrow operator ==> (parentesis{curlybraces key: value})
const add = (num1, num2) => ({username: "Suyansu"})
console.log(add(3,4));


// 1. `this` depends on how a function is called
// 2. Normal functions have their own `this`
// 3. Arrow functions DO NOT have their own `this`
// 4. Arrow functions inherit `this` from parent scope
// 5. Do NOT use arrow functions as object methods if `this` is required
// 6. Arrow functions are best for callbacks and calculations
// 7. To return an object from arrow function, wrap it in parentheses







