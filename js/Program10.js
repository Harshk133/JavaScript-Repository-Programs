console.group("Functions in JavaScript!");

// let name = "Harsh Moreshwar Kale";
// function sendMessage(name="Harsh Kale"){
//     console.log(`Good Night ${name}! sweet dreams!! Take care ${name}...`);
// }

// sendMessage("Kale Harsh");
// // sendMessage(name);
// sendMessage("Shree");
// sendMessage("Omkar");

// let funcVar = function(){
//     alert("FuncVar is used by u!");
// }

// // funcVar();

// let myObj = {
//     name: "Harsh Kale",
//     favouriteGame: function() {
//         console.log("CHESS!");
//     }
// }


// console.log(myObj.favouriteGame());

// let arr = ["mango", "watermeleon", "kivi", "apple", "pineapple"];
// arr.forEach(function(element, index, array) {
//     console.log(element, index);
// });


var i = 7;
console.log(i);
function myFunction(name){
    // var i = 10;
    // i = 10; // this also modified the global var i!!
    let i = 10;
    console.log(i);
    return `Your name is this ${name}`;
}
console.log(myFunction("harsh"), i);


console.groupEnd();