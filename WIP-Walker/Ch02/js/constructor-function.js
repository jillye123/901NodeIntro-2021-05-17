let firstName = "William";
let lastName =  "Walker";


function Person(fname, lname){
    this.fname = fname;
    this.lname = lname;

}

Person.prototype.getFullName = function() {
    return `${this.fname} ${this.lname}`
}

let person1 = new Person(firstName, lastName);

console.log(person1.getFullName());
person1.fname = 'xxxxx';
console.log(person1.getFullName());