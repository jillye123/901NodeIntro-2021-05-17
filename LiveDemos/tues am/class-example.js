
//Class is an ES6 alternative to constructor functions
//IE11 does not support this directly - can write code this way, but need to use a transpiler
//Babel or Webpack
//Node understands this ES6 construct

class FamilyMember {
    constructor(name, age) {
        this.name = name;  //you must use the keyword this if you want to hold onto the data in memory
        this.age = age;
    }

    //in classes - the functions are NOT repeated for every instance
    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }

    firstLetter() {
        return this.name[0];
    }
}

let aunt = new FamilyMember("Judy", 79); //using new created an object in memory
let mom = new FamilyMember("Mary", 84);

let family = [aunt, mom];
console.log('family :>> ', family);

console.log('family[0].getBirthYear() :>> ', family[0].getBirthYear());

// comments in VS code with control + /
// move lines with alt +  up or down arrows

