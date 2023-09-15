
// String -> "Harsh"
// Numbers -> true, false
// Null -> null
// Undefined -> undefined
// Symbol -> @, +. <>, /, ~, #, *, #

// Funciton: f(){}
// Array: []
// Dates: new Date()
// Object: {}



console.group("Data Types in JavaScript");

console.info("Primitive DataType!");
console.info("Reference DataType!");

// ** Primitive Datatypes **
// String
var myString = "Harsh Kale";
console.log("My String is:", myString);
console.log("The DataType is: " + (typeof myString));

// Number
var myMarks = 100;
console.log("My Marks is:", myMarks);
console.log("The DataType is: " + (typeof myMarks));

// Boolean
var isHacker = true;
console.log("isHacker is:", isHacker);
console.log("The DataType is: " + (typeof isHacker));

// Null
var myNullVar = null;
console.log("isHacker is:", myNullVar);
console.log("The DataType is: " + (typeof myNullVar));

// Undefined
var myUndefinedVar = undefined;
console.log("Undefined Variable Value is:", myUndefinedVar);
console.log("The DataType is: " + (typeof myUndefinedVar));


// ** Reference Datatypes **

// Array
var myArr = [1, 2, 3, 4, [5, 6, 7], "HarshKale", null, true, undefined, false];
console.log("Value of `myArr` is: ", myArr);
console.log("The DataType is: " + (typeof myArr));

// Object
var myObj = {
    name: "harsh kale",
    age: 18,
    field: "Computer Science",
    hobby: ["Coding", "Programming", "Reading"],
    isHacker: true,
    isTopper: true
}
console.log("Value of `myObj` is: ", myObj);
console.log("The DataType is: " + (typeof myObj));

// Date
var myDate = new Date();
console.log("Value of `myObj` is: ", myDate);
console.log("The DataType is: " + (typeof myDate));

// Function
function myFunction(name){
    alert(name);
}
console.log("Value of `myObj` is: ", myFunction("harsh"));
console.log("The DataType is: " + (typeof myFunction));


console.groupEnd();