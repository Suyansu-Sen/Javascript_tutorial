//for

// command + D -> select dupliactes
// option + shift + down -> duplicate the selected portion
// array = [10,20,30,40,50,60]
for(let i = 0; i < 10; i++){
    const element = i;
    console.log(element);
}

for(let i = 0; i < 10; i++){
    const element = i;
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop : ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Outer Loop value :${i} having inner loop ${j}`); 
        console.log(`${i} * ${j} = ${i*j}`);              
    }  
}

let Myarray = ["flash", "batman", "Thanos", "Hulk"]
for (let index = 0; index < Myarray.length; index++) {
    const element = Myarray[index];
    console.log(element);
    
}

// break and continue

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("5 Detected");
        break;
        // After break control flow is  halted and loop ends; u r now out of loop
    }
    console.log(`Value of i is ${index}`);
        
}
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("5 Detected");
        continue
        //continue : Skips the current iteration and continues looping, ignore once
    }
    console.log(`Value of i is ${index}`);
        
}