const express = require("express");
const app=express();
const path=require("path")
const dbconnection =require("./config/dbconnection");
const Bodyparser=require("body-parser")
const port =3600;
app.use(express.json())
dbconnection()
app.use(Bodyparser.urlencoded({extended:false}))
app.get("/", (req, res)=>{ 
    console.log(req.params);
    res.sendFile(path.join(__dirname+"/index.html"))
});
app.post("/", (req, res)=>{
    console.log(req.body);
    res.json({
        message: "Form submitted successfully",
        data: req.body
    })
})
app.get("/shahwar/:username", (req, res)=>{ 
    console.log(req.params.username);
    res.send(`This is ${req.params.username}`);
    
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})