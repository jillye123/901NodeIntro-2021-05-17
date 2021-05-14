// define an array of 3 family object literals - with properties of name and age
let family = [
    { name: 'Anthony', age: 45 }, 
    { name: 'Grafton', age: 22 },
    { name: 'Sally', age: 67 },
];

//for-loop
//you can call the local variable anything you want: abc, element, etc
for (let index = 0; index < family.length; index++) {
    const abc = family[index];
    console.log(abc.name + " is a family member and is " + abc.age );
}

// print in the format of Name is a family member and is X years old
family.forEach(
    function (element)  {
        console.log(element.name + " is a family member and is " + element.age );
    }
)

family.forEach(element => {
    console.log(element.name + " is a family member and is " + element.age );
});

family.forEach(element => {
    console.log(element.name + " is a family member and is " + element.age );
});

