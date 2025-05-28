import express from "express";
const app=express();

app.get("/double-cb-noNext", (req,res)=>{
    console.log("First Callback");
    res.send("<h1>First Callback</h1>")// from here it does not go to the next callback function
}, (req,res)=>{
    res.send("<h1>Second Callback</h1>")
    console.log("Second callback.")
});  //here even we have two callbacks of arrow function (req,res) the control is not passed from the first callback function to the second callback function.  

//SOLN: To solve the issue we use next() this helps to pass the control the successive callback function.

app.get("/double-cb", (req,res,next)=>{
    console.log("First Callback"); //printed in the terminal

    //res.send("<h1>First Callback</h1>")// from here it does not go to the next callback function even if next is there as RES.SEND() ENDS THE RESPONSE
    //SO WE CANNOT WRITE THIS LINE
    next();
}, (req,res)=>{
    res.send("<h1>Second Callback</h1>"); //is shown in the website response is being sent
    console.log("Second callback.")
}); 

//ARRAY OF CALLBACK FUNCTION
const cb1=(req,res,next)=>{
    console.log("First Callback");
    next();
}
const cb2=(req,res,next)=>{
    console.log("Second Callback");
    next();
}
const cb3=(req,res)=>{
    res.send("<h1>Array Of Callback Functions</h1>")
    console.log("Third Callback")
}
app.get("/array-cgcb",[cb1,cb2,cb3]);

//CRAZYNESS OF CALLBACK FUNCTION
app.get("/crazyness",[cb1,cb2],(req,res,next)=>{ //beside mentioning array of cbs we can also define cb functions here
    console.log("Third Callback");
    next()
},(req,res)=>{ //No netx is needed at the end
    console.log("Fourth Callback");
    res.send("<h1>Crazyness</h1>"); //res.send can only be given at the end
})

app.listen(8000,()=>console.log("Server Up"));