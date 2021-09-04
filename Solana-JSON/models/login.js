const mongoose = require('mongoose')

const Login = new mongoose.Schema({
    username: String,
    password: String,
    pubkey: String,
})

module.exports = mongoose.model("login", Login);