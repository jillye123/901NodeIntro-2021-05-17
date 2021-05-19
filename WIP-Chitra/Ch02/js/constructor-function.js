let fName = "Chitra";
let lName = "Ganaesan";

function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
//}

let person1 = new Person(fName,lName);
console.log(person1.getFullName()); 