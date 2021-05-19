let friendsArray = [
    {Name: 'Sam' ,age:40 ,email:  'sam@sampleEmail.com'},
    {Name: 'Sara' ,age:15 ,email: 'Sara@yahoo.com'},
    {Name: 'Elana' ,age:18 ,email: 'Elana@gmail.com'}
];

for (let index = 0; index < friendsArray.length; index++) {
    //console.log(index);
    console.log(friendsArray[index].Name + " is " + friendsArray[index].age + " years old and his/hear email is " + friendsArray[index].email);
    
}

friendsArray.sort(function(one,two){

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
    
    console.log("**** Sorting by Name Below ****");
    for (let index = 0; index < friendsArray.length; index++) {
        //console.log(index);
        console.log(friendsArray[index].Name + " is " + friendsArray[index].age + " years old and his/hear email is " + friendsArray[index].email);
        
    }
    
    friendsArray.sort(function(one,two){

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

console.log("**** Sorting by Age Below ****");
for (let index = 0; index < friendsArray.length; index++) {
    //console.log(index);
    console.log(friendsArray[index].Name + " is " + friendsArray[index].age + " years old and his/hear email is " + friendsArray[index].email);
    
}

