function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return `${firstName} ${lastName}`;
    };
}

const person1 = new Person("Andrew", "Nagel");
console.log(person1.getFullName());