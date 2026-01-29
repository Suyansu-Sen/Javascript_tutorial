//Two types -> Stack memory (used to store primitive Type), heap(used to store non-primitive Type)

// Stack -> In JavaScript, primitive data types are stored by value.
// When a primitive value is assigned to another variable, a separate copy of the value is created.
// Any modification affects only the copied value and does not change the original variable.

// heap -> In case of Heap , Variable stores reference(address) to the memory location, object exists in heap.
// when a referenece is copied y other variables, Both variables point to same object in heap, so Chnaging in one variable can affect other. 
let name = "Suyansu";
let Fullname = name;
console.log(Fullname);// Suyansu

Fullname = "Suyansu Sen";
console.log(name); // Suyansu -> Changes occur in copieed location of memory in Stack
console.log(Fullname);// Suyansu Sen


let user1 = {
    name : "Ridhi Agrawal",
    email : "ridhi@gmail.co"
};

let user2 = user1;
console.log(user2); // { name: 'Ridhi Agrawal', email: 'ridhi@gmail.co' }

user2.name = "Rishi Raj"
console.log(user1.name); // Rishi Raj  As both of variable refer to same memory Location inside heap , when u try to chnage value of user2 obj, user1 original value also chnaged
console.log(user2.name); // Rishi Raj


