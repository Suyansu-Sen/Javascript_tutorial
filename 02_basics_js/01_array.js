// In JS, arrays can be declared in two ways:
// 1) Using array literals [] , brackets
// 2) Using the Array constructor: new Array()
// Note: By using Array Constructors,array literal u can declare an empty array,

// In JS, arrays are dynamic (resizable) — size is not fixed
let myArr = [1, 2, 3, 4, 5, 6];
let myArr1 = new Array(10, 9, 8, 7, 6);

console.log(myArr);
console.log(myArr1);

// push() vs pop()

myArr.push(7);
// push() adds an element at the end of the array
// and modifies the original array
console.log("After push operation:", myArr);

myArr.pop();
// pop() removes the last element of the array
// and modifies the original array
console.log("After pop operation:", myArr);

//shift() vs unshift()           vvimp(Interview)

myArr.unshift(9);
// unshift() adds an element at the beginning (index 0)
// and shifts all existing elements to the right
console.log("After unshift operation:", myArr);

console.log(myArr.shift());
// shift() removes the first element (index 0), shift() uses without any arguments
// shifts all remaining elements to the left
// returns the removed element (NOT the whole array)
console.log("After shift operation:", myArr);

// Nested array example
let myn1 = new Array("A", myArr);
// Creates a nested array: ["A", [1,2,3,4,5,6]]
console.log(myn1);


// slice() vs splice().      vvimp(Interview)

// slice() example
console.log("A", myArr);
let myn2 = myArr.slice(1, 3);
// slice(start, end)
// extracts elements from index 1 to 2 (end index not included)
// does NOT modify the original array
console.log(myn2);

// splice() example
console.log("B", myArr);
const myn3 = myArr.splice(1, 3);
// splice(start, deleteCount)
// removes 3 elements starting from index 1
// modifies the original array
// returns the removed elements
console.log(myn3);

console.log("C", myArr);

//includes()
//includes is used to check wheather an element exists in the array
// returns true if element present in the array otherwise false
console.log(myArr.includes(9)); // false, as 9 is not included in the Array
console.log(myArr.includes(6));// return true : As 6 is in the array

//indexOf()
//indexOf() return  index of element present in the array
// return -1 if element not present 
console.log(myArr1.indexOf(6)); // return index of element 6 in Array
console.log(myArr1.indexOf(10)); // return 0

// join()
// join converts array -> String
// elements are joined using a comma (,) by default

//const newArr = myArr1.join();
let newArr = myArr1.join();
console.log(myArr1);
console.log(typeof(myArr1));

console.log(newArr);
console.log(typeof(newArr));


//declaring empty array via Array Constructor and using array literal
empty1 = new Array();
empty2 = [];
console.log(empty1,empty2);
console.log([empty1,empty2]);

//confusion
ar1 = new Array(5);
ar2 = [5];
console.log(ar1);//[ <5 empty items> ] --> creates empty array  having length 5;
console.log(ar2);//[ 5 ] --> created array with one element 5




//Interview -> slice vs splice,
// shift vs unshift, 
// indexof() if element not present,
//  uses of join, typeof Array,  
// differenece between myn1 = new Array(5); and myn1 = [5];
// new Array(5); // creates an empty array with length 5
// [5];          // creates an array with one element: 5


