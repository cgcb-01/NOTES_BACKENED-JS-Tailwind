import express from "express";
const app=express();

//Basic Routing
//HTTP methods
//1.GET method👉 Retrieve Data
//2.POST method 👉 Create or Insert data
//3.PUT method 👉 Completely Update Data
//4.PATCH method 👉 Partially Update data
//5.DELETE 👉 Delete data
//ALL method 👉 Any HTTP request Method

//Here in this GET method we are retrieving data 
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home 🏡</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1> About ✌️</h1>")
})

//String Pattern Pattern
/*app.get("/ab?cd",(req,res)=>{
    res.send("<h1>Will only work if either b or c or both bc is there in the url</h1>")
})*/ //Not Allowed in newer version of Express js

//The Above one can be implemented by regex
//regex- we can have varoius regular expressions in the url
//if the url has any of the following pattern then that page will be shown

//REGEX
app.get(/x/,(req,res)=>{
  res.send("<h1>Will only work if x is there in the url</h1>")
});

app.get(/^\/users\/[0-9]{4}$/,(req,res)=>{
   res.send("<h1>Will only work if users and / 4 nos after users is there in the url</h1>") 
})

//NESTED ROUTING
app.get("/products/product/product-details",(req,res)=>{
   res.send("<h1>Will only work if the url is: /products/product/product-details</h1>") 
})

app.listen(8000,()=>console.log("Server Up"));