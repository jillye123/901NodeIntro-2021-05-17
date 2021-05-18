let friendsArray = [
    {Name: 'Mike' ,age:55 ,email:  'mike@mike.com'},
    {Name: 'Cheryl' ,age:42 ,email: 'Cheryl@cheryl.com'},
    {Name: 'Autumn' ,age:33 ,email: 'Autumn@autumn.com'}
];

let compareNames = (a,b)=>{
    if(a.Name > b.Name){
        return 1;
    }

    if(a.Name < b.Name){
        return -1;
    }

    return 0;

}


for (let index = 0; index < friendsArray.length; index++) {              
    console.log(`  ${friendsArray[index].Name} is ${friendsArray[index].age} years old and his/her email is ${friendsArray[index].email} `);
 }
 console.log("******  Sorting by Name  Below *****");
 //let sortedByName  = compareNames(a,b)

function printFriendInfo(friend){
    console.log(`  ${friend.Name} is ${friend.age} years old and his/her email is ${friend.email} `);
}

friendsArray.sort((a,b) => {
    return compareNames(a,b)
})


friendsArray.forEach(element => {
    printFriendInfo(element);
});

console.log("*************  Sorting by Age  Below *****************");
friendsArray.sort(
    (a,b)=>{
    if(a.age > b.age){
        return 1;

    } 
    if(a.age < b.age){
        return -1;

    }
    
    
    return compareNames(a,b)
    

})

friendsArray.forEach(element => {
    printFriendInfo(element);
});
