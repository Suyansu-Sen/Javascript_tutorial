// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
        //Notes-: if i hv no break,then  After matching , this code snipeet and after that all are execueted except default
    case 4:
        console.log("April");
        break;
    default:
        console.log("default matched");
        break;
}

const month1 = "feb"
switch(month1){
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
        
    case "apr":
        console.log("April");
        break;
    default:
        console.log("default matched");
        break;
}