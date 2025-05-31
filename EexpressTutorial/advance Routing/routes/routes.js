import express from 'express'
const router =express.Router();
// Why express.ROUTER() and not express()?
// 
router.get('/all',(req,res)=>{
    res.send("All Students");
})
router.post('/create',(req,res)=>{
    res.send("Sign in  new Student");
})
router.put('/update',(req,res)=>{
    res.send("Update Student ID");
})
router.delete('/delete',(req,res)=>{
    res.send("Remove student from the database");
});

export default router;