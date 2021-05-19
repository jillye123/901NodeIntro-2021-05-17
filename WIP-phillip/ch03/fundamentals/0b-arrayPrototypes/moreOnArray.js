class Claim{
    constructor(ssn,firstName,lastName){
        this.ssn=ssn;
        this.first=firstName;
        this.last=lastName;
    }
}
const claims=[
    new Claim('1234','Joe','Smith'),
    new Claim('1235','Jack','James'),
    new Claim('1236','John','Park')
]
console.log(claims);
claims.sort(function(one,two){
    if(one.last<two.last){return -1;}
    else if(one.last>two.last){
        return 1;
    }else{
        return 0
    }
});
console.log(claims);