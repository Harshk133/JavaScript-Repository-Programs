console.group("Loops in JavaScript!");
// ** For Loop, While Loop, Do-while Loop! **

// for loop
// for(let i = 0; i < 100; i++){ console.log(i); }


// while loop
// let j = 0;
// while(j < 10){
//     console.log(j+1);
//     j++;
// }

// do while loop
// let k = 0;
// do {
//     // if(k === 2){ break; }
//     if(k === 2){ k += 1; continue; }
//     console.log(k + 1);
//     k++;
// } while (k < 10);
// console.log("done!");

// forEach
let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach(elem => console.log(elem));
// Or
// console.log("...");
// arr.forEach(function(elem){
//     console.log(elem);
// })
// console.log(Object.keys(arr));
// arr.forEach(function(elem, i, arr){
//     console.log(elem, i, arr);
// })


let obj = {
    name: "Harsh Kale",
    age: 19,
    role: "Programmer"
}

for(let key in obj){
    console.log(`Keys are ${key}`);
    console.log(`${obj[key]}`);
}


console.groupEnd();