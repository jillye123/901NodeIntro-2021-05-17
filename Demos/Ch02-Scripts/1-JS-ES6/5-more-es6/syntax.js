// spread operator
let a = [1, 2, 3];
let b = [...a, 4, 5];
console.log('b', b)

//property shorthand, when variable name is same as property in object
let c = 'c';
let d = 'd';

let e = { c, d }
//instead of  let e = {c:c, d:d}
console.log('e', e)


//methods of an object in ES5


{ // begin code block
    let someMethods = {
        foo() {
            console.log('this is foo')
        },
        bar() {
            console.log('this is bar')
        }
    }

    someMethods.foo();
}


//ES6 method notation in objects or classes

{ // begin code block
    let someMethods = {
        foo: () => {
            console.log('this is foo')
        },
        bar: () => {
            console.log('this is bar')
        }
    }

    someMethods.bar();
}

//ES6 Destructuring

{
    let a = 1;
    let b = 3;

    //SWAP - without needing temporary variable
    [a, b] = [b, a];
    console.log(a); // 3
    console.log(b); // 1

    const arr = [1, 2, 3];
    [arr[2], arr[1]] = [arr[1], arr[2]];
    console.log(arr); // [1,3,2]
}

//Object Destructuring

const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true




// Assigning to new variable names
// A property can be unpacked from an object and assigned to a variable with a different name than the object property.
{
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
}


// Here, for example, const {p: foo} = o takes from the object o the property named p and assigns it to a local variable named foo.

// Default values
// A variable can be assigned a default, in the case that the value unpacked from the object is undefined.

{
const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
}


//Classes and using getters
class Person {
    constructor(_id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }
}

let p = new Person(123);
console.log('person id is', p.id)  //calls the getter






const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      if (this.log.length === 0) {
        return undefined;
      }
      return this.log[this.log.length - 1];
    }
  };
  
  console.log(obj.latest);
  // expected output: "c"