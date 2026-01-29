const userEmail = "suyansu@gmail.com"
// const userEmail = []
if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have Email");
    
}

//falsy values

//false, 0, -0, BigInt 0n, null, undefined, "" (empty String),NaN

// truthy values

// "0" (if o inside the string can treated as truthy value), "false", " ",[] empty array,{} empty object, function(){} (empty function)

//checking the array is empty or not

if(userEmail.length === 0){
    console.log("Array is empty");
}

//checking whaetaher Object is empty or not
// as Object.keys  -> return Array -> u can check length and if length === 0 , then Obj is empty ; Having no key: value pairs
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

//Nullish Coelescing Operator (??) : null , undefined

let val1;
//val1 = 10 ?? 15.  10
//val1 = null ?? 15  15
val1 = null ?? 20 ?? 30

//val1 = null ?? undefined undefined
//val1 = undefined ?? null null
//val1 = null ?? null ?? undefined ?? 10
console.log(val1);

//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");



