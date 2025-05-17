import express from "express";
const app=express();

//User first needs to request for data to the server
//Then it will ask for credentials to validate if the person is a valid user or not
// Then only we are going to provide the data
import userCredentials from "./logs.js";
//Middleware use
app.get("/",userCredentials,(req,res)=>
{
    res.send("<h1>Hello Admin</h1>")
})
// or we can use
app.use(userCredentials);//no need to pass userCredentials all the time
app.get("/about",userCredentials,(req,res)=>
{
    res.send("<h1>About section</h1>")
})
app.listen(7000,()=>console.log("Server Up")) //after using the port we will get the data