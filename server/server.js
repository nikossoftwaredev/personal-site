const express = require('express')
const path = require('path');
const app = express();

const server = app.listen(3000)

//app.use(express.static(path.resolve(__dirname, './Projects/Dino.js')));
//Serves a sketch of p5 in the client


app.use('/projects/dino', express.static(path.resolve(__dirname, './Projects/Dino.js')));