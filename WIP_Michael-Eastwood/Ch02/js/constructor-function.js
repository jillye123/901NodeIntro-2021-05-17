let firstName = 'Michael';
let lastName = 'Eastwood';

function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

Person.prototype.getFullName = function() {
    return `${this.fname} ${this.lname}`
}

let person1 = new Person(firstName, lastName);
person1.fname = 'Michael';
console.log(person1.getFullName());