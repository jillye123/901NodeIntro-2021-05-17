class Friend {
    constructor(age, email) {
        this.age = age;
        this.email = email;
    }
}

let friendsArray = [
    { name: 'Veronica', age: 14, email: 'veronica@gmail.com'},
    { name: 'Jane', age: 12, email: 'jane@gmail.com'},
    { name: 'Joe', age: 15, email: 'joe@gmail.com'},
    { name: 'Mary', age: 18, email: 'mary@gmail.com'}
]

console.log(friendsArray);

friendsArray.sort(function(one, two) {
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

console.log('sort by name - ', friendsArray);

friendsArray.sort((one, two) => {
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

console.log('sort by age - ', friendsArray);

