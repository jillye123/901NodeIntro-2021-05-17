const friendsArray = [
    {name: 'FirstFriend' ,age:19 ,email:"sampleEmail1@abc.com"},
    {name: 'secondFriend' ,age:20 ,email:"sampleEmail2@abc.com"},
    {name: 'Abcd' ,age:20 ,email:"sampleEmail3@abc.com"}
];

//.forEach()

for (let index = 0; index < friendsArray.length; index++) {
              // console.log(index);
              console.log(`${friendsArray[index].name} is ${friendsArray[index].age} and email is ${friendsArray[index].email}`);
              // console.log(pets.name + " is a " + pets[index].type);
           }