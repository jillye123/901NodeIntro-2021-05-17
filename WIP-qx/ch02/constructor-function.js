let firstName = 'Jasmine';
let lastName = 'Yee';

function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

Person.prototype.getFullName = function() {
    console.log("Inside function itself");    
    return `${this.fname} ${this.lname}`
}

let person1 = new Person(firstName, lastName);
//person1.fname = "xxxx";
console.log(person1.getFullName());

