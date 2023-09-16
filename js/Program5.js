// 🔥👉 Type Conversion & Coercion
console.group("Type Conversion & Coercion");

// Type Coversion

// ** Converting into String! **
let myVar = 77;
myVar = String(myVar);
// console.log(myVar, (typeof myVar));

let booleanVar = true;
booleanVar = String(booleanVar);
// console.log(booleanVar, (typeof booleanVar));

let date = new Date();
date = String(new Date());
// console.log(date, (typeof date));

let arr = String([1,2,3,4,5,6,7]);
// console.log(arr.length, (typeof arr));

let i = 90;
// console.log((70).toString());
// console.log(i.toString());

// ** Converting into Number **
let myString = Number("77");
myString = Number("7h7");
// myString = Number(true); returns 1
myString = Number(false); 
myString = Number([1,2,3,4,5,6,7,8,9,0]); 
// console.log(myString, (typeof myString));

// let myNumber = parseInt("123");
let myNumber = parseFloat("123.123");
console.log(typeof(myNumber));
console.log(myNumber.toFixed(2));


// Type Coercion
// let operand1 = "5"; // To avoid this!(
let operand1 = Number("5"); // use Number() or parseInt())
let operand2 = 2;
console.log(operand1 + operand2);







console.groupEnd();