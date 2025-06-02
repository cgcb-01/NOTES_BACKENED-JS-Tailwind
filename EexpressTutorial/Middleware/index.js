import express from "express"
const app= express();
/*function userCredentials(req,res,next){
    console.log("username: (alex)");
    console.log("email: (alex21@gmail.com)");
    console.log("Age: (19)");
    next();
}*/
//We can define it here or in a seperate folder like middle ware and import it here.
import userCredentials from "./middleware/log.js";
/*
- Request
- Middleware
- Response
*/
//app.get("/",userCredentials,(req,res)=>{
    app.use(userCredentials) //or we can alos use app.use()
    app.get("/",(req,res)=>{
    res.send("<h1> Hello Admin</h1>");
});

app.listen(8000,()=>console.log("Server Up"));
