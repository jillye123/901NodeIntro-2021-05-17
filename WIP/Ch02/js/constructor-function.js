function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let prevName = "";
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName} and prevName is ${prevName}`;
}

let person1 = new Person("Jill", "Ye");
console.log(person1.getFullName());

let person2 = new Person("Jill1", "Ye1");
console.log(person2.getFullName());