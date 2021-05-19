let friendsArray = [
    {Name: 'Sam' ,age:40 ,email:  'sam@sampleEmail.com'},
    {Name: 'Sara' ,age:15 ,email: 'Sara@yahoo.com'},
    {Name: 'Elana' ,age:18 ,email: 'Elana@gmail.com'}
];

//    console.log(friendsArray);

console.log("************** Before Sorting *************** ");

friendsArray.forEach(
    function (element)  {
        console.log(`${element.Name} is ${element.age} years old and his/her email is ${element.email}` );
    }
)

    friendsArray.sort(function(one, two) {
        if (one.Name < two.Name) {
            return -1;
        }
        else if(one.Name > two.Name) {
            return 1;
        }
        else {
            return 0;
        }
    
    });
  //  console.log(friendsArray); 

 console.log("************** Sorting by Name***************" );

  
friendsArray.forEach(
    function (element)  {
        console.log(`${element.Name} is ${element.age} years old and his/her email is ${element.email}` );
    }
)
    friendsArray.sort(function(one, two) {
        if (one.age < two.age) {
            return -1;
        }
        else if(one.age > two.age) {
            return 1;
        }
        else {
            return 0;
        }
    
    });


  //  console.log(friendsArray);

console.log("************** Sorting by age ***************");
friendsArray.forEach(
    function (element)  {
        console.log(`${element.Name} is ${element.age} years old and his/her email is ${element.email}` );
    }
)