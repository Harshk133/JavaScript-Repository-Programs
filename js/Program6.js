console.group("JavaScript String Methods!");
// → String Methods!
const name = "Harsh";
const greeting = "Good Evening!";
// console.log(name, greeting);

let html;
/* You can do like this as the following ⬇️  */
html = `<h1>Hello, world programmer!</h1> 
<p>Harsh Kale</p>`;
html = '<h1>Hello, world programmer!</h1>' + 
'<p>Harsh Kale</p>';

html = html.concat(' at', ' the', ' end');
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);
// console.log(html[0]);
console.log(html.indexOf('world'));
console.log(html.lastIndexOf('>'));
console.log(html.charAt(3));
console.log(html.endsWith("end"));
console.log(html.includes("harsh"));
console.log(html.substring(/* including, excluding */ 1, 7));
console.log(html.slice(-7));
console.log(html.slice(0, 4));
// console.log(html.split(" "));
console.log(html.replace(" ", "_"));
console.log(html.replaceAll(" ", "_"));
// console.log("By split result is:", html.replaceAll(" ", "_").split("_", 5));

let programmer = "Harsh\'s Kale";
let hisHobby = "Programming";
let myHtml = `Info about someone: ${programmer} & his hobby is ${hisHobby}! 🔥`;

document.body.innerHTML = myHtml;

console.groupEnd();