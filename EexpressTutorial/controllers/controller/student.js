import express from "express"
// here we are defining all what we have to send as res.send when the router works.
//This is why we have defined another file as controller
const allStudents = (req,res)=>res.send('All Students');
const newStudent=(req,res)=>res.send('Create new Student');
const updateStudent=(req,res)=>res.send('Update a Student')
const deleteStudent=(req,res)=>res.send('Delete a Student from the DB')
export {allStudents,newStudent,updateStudent,deleteStudent}