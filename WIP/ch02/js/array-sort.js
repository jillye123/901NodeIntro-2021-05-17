let friendsArray = [
    {Name: 'Sam' ,age:40 ,email:  'sam@sampleEmail.com'},
    {Name: 'Sara' ,age:15 ,email: 'Sara@yahoo.com'},
    {Name: 'Elana' ,age:18 ,email: 'Elana@gmail.com'}
];

friendsArray.forEach(element => {
    console.log(element);
});

//Sort by name


//Sort by Age
friendsArray.sort((firstItem, secondItem) => firstItem.age - secondItem.age);

console.log(friendsArray);