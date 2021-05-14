// define an array of 3 family object literals - with properties of name and age
let family = [
    { name: 'Anthony', age: 45 }, 
    { name: 'Sally', age: 67 },
    { name: 'Grafton', age: 22 },
];


//filter will return a NEW array based on your logic that returns true 
let newArray = family.filter((value)=>{
    let age = value.age;
    if (age > 30) {
        return true;
    }
    else {
        return false;
    }
})

console.log('family :>> ', family);
console.log('newArray :>> ', newArray);

let stringArray = family.map((element)=>{
   // return element.name + " is a family member and is " + element.age ;
   return `${element.name} is a family member and is ${element.age}` ;
})

console.log('stringArray :>> ', stringArray);
stringArray.sort()
console.log('AFTER SORT stringArray :>> ', stringArray);

//alpha sort by name, changing the array

family.sort(function(a,b){
    if (a.name < b.name) {
        return 1;
    }
    else if (a.name > b.name) {
        return -100000;
    }
    return 0;
});
console.log('family sorted by name :>> ', family);

//sort by age
family.sort(function(a,b){
    
    return a.age - b.age;
});
console.log('family sorted by age :>> ', family);