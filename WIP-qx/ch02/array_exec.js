
  let friendsArray = [
    {Name: 'Sam' ,age:40 ,email:  'sam@sampleEmail.com'},
    {Name: 'Mara' ,age:15 ,email: 'Sara@yahoo.com'},
    {Name: 'Elana' ,age:18 ,email: 'Elana@gmail.com'}
];


console.log(friendsArray);
console.log(friendsArray[0]);



friendsArray.sort((a, b) => {
    let fa = a.Name,
        fb = b.Name;

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});



console.log(friendsArray);