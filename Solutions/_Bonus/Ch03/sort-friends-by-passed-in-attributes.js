let friends = require('./array-friends-export-data.js');

listFriends('');

sortFriends('name');

listFriends('name');

sortFriends('age');

listFriends('age');

function sortFriends(attrib) {
    friends.sort(function(a, b) {
        if(a[attrib] < b[attrib]) {
            return -1;
        } else if(a[attrib] > b[attrib]) {
            return 1;
        } else {
            return 0;
        }
    });
};

function listFriends(attrib) {
    if(attrib == '') {
        console.log(`Friends as they appear in object:`);
    } else {
        console.log(`Friends sorted by ${attrib}:`);
    }
    
    friends.forEach(function(friend) {
        console.log(`${friend.name} is ${friend.age} years old and their email is ${friend.email}`);
    });

    console.log('****************************************');
};