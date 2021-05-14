// Defining a class to be used to create claims
class Claim {
    constructor(ssn, firstName, lastName){
        this.ssn = ssn;
        this.first = firstName;
        this.last = lastName;
    }

}

// Creating an array of Claim objects

const claims = [
    new Claim('123456789', 'Joe','Smith'),
    new Claim('745345363', 'Jon','Jones'),
    new Claim('046323432', 'Abe','Baeuer')
];

console.log(claims);



// Sorting the array in place by using the name value

claims.sort(function(one, two) {
    if (one.last < two.last) {
        return -1;
    }
    else if(one.last > two.last) {
        return 1;
    }
    else {
        return 0;
    }

   

});

console.log(claims);


