const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
  let random_num = Math.floor(Math.random()*10)+1;
  res.json({random_number:random_num});
})

app.listen(PORT,()=>{
    console.log(`your port is running at ${PORT}`);
})





