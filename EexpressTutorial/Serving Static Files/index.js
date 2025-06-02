//This allows us to link Pre built Html, css and Javascript files with express.js and serving static files and implementing routing to those files.

import express from "express";
import path from "path";

const app=express();

//TWO METHOD TO DO THE SAME THING
//METHOD 1: (res.sendFile())
console.log(process.cwd());//current working directory
app.get("/",(req,res)=>{
    res.sendFile(path.join(process.cwd(),"./EexpressTutorial/Serving Static Files/static_file/index.html"))
    //We joined in this way here the process.cwd gives the current directory which we already printed.
    //Now to add the path remaining we used path.join().
    //in res.send we just need to pass the path to the file
});

//METHOD 2:
app.use(express.static(path.join(process.cwd(),"./EexpressTutorial/Serving Static Files/static_file/index.html"))) // instead of writing res.sendFile() we can also use app.use() here we dont need to sendFile rather whenever the router will be called it use the html files in the static folder.
app.listen(8000,()=>console.log("Server up"));