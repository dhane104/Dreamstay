const express = require("express");
const app=express();

// app.get("/getcookies",(req, res)=>{
//     res.cookie("greet","hello");
//     res.send("sent you some cookies");

// });

const users  = require("./routes/user.js");
app.get("/",(req, res) => {
    res.send("hi, i am root");

});


app.listen(3000, ()=>{
    console.log("server is listening to 3000 ");
});

