import express from 'express'
import {allStudents,newStudent,updateStudent,deleteStudent} from "../controller/student.js"
const router =express.Router(); //initialising a router as express.Router() .Router() because it is not the main express router but subrouters.
//We write only express() when we want to initialise only one main router.

router.get('/all',allStudents);
router.post('/create',newStudent);
router.put('/update',updateStudent);
router.delete('/delete',deleteStudent);
export default router;