
const express = require('express');
const app = express();

const PORT = 4005;
const HOSTNAME = 'localhost';

let counter = 0;

app.get('/',(req,res)=>{
    res.json({counter:counter});
})

app.get('/increment',(req,res)=>{
    counter++;
    res.json({counter:counter});
})

app.get('/decrement',(req,res)=>{
    counter--;
    res.json({counter:counter});
})

app.listen(PORT, ()=>{
    console.log(`server is running at ${HOSTNAME}:${PORT}`);

})