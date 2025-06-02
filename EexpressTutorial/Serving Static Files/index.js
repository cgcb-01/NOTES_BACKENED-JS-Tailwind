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

//WORKING OF IT:
/*Here the express router first serves the static files.
Means any static files if present will be processed first. 

Here so we mentioned the static_file directory and then we are sending the index.html file to the express server.

app.use is mentioned earlier to serve it first if any static files.

Instead of mentioning only directory if we had mentioned the path of index.htmlthen only index.html will be used.*/ 