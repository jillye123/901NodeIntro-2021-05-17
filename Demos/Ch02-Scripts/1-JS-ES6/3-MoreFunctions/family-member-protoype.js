function FamilyMember (name, age) {
    this.name = name;  //you must use the keyword this if you want to hold onto the data in memory
    this.age = age;

    // by having this function INSIDE of constructor function - it gets repeated
    // for every object instance created wih the keyword new
    // this.getBirthYear = function() {
    //     return new Date().getFullYear() - this.age;
    // }
}

// by creating on the FamilyMember.prototype - the function is only stored in memory once
FamilyMember.prototype.getBirthYear = function() {
    return new Date().getFullYear() - this.age;
}

FamilyMember.prototype.firstLetter = function() {
    return this.name[0];
}

let aunt =  new FamilyMember("Judy", 79); //using new created an object in memory
let mom =  new FamilyMember("Mary", 84);

let family = [aunt, mom];
console.log('family :>> ', family);

console.log('family[0].getBirthYear() :>> ', family[0].getBirthYear());

// comments in VS code with control + /
// move lines with alt +  up or down arrows

