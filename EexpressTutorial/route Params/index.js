import express from "express";
const app = express()

//Route Parameters
// Route Params are dynamic seh=gmets in a url path that act as a placeholder for values
// They allow us to capture Values from the url like the IDs or te Usernames or other variables. 

app.get("/students/delete/:id",(req,res)=>{
    res.send(req.params.id);
});

//Accesing multiple parameters from the url through list
app.get("/product/:category/:id",(req,res)=>{
    const {category,id} = req.params;
    res.send(`Product Category ${category} & Product ID is ${id}`)
})

//Example 2
app.get("/Order/:date/:day/:category/:id",(req,res)=>{
    const {date,day,category,id} = req.params;
    console.log(req);
     res.send(`Product Category: ${category} & Product ID ${id} is being Ordered on: ${date} (${day})`);
})
app.listen(8000,()=>console.log("Server Up"));