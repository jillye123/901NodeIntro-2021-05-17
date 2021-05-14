const privateInfo = '****';

//anything not in exports is PRIVATE

// module.exports = {
//     display: function(data) {
//     console.log(data, privateInfo);
//     },

//     getPrivateInfo: function() {
//         return privateInfo;
//     }
// }

module.exports.display = function (data) {
    console.log(data, privateInfo);
};

module.exports.getPrivateInfo = function (data) {
    return privateInfo;
};