import express from "express";
import{
    allStudents,newStudent,updateStudent,deleteStudent} from "./controllermaking.js";
    const router=express.Router();
    router.get("/all",allStudents);
    router.post("/post",newStudent);
    router.put("/put",updateStudent);
    router.get("/delete",deleteStudent);

    export default router;