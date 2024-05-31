const express = require('express');
const app = express();
const  PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello wrld")
})

app.listen(PORT, ()=>{
    console.log(`This server is running on ${PORT}`)
})