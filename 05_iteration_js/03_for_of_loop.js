// Array , Object Specific loop

//for of

const arr = [1,2,3,4,5]
// for (const element of object) {
    
// }

// u can write as 
// for(const i of arr){
// }

for(const num of arr){
    console.log(num)
}

// Printing characters from  a string --> Using for...of loop

const greetings = "Welcome back, Suyansu"
for(const greet of greetings){
    // console.log(greet)
    console.log(`each Character is ${greet}`)
}
// Take a string and print character it contain only

const Myname = "Suyansu sen"
console.log(`${Myname} contain characters are -:`)
for(const char of Myname){
    if(char == " "){
        continue;
    }else{
        console.log(char)
    }
}


// Map

const map = new Map()
map.set('IN',"INDIA")
map.set('US',"UNITED STATES")
map.set('PAK',"PAKISTAN")
map.set('UN',"UNITED NATION")
// map.set('IN',"INDIA"), if u try to enter duplicate values u see, it can't consider
//map is same as object  except, it hold only  unique key: value pairs
console.log(map)

//Destructuring map
// for considering map  Syntax -: for([key, value] of variable_name){.......}
for(const [key, value] of map){
    // console.log(key) it only print key as Country Code only
    // console.log(value); it only print value, as Country Name
    //console.log(`${key} -: ${value}`) // u can print country code and name as like u can destructure
    console.log(key,':-',value);// u aso destructure like 
    
}


//Iterating Object using for.. of loop
const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman',
    'game3': 'Velorant'
}
// for(const [key,value] of myObj){
//     console.log(key,':-',value);
// } To iterate object using for.. of loop u can't do it