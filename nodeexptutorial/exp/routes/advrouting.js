import express from "express";
import ss from "./student.js"
const app=express();
app.use('/students',ss)
app.listen(5000,()=>console.log("Server up"))