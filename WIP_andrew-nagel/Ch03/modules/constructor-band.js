function Band(name, members) {
    this.name = name;
    this.members = members;
}

Band.prototype.memberCount = function() {
    return this.members.length;
}

Band.prototype.hasMember = function(member) {
    return this.members.includes(member);
}

module.exports = Band;