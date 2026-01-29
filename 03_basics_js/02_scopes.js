// var c = 3000 gl0bal scope ; declared outside the block; can be acessed from Anywhere
// Avois using var

let a = 3000;
if(true){
    let a = 10
    const b = 20
    var c = 30

    console.log("Inner : a ",a);// block scope ; Defined inside { }; variable, Method can declared in block scope can't be acessed outside the Block.
}
console.log(a);
//console.log(b);
console.log(c);


//Note -: global scope inside devtools of browser and inside the node envirounment of node.js are different

//+++++++++++++++++++++++ Working with Nested Scope ++++++++++++++++++++++++++++++++++++

function one(){
    //parent function
    const username = "hitesh"

    function two(){
        // child function
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

//+++++++++++++++++ Interesting +++++++++++++++++++++++++++

//1
function addOne(num){
    return num + 1;
}

console.log(addOne(5));

// Expression
const addTwo = function(num){
    return num + 2
} 

console.log(addTwo(5));

// hoisting -: When you declare a function using a function declaration, JavaScript hoists the entire function to the top of its scope during the memory creation phase.
//That is why you can call it from anywhere in the code (within the same scope), even before it appears in the source code.