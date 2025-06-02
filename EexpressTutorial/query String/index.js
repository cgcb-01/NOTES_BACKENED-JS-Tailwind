// A query string is thepart of the URL that contains data sent to the server typicaly used to pass parameters in a web requests.
// It comes aftre the (?) symbol in a url. seperated by & and key is seperated from value by =.
//EXAMPLE: https://example.com/search?query=shoes&sort=price_asc
// MOSTLY USED IN:
//Filtering or sorting results, Tracking Information and Pagination

import express from "express";
const app=express();

//Query String
app.get("/product",(req,res)=>{
    res.send(`Response Ok ${req.query.category}`);
});
//multiple data queries
app.get("pdt",(req,res)=>{
    const {category,id}=req.query;
    res.send(`Response Ok ${category} & product ID: ${id}`);
});

app.listen(8000,()=>console.log("Server Up"));