class friend {
        constructor(name, age, email){
            this.name = name;
            this.age = age;
            this.email = email;
        }
}

const friends = [
     new friend('Roberto', '50',  'snowball@gmail.com'),
     new friend('Darnetta',  '51',  'dmfortune@gmail.com'),
     new friend('Jessica',   '21',  'jealwalk@gmail.com'),
];

console.log(friends);



// Sorting the array in place by using the name value

friends.sort(function(one, two) {
    if (one.name < two.name) {
        return -1;
    }
    else if(one.name > two.name) {
        return 1;
    }
    else {
        return 0;
    }
 

});
console.log(friends);