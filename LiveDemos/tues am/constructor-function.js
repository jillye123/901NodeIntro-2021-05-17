// define an array of 3 family object literals - with properties of name and age
// let family = [
//     { name: 'Anthony', age: 45 }, 
//     { name: 'Grafton', age: 22 },
//     { name: 'Sally', age: 67 },
// ];

// console.log('family :>> ', family);

// Constructor functions and this keyword
// Want to understand arrow functions better
function FamilyMember (name, age) {
    this.name = name;  //you must use the keyword this if you want to hold onto the data in memory
    this.age = age;
    console.log('name :>> ', name);
}

let aunt =  new FamilyMember("Judy", 79);
let mom =  new FamilyMember("Mary", 84);

let family = [aunt, mom];
console.log('family :>> ', family);

console.log('new Date().getFullYear() :>> ', new Date().getFullYear());

// comments in VS code with control + /
// move lines with alt +  up or down arrows

