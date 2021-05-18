let friendsArray = [
    {Name: 'Sam' ,age:40 ,email:  'sam@sampleEmail.com'},
    {Name: 'Sara' ,age:15 ,email: 'Sara@yahoo.com'},
    {Name: 'Elana' ,age:18 ,email: 'Elana@gmail.com'}
];

function displayFriends (array) {
    let output = `${array.Name} is ${array.age} years old and his/her email is ${array.email}`;
    console.log(output);
}

function loopFriends (array) {
    array.forEach(element => {
        //console.log(element);
        displayFriends(element);
    });
}
/*
friendsArray.forEach(element => {
    //console.log(element);
    displayFriends(element);
});
*/
loopFriends(friendsArray);

console.log("****** Sorting by Name below *******");
//Sort by name
friendsArray.sort(function (a, b) {
    if (a.Name < b.Name) { return -1; }
    if (a.Name > b.Name) { return 1; }
    return 0;
});

loopFriends(friendsArray);
//console.log(friendsArray);

console.log("****** Sorting by Age below *******");
//Sort by Age
friendsArray.sort((firstItem, secondItem) => firstItem.age - secondItem.age);

loopFriends(friendsArray);
//console.log(friendsArray);