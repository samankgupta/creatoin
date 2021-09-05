const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

require("dotenv/config");

const Creator = require('./models/creator');

const app = express();

app.use(cors())
app.use(express.json())

app.post('/creators', async (req, res) => {
    try {
        const creator = new Creator(req.body);
        await creator.save();
        res.send(creator);
    }
    catch (err) {
        res.send(err)
    }
})

mongoose.connect(process.env.DB_CONNECTION_STRING)

app.listen(3001);