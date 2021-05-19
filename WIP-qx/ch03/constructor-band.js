const beatles = new Band('The Beatles', ['John', 'Paul', 'George', 'Ringo']);



function Band(name, members) {
    this.name = name;
    this.members = members;
}


Band.prototype.memberCount = function() {
    return this.members.length;
}