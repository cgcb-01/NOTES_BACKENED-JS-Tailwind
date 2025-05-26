import http from "http";
import fs from "fs";

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(202,"OK",{"Content-Type":"html"});
        fs.readFile("./public/home.html",(error,data)=>{
            if(error) throw error;
            res.end(data);
        })
    }

     else if(req.url=="/about"){
        res.writeHead(202,"OK",{"Content-Type":"html"});
        fs.readFile("./public/about.html",(error,data)=>{
            if(error) throw error;
            res.end(data);
        })
    }

    else {
        res.writeHead(404,"BAD",{"Content-Type":"html"});
            res.end("<h1>404 Page Not Found<h1>");
        }
    
})
server.listen(8000,()=>console.log("Server Up!"))