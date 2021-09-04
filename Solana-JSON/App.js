const express = require('express');
const mongoose = require('mongoose');
require("dotenv/config");

const Login = require('./models/login');

const app = express();

app.use(express.json())

app.post('/', async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.save();
        res.send(login);
    }
    catch (err) {
        res.send(err)
    }
})

mongoose.connect(process.env.DB_CONNECTION_STRING)

app.listen(3001);