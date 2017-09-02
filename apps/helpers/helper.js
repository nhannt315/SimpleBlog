var bcrypt = require("bcrypt");
var config = require("config");

function hashPassword(password) {
    var saltRounds = config.get("salt");

    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
}

function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    hashPassword: hashPassword,
    comparePassword: comparePassword
}