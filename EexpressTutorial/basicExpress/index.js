import express from "express";
const app=express();

//Basic Routing
//HTTP methods
//1.GET method👉 Retrieve Data
//2.POST method 👉 Create or Insert data
//3.PUT method 👉 Completely Update Data
//4.PATCH method 👉 Partially Update data
//5.DELETE 👉 Delete data
//ALL method 👉 Any HTTP request Method

//Here in this GET method we are retrieving data 
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home 🏡</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1> About ✌️</h1>")
})

//String Pattern Pattern
app.get("/ab?cd",(req,res)=>{
    res.send("<h1>Will only work if either b or c or both bc is there in the url</h1>")
})
app.listen(8000,()=>console.log("Server Up"));n