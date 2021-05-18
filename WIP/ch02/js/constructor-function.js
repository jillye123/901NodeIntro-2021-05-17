function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
    /*
    this.getFullName = function () {
        return `${firstName} ${lastName}`
    }*/
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

let person1 = new Person("Jane", "Doe");
console.log(person1.getFullName());