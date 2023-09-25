const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    uname: String,
    organization: String,
    address: String,
    city: String,
    country: String,
});

module.exports = mongoose.model('User', userSchema)

