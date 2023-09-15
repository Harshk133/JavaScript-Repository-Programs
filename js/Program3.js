console.group("Variables In JavaScript!");
console.log("Variables in JavaScript!");
console.info("var, let, const");

// ** ⚡Rules for Creating JavaScript Variables!⚡ **
/*
1) Variable name cannot start with a number.
2) Can Start with letter, numbers, _ or $.
3) JavaScript Variables are Case-sensitive!

Var: It has a global level scope!
let: It has a block level scope!
*/



var name = "Harsh";
var channel;
var marks = 70;
channel = "Programming & Coding With Harsh";
// console.log(name, channel, marks);

var $city = "Latur";
// console.log($city);

const myName = "Harsh Kale";
const favouriteLanguage = "JavaScript";
// const favouriteLanguage; //! Note: This Throws Error like, Uncaught SyntaxError: Missing initializer in const declaration 💀 
// myName = "Harsh Moreshwar Kale"; //! Note: This Throws Error because you cannot change the assignment of old const variable! 💀
console.log(myName);

{
    let $city = "Almala";
    $city = "Ausa";
    console.log($city);
}
console.log($city);

const arr = [12,3,4];
// const arr1 = [12,3,4,54,6]; //! Note: This Throws Error 💀
arr.push([12,3]);
console.log(arr);



console.groupEnd();