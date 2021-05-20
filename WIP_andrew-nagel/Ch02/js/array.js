class Friend {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        }
}

const friends = [
    new Friend('Zeek', 20, 'turtlepower@gmail.com'),
    new Friend('Aaron', 45, 'shredder@gmail.com'),
    new Friend('Jebediah', 18, 'splinter@gmail.com')
];

console.log(friends);
friends.sort(function sortByName(one, two) {
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
friends.sort(function sortByAge(one, two) {
    if (two.age - one.age > 0) {
        return -1;
    }
    else if (two.age - one.age < 0) {
        return 1;
    }
    else {
        return 0;
    }
});
console.log(friends);

//if i didnt want to use a callback, can i create and reference a separate method?

friends.sort(sortByName);
console.log(friends);

function sortByName(one, two) {
    if (one.name < two.name) {
        return -1;
    }
    else if(one.name > two.name) {
        return 1;
    }
    else {
        return 0;
    }
}