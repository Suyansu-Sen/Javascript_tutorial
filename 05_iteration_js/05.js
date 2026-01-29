const coding = ["Java","C++","JavaScript","C","Python","Ruby"]
// coding.forEach( function name(params) {
    
// })

// Way - 1 Using callback function
// coding.forEach(function (val){
//     console.log(val);
// })

// way -2
// coding.forEach((item) => {
//     console.log(item);
// })

//way -3

// function PrintMe(item){
//     console.log(item);
// }
// coding.forEach(PrintMe)

//Notes-: By using forEach loop u can acess information using 3 parameter -: item, index, arr
coding.forEach( (item,index,arr) =>{
    console.log(item,index,arr);
})


const programming = [
    {
        ProgrammingLanguage: "Java",
        laguageFilename: "java"
    },
    {
        ProgrammingLanguage: "JavaScript",
        laguageFilename: "JS"
    },
    {
        ProgrammingLanguage: "Python",
        laguageFilename: "Py"
    },
    {
        ProgrammingLanguage: "Ruby",
        laguageFilename: "rb"
    }
]

programming.forEach((item) => {
    console.log(item.ProgrammingLanguage);
})
//Notes-: From databases values are come in the array formata and each value are in the form of object , means Array containg Object format as like