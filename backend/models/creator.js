const mongoose = require('mongoose')

const Creator = new mongoose.Schema({
    username: String,
    coinvalue: Number,
})

module.exports = mongoose.model("creator", Creator);