import express from "express";
const allStudents=(req,res)=>{
    res.send("All Students")
}
const newStudent=(req,res)=> 
{
    res.send("Create new user");
}
const updateStudent=(req,res)=> 
{
res.send("Update the User");
}
const deleteStudent=(req,res)=> 
{
res.send("Delete User");
}
export{allStudents,newStudent,updateStudent,deleteStudent}