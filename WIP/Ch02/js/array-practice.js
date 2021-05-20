let friendsArray = [
    {Name: 'Sam' ,age:40 ,email:  'sam@sampleEmail.com'},
    {Name: 'Sara' ,age:15 ,email: 'Sara@yahoo.com'},
    {Name: 'Elana' ,age:18 ,email: 'Elana@gmail.com'}
];

function printout () {
    friendsArray.forEach(e => {
        console.log(`${e.Name} is ${e.age} and his/her email is ${e.email}`);
    });
}

printout();
console.log(`********** Sorting by Name Below ***************`);

friendsArray.sort((a, b) => {
    return a.Name.localeCompare(b.Name);
});

printout();

friendsArray.sort((a, b) => {
     return a.age - b.age;
});

console.log(`********** Sorting by Age Below ***************`);
printout();
