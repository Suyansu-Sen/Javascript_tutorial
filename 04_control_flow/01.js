//if

if(true){
    // internal code is executed
}
if(false){
    // Internal code is not executed
}
// < , > , <= , >= , == , != , ==, ===(strict equal , check value as well as dataType),!==

if(2 == "2"){
    console.log("executed");
}

if(2 === "2"){
    console.log("executed");
}// it can't executed as due to Ttypes are different(Number, String)


const temeperatue = 49;
if(temeperatue === 9){
    console.log("temeperatue is less than 50");
}else{
    console.log("temperature is greater than 50");
}

const score = 200
if(score < 300){
    let power = "Fly"
    console.log(`User has Power to : ${power}`);
}
//console.log(`User has Power to : ${power}`); it gv error as power is block scoped due o let, can't be acessed outside the block

//++++++++++++++++ short hand Notation +++++++++++++

const balance = 2000;
// if(balance > 500) console.log("test"),console.log("test2"); Immature code, as u can write multiple line separated by (comma,);

if(balance < 500){
    console.log("less than");
}else if(balance < 750){
    console.log("less than 750");
    
}else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const emailLoggedIn = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allowed to Buy Courses");
}

if(userLoggedIn && debitCard && 2==3){
    console.log("Allowed to Buy Courses");
}

if(loggedInFromGoogle || emailLoggedIn){
    console.log("User Logged In");
}


