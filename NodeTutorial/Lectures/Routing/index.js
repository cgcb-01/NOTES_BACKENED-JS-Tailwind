import http from "http";
const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/"){
        res.writeHead(200,"OK",{"Content-type":"text/html"});
        //res.end("<h1>Home Section<h1>"); //can have only one tag
        res.end("<a href='/about'>Go to About Page</a>"); //It takes the page to /about the ul for about page
    }
    else if(req.url=="/about"){
         res.writeHead(200,"OK",{"Content-type":"text/html"});  // mentioning that it is ok and server code 
         res.end("<h1>About Section</h1>");
    }
    else{
        res.writeHead(404,"BAD",{"Content-type":"text/html"});  // mentioning 404 error code along with the message 
         res.end("<h1>404 page not found!<h1>"); //res.end should always be at the last if we write re.weritehead after re.end then it will provide an error next time we hit the url or for the next sub urls.
    }
});
server.listen(8000,()=>console.log("Server up!"));