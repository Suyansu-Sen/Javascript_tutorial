// let accountId = "123";

// let accountId = "123ab";
// let accountId = "Suyansu";
// let accountId = null;
// let accountId = undefined;
// let accountId = true;
// let accountId = "true";
// let accountId = "null";


let accountId = "undefined";



console.log(accountId);
console.log(typeof accountId);


let AccountIdType = Number(accountId);
console.log(AccountIdType);
console.log(typeof AccountIdType);

// Some Conversion  "String type" => Number, 
// "33" => 33,"33abc" => NaN, "null" => NaN, null => 0,"undefined"  or undefined => NaN

console.log(typeof "null"); // typeof "null" -> String
console.log(typeof null);  // typeof null -> object 
console.log(typeof undefined); // typeof undefined -> undefined
console.log(typeof(accountId));



//Conversion type-2  ("String" or Number => Boolean)
// 1 => true, 0 => false, "" => false [here typeof "" is String], "Himesh" => true

// let isLoggedIn = 1;
// let isLoggedIn = "";
// let isLoggedIn = "Suyansu";
let isLoggedIn = 0;

console.log(isLoggedIn)
console.log(typeof isLoggedIn);

let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);
console.log(typeof (booleanisLoggedIn));

// For checking DataType of Variable ->  via method - console.log(typeof(variable)), via function - consoloe.log(typeof variable)





