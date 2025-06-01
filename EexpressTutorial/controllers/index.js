import express from "express";
import students from "../controllers/Routes/students.js";
const app = express();
app.use('/students',students);
app.listen(8000,()=>console.log("Server Up"));