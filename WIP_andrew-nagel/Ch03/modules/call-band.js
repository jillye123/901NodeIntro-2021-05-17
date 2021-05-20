const BandConstructor = require('./constructor-band.js');

const beatles = new BandConstructor('The Beatles', ['John', 'Paul', 'George', 'Ringo']);

console.log(`beatles member count`, beatles.memberCount());
console.log(`has Ringo?`, beatles.hasMember('Ringo'));
