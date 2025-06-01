import express from "express"
const allStudents = (req,res)=>res.send('All Students');
const newStudent=(req,res)=>res.send('Create new Student');
const updateStudent=(req,res)=>res.send('Update a Student')
const deleteStudent=(req,res)=>res.send('Delete a Student from the DB')
export {allStudents,newStudent,updateStudent,deleteStudent}