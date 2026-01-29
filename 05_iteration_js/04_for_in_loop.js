const myObj = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'Rubby',
    swift: "swift by apple"
}

// for ...in loop , syntax -:

// for (const key in object) {    
//     const element = object[key];
// }

//Notes-:
// In for...in loop values are aceesible using key only

for(const key in myObj){
    // console.log(key);
    console.log(`Shortcut of ${myObj[key]} is ${key}`);
}

//Iterating Array using for....in loop

let programming = ["Java","c++","python","JavaScript","TypeScript"]
for(const key in programming){
    // console.log(key); it onl print index 
    
    console.log(programming[key]);
    
}

//Maps can't be iterable Using for .. in loop

// u can uncomment and check by compiling

// const map = new Map()
// map.set('IN',"INDIA")
// map.set('US',"UNITED STATES")
// map.set('PAK',"PAKISTAN")
// map.set('UN',"UNITED NATION")

// for(const key in map){
//     console.log(map[key])
// }