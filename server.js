'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/',(req, res)=>{
    res.send('Hello World');
})

app.post('/person',(req, res)=>{
    const {age} = req.body;
    let parsedAge = parseInt(age)+5;
    console.log( typeof res)
    res.send(`${parsedAge}`);
})


function start (port) {
    app.listen(port,()=>console.log(`Listing at ${port}`));
}


module.exports = {app, start};