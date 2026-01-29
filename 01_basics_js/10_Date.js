let myDate = new Date();

// console.log(typeof(myDate)); // Type -> Object

// console.log(myDate.toString()); // return date + Timezone in format --> Tue Jan 06 2026 21:21:16 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString());// return date in format --> 1/6/2026, 9:21:16 PM
// console.log(myDate.toLocaleTimeString()); // return timeString only ---> 9:21:16 PM
// console.log(myDate.toLocaleDateString()); // return DateString only ---> 1/6/2026
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString()); // return date in format --> Tue Jan 06 2026
// console.log(myDate.toISOString()); // return date + timezone --> 2026-01-06T15:51:16.103Z
// console.log(myDate.toJSON()); // return date + timezone --> 2026-01-06T15:51:16.103Z

//************* Declaring Specific Date ********************/

let myCeatedDate = new Date(2023,0,29);
console.log(myCeatedDate.toLocaleDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());






