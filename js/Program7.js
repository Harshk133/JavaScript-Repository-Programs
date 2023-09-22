console.group("Arrays in JavaScript!");
let marks = [100, 20, 34, 70, 78];
const fruits = ["Orange", "Apple", "Pineapple", "Kivi"];
const mixed = ["this is a sentence.", 7, true, Symbol("harsh"), [1,2, 3]];
const dummyArr = [10.22, 11, 34];
const arr = new Array(23, 123, 3, "mango");

// console.log(marks);
// console.log(fruits);
// console.log(fruits[0]); //-> Orange
// console.log(mixed);
// console.log(arr);

// console.log(arr.length);
// console.log(Array.isArray(arr)); //-> true
// console.log(Array.isArray("Harsh Kale")); //-> false

// arr[0] = "Harsh Kale";
// let myName = arr[0];
// let myStyle = `color: orange; font-size: 17px`;
// console.log(`%cMy Name is: ${myName}`, myStyle);
// console.log(arr);


// let value = marks[0];
// let value = marks.indexOf(34);
// console.log(value);

// Array methods!
// marks.push(7);
// marks.unshift(1);
// marks.pop();
// marks.shift();
// marks.splice(1, 2);
// marks.reverse();
// let updatedArr = marks.concat(dummyArr);
marks = marks.concat(dummyArr);
console.log(marks);
// console.log(updatedArr);


let obj = {
    name: "harsh moreshwar kale",
    role: "programmer",
    isHacker: true,
    age: 17,
    marks: [100, 100, 100, 100],
    "space in keys": "this is nice!",
    set keyValue(val){
        this.isHacker = val;
    },
    get showNameANDAge(){
        return this.name, this.age;
    }
}

// Object.freeze(obj);

// obj["isHacker"] = false;
obj.keyValue = false;

console.log(obj);
console.log(obj["isHacker"]);
// console.log(obj.name);
console.log(obj.showNameANDAge);


console.groupEnd();