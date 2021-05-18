let fname = "Binh";
let lname = "Rigosi";

function Person (firstName, lastName) {
    this.fname = firstName;
    this.lname = lastName;
}

Person.prototype.getFullName = function() {
    return `${this.fname} ${this.lname}`;
}

let person1 = new Person(fname, lname);


console.log(person1.getFullName());