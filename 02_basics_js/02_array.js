 const dc_heros = ["superman","Batman","Spiderman"];
 const marvel_heros = ["Ironman","Thor","Hulk","Captain America","Black widow"];
//push()
// push() -> modify the original Array ; return length ,
//  console.log(dc_heros.push(marvel_heros)); // 4
//  console.log(dc_heros); // ['superman','Batman','Spiderman',[ 'Ironman', 'Thor', 'Hulk','Captain America', 'Black widow' ] ]

//concat()
//concat() can merge multiple arrays and values and returns a new array.
// original Array remain unchanged
//Non-array values are added as single elements in concat().

console.log(dc_heros.concat(marvel_heros));
const super_heros = dc_heros.concat(marvel_heros);
console.log("Super_heroes : ",super_heros);

// concatenating object with array
const  cartoon = super_heros.concat({super_hero : "name"});
console.log(cartoon);
// conactenating  string with array
const cartoon_character = cartoon.concat("Ben10");
console.log(cartoon_character);


// Spread Operator (...)
// The spread operator is used to expand iterable elements (like arrays)
// and combine multiple values at once, instead of adding elements one by one

let aliens = ["Bigchil","jetry","Alienx"];
let num = [1,2,3,4,5,6,];
let ob1 = {name : "Rishikesh", age : 22 , Address : "Bhuban"};


 
const combined = [...aliens, ...num];
console.log(combined); // [ 'Bigchil', 'jetry', 'Alienx', 1, 2, 3, 4, 5, 6 ]

// const combined1 = [...aliens, ...num, ...ob1]; it show error
// Reason :  As spread operator works only on iterable values; plain objects are not iterable, so spreading an object into an array causes a TypeError.

const combined1 = [...aliens, ...num, ob1];
console.log(combined1);

// flat()
// The flat() method is used to flatten a nested array into a single-level array.
// It works based on a specified depth.
// If no depth is provided, the default depth is 1.
// If Infinity is used as the depth value, it flattens all levels of nested arrays.
// flat() does NOT modify the original array; it returns a new array.

const array = [1, [2, 3], [8, [9, 7, [6, 5]]]];

// Default depth = 1
const array1 = array.flat();
// Output: [1, 2, 3, 8, [9, 7, [6, 5]]]

console.log("Flatten Array:", array1);

// Fully flatten the array
// const array2 = array.flat(Infinity);
// console.log("Fully Flattened Array:", array2);

// Array.isArray()
// u know when u select data from web page it comes from in the form of object, string, nodeList
// To check the recevied data wheather it is in array form or not u can use this function

// when u check data wheather it is an array or not
// return true -> if it is array  otherwise return false 

console.log(Array.isArray("Hitesh"));
// console.log(isArray("Hitesh"));  show Error  , isArray not defined

//Array.from()
// By using this operator u can  convert string , object,node list into Array 

console.log(Array.from("Hitesh")); // now it convert String -> Array [ 'H', 'i', 't', 'e', 's', 'h' ]

//****Interview ******/
// Objects are not iterable, so Array.from(object) returns [] unless you use Object.keys(), Object.values(), or Object.entries().

console.log(Array.from({name : "Suyansu"}));// []


let ob2 = {name : "Rishikesh", age : 22 , Address : "Bhuban"};
console.log("ObjectArray : ",Array.from(Object.keys(ob2))); // ObjectArray :  [ 'name', 'age', 'Address' ]
console.log("objectArray1 : ",Array.from(Object.values(ob2))); // objectArray1 :  [ 'Rishikesh', 22, 'Bhuban' ]
console.log("ObjectArray2 : ",Array.from(Object.entries(ob2))); // ObjectArray2 :  [ [ 'name', 'Rishikesh' ], [ 'age', 22 ], [ 'Address', 'Bhuban' ] ]


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // return array containing 3 values of variables
console.log(Array.of(aliens,num)); // return nested Array 

