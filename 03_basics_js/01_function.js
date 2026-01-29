function SayMyName(){
    console.log("H");
    console.log("H");
    console.log("H");
}

//SayMyName : Reference Of Function ; function_Name -> Reference
// SayMyName() : function() ; function_name with braces () -> execute


//During function declaration ->  u can pass parameters
// During function call -> u can calll via arguments


// function addTwoNumbers(num1, num2){
//     // num1, num2 --> function Parameters
//     console.log(num1 + num2);
// }


// addTwoNumbers();// NaN : As u  don't use argumenets
// addTwoNumbers(10,20);// 30 ; 10, 20--> Arguments
// addTwoNumbers(10, "a");//10a

function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    console.log("hitesh1");
    return result; 
    console.log("hitesh2"); // unreachable ; As inside function -> After return function execution is Stopped
}
// Two result r different
const result = addTwoNumbers(4,5);

console.log("Result: ",result)

// while u want to return a dynamic message via function , use backtick and
//1
function loginUserMessage(username){
    return `${username} just logged In`
}
console.log(loginUserMessage("Suyansu"));
console.log(loginUserMessage());// undefined just logged In; When u can't pass any argument ; Interview


//2
function loginUserM(username){
    // if(username === undefined){
    if(!username){
        console.log("Plz Enter a userName")
        return
    }
    return `${username} just logged In`
}
console.log(loginUserM());

//3

//Use Of Rest Operator (3 dots ...)

// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,400,500))// 200

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500))// return Array -; [200, 400, 500]

//4 **** vvImp(InterView)

function calculatePrice(val1, val2, ...num1){
    return num1;
}
console.log(calculatePrice(200,400,500,800,900))//  [ 500, 800, 900 ] As  this function print ...num1 & val1, val2 200, 400

//5

function handleObject(anyobject){
    console.log(`ProductName is ${anyobject.name} and price is ${anyobject.price} rupees`);
}
// AS u can make object and then pass 
const product ={
    name: "NOvel",
    price: "5000"
}

//handleObject(product);


// U can pass Directly object and can print
handleObject({
    name: "Biscuit",
    price: "50"

})

//6 

//Passing Array directly vs creating Array  then passing via variable via Assigning

function returnSecondValue(mynewArray){
    return mynewArray[1]
}
console.log(returnSecondValue([200,400,500,600]));


const array = [200,800,500,600];
console.log(returnSecondValue(array));// 800
