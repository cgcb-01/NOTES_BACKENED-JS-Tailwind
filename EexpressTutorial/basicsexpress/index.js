//create a Folder
//npm init -y
//create Instance express
//Provide Port :8000
//Basic Route

import express from 'express';
//making instance of the express js
const app = express();
 //to listen to the server

//Basic Routing
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Express</h1>");
  });
//one slash means home route
//on hitting the 8000 port that text will be shown
//get: HTTP method
app.get('/about',(req,res)=>{
    res.send("<h1>About Page<h1>")
}) //host/about

app.get('/Contact',(req,res)=>{
    res.send("<h1>Contact Page<h1>")
})

//String Pattern Path
/*app.get("/ab?cd",(req,res)=>{
    res.send("If the user send (acd)/(abcd) then this page will come")
})*/ //Will give error for the new version of express and instead we have to use the regexp for mentioning different types of routing address

//REGEX
app.get(/x/,(req,res)=>{
    res.send("If the path includes the letter (x) it will work")
})
app.get(/^\/users\/[0-9]{4}$/,(req,res)=>{
    res.send("Works if the path has users/any four nos else not")
})

//PROVIDING CALL BACK FUNCTIONS, ARRAYS OF CALL BACK FUNCTION etc
app.get("/single-cgcb",(req,res)=>{
   console.log("First Callback Function")
})
//HTTP METHODS
//GET -> Retrieve Data
//Post -> Create/ Insert Data
//PUT-> Completely Update the Data
//Patch-> Partially Update The Data
//DELETE-> Delete data
//ALL-> Any HTTP request Method

app.listen(8000, () => {
  console.log("Server Up at http://localhost:8000");
});

// USING ARRAYS OF CALLBACK FUNCTIONS
const cb = express();
const cb1=(req,res,next)