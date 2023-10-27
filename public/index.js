const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const direction = path.join(__dirname,"../src");

console.log(direction);
app.use(express.static(direction))

app.get("/",(req,res)=>{
    res.send("hk") 
})

app.listen(3000,()=>{  
    console.log(`listening at port ${port}`)
})