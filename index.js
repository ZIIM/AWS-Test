'use strict';
const express = require('express');
const app = express();
const port = 3004;
const cors = require('cors');

app.use(cors());

app.get("/", (req, res) =>{
    res.send("Hello world")
});

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});