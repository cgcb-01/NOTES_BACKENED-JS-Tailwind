import http from 'http';

const server=http.createServer((req,res)=>{console.log(req);
    res.write(<h1>Hello from Node.js server!</h1>)
    res.setHeader("Content-Type","Text/html");
    res.statusCode=404;
    res.statusMessage="BAD SERVER";
});
server.listen(8000,()=>console.log("server up"));

