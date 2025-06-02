//This allows us to link Pre built Html, css and Javascript files with express.js and serving static files and implementing routing to those files.

import express from "express";
import path from "path";

const app=express();

app.use(express.static("./EexpressTutorial/Serving Static Files/static_file")); //it is used to mention the directory of the static files
console.log(process.cwd());//current working
app.get("/",(req,res)=>{
    res.sendFile(path.join(process.cwd(),"./static_file/index.html")) //process.cwd is used to mention the currect directory
});
app.listen(8000,()=>console.log("Server up"));