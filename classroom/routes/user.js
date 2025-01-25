const express = require("express");
const router = erpress.router();

//users index route
router.appget("/users",(req, res)=>{
    res.send("GET for users");
});


//show index route
router.get("/users/:id",(req, res)=>{
    res.send("GET for show users");
});

//show index route
router.post("/users",(req, res)=>{
    res.send("post for users");
});

//show index route
router.delete("/users/:id",(req, res)=>{
    res.send("delete for users");
});

module.exports = router;