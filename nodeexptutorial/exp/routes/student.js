import express from "express";
const router = express.Router();

router.get('/all', (req, res) => {
    res.send("All Students");
});

router.post('/post', (req, res) => {
    res.send("Sign in New Student");
});

router.put('/put', (req, res) => {
    res.send("Update Student ID");
});

router.delete('/delete', (req, res) => {
    res.send("Remove Student from the Db");
});

export default router;
