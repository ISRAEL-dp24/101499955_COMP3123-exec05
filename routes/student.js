const express = require('express');
const studentRouter = express.Router();

studentRouter.get('/', (req, res) =>{
    res.send('<h1>Student Home Page</h1>');
});

studentRouter.get('/list' , (req, res) => {
    res.send('<h1>Student List</h1>');
});

studentRouter.post('/add' , (req, res) => {
    res.send('<h1>Add Student</h1>');
});

module.exports = studentRouter;