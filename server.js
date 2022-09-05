'use strict';

const express = require('express');

const app = express();


app.get('/',(req, res)=>{
    res.send('Hello World');
})

app.post('/person',(req, res)=>{
    const {name ,age ,gender} = req.query;
    let parsedAge = parseInt(age)+5;
    res.send({name : name,
        age : `after 5 years your age will be ${parsedAge}`,
        gender : gender
    });
})


function start (port) {
    app.listen(port,()=>console.log(`Listing at ${port}`));
}


module.exports = {app, start};