import express from "express";
const app=express();
//ugly code
//USE OF HTTPS METHODS
/*app.get("/student",(req,res)=>{
    res.send("All students")
})
app.post("/student",(req,res)=>{
    res.send("Add new Student")
})
app.put("/student",(req,res)=>{
    res.send("Update Student")
})
app.post("/student",(req,res)=>{
    res.send("Delete Student")
})*/

//REFACTORING
//Use of app.route to avoid repeatition 
app.route("/student")
    .get((req,res)=>res.sent("All Student"))
    .post((res,req)=>res.sent("Add new Student"))
    .put((res,req)=>res.sent("Update Student"))
    .post((res,req)=>res.sent("Delete Student"))
app.listen(3000,()=>console.log("Server Up!"))

//For advanced Routing Steps:
//1.Create routes folder and put your routes in a seperate file.
//2. Create Instance of express.Router()
//3. Instead of app.method change that to Router.method
//4. Export router
//5. Import router
//6. Use the (app.use) built-in middleware and provide your routes.