'use strict';
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3004;
const cors = require('cors');


app.use(cors());

app.get("/", (req, res) =>{
    res.send("Hello world")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});