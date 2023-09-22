console.group("If-else & Switch Statement!");
console.group("if-else");
let age = "20";
// age = 20;
const constVar = 7;
const isProgrammer = true;
let hobby = "programming";
// hobby = false;


if(age == 19){
    console.log("Age is 19");
}else if(age == 21){
    console.log("Age is 20");
}else if(age === "20"){
    console.log("Strictly checked, Age is 20");
}else{
    console.log("Age is not 19");
}

// console.log(20 !== "20");
if(typeof constVar !== "undefined"){
    console.log("constVar is defined!");
}else{
    console.log("constVar is not defined!");
}

if(isProgrammer && hobby === "programming"){
    console.log("You can learn JavaScript");
}else{
    console.log("You cannot learn javascript!")
}

console.log(age === 45 ? "Your Age is 45!" : "Age is not 45");
console.groupEnd("if-else")

console.group("switch case");
let typingSpeed = 170;
switch (typingSpeed) {
    case 70:
        console.log("Your Typing speed is moderate!");
        break;
    
    case 80:
        console.log("Your Typing speed is above moderate level!");
        break;
    
    case 110:
        console.log("You are the Fast Type writer!");
        break;

    case 170:
        console.log("You are the Genius!!");
        break;

    default:
        console.log("Fast Typing can save your 20yrs!");
        break;
}

console.groupEnd("switch case");

console.groupEnd();