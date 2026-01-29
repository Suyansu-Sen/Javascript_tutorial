// Imediately Invoked Function Expression(IIFE)

// it used to immidiate invoking of function
//Due too global scope pollution , to remove this we use iife
// 1. Executes immediately after definition
// 2. Creates a private scope
// 3. Prevents global scope pollution
// 4. Can be anonymous or named
// 5. Accepts parameters
// 6. Must end with semicolon
// 7. Cannot be called again


// iife without parameter
(function chai(){
    console.log(`Database Connected`)
})();

// named iife(iife with parameter)

//Arguments passed to an IIFE must be valid values (strings, numbers, variables), not undeclared identifiers.

(function aurcode(name){
    console.log(`Heyy ${name}, Database Connected`)
})("Suyansu");

//named iife with arrow function
((name) =>{
    console.log(`Heyy ${name}, Database Connected`)
})("Hitesh");

// iife with arrow function(Without parameter)

(() =>{
    console.log(`DatabaseTwo Connected`)
})();

