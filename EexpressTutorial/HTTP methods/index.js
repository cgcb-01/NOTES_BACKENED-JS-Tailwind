import express from "express";
const app=express();
/*
//an ugly routing code
//GET: is used to retrieve all the data
app.get("/student",(req,res)=>{
    res.send("All Students");
})
//POST: is used to add or create a new data here student
app.post("/student",(req,res)=>{
    res.send("Add new Students");
})
//PUT: is used to update ann existing data
app.put("/student",(req,res)=>{
    res.send("Update Students");
})
//DELETE: is used to delete the data
app.delete("/student",(req,res)=>{
    res.send("Delete Students");
})
*/

//Refactoring the ugly code
//using route()
app.route("/student")
.get((req,res)=>{
    res.send("All Students");})
.post((req,res)=>{
    res.send("Add new Students");
})
.put((req,res)=>{
    res.send("Update Students");
})
.delete((req,res)=>{
    res.send("Delete Students");
})

app.listen(8000,()=>console.log("Server Up"));
