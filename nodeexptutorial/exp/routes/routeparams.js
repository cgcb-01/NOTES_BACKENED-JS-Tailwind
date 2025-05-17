import express from "express";
const app=express();

//Route Params
app.get("/students/delete/:id",(req,res)=>{
    res.send(req.params.id) // By this way we can retrieve data from the web platform
})
//Using destructuring
app.get("/ecom/products/:category/:model",(req,res)=>{
    const{category,model}=req.params; //use the parameter to retrieve inside the curly braces
    res.send(`${category} ${model} pro Max`) 
})

//Using it to retrieve multiple data
app.get("/product/order/:day/:month/:year",(req,res)=>{
    const {day,month,year}=req.params;
    res.send(`Product was Ordered on:${day}/${month}/${year}`)
})

//APP>PARAMS
app.param("id",(req,res,next,id)=>{
    console.log(`id:${id}`)
    next();
})
app.get("/user/:id",(req,res)=>{
    console.log("This is User ID Path");
    res.send("Response Ok")
})
app.listen(8000,()=>console.log("Server Up!"))