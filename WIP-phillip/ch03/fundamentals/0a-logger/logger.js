const privateInfo = '****';
module.exports.display = function (data) {
    console.log(data, privateInfo);
};
module.exports.getPrivateInfo = function () {
    return privateInfo;
}