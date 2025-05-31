import express from 'express'
const router =express.Router();
// Why express.ROUTER() and not express()?
// 
router.get('/all',(req,res)=>{
    res.send("All Teachers");
})
router.post('/create',(req,res)=>{
    res.send("Sign in  new teacher");
})
router.put('/update',(req,res)=>{
    res.send("Update teacher ID");
})
router.delete('/delete',(req,res)=>{
    res.send("Remove teacher from the database");
});

export default router;