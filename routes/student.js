const express = require('express');
const studentRouter = express.Router();

//Student Router Level Middleware
studentRouter.use((req, res, next) => {
    console.log('Student Router Middleware');
    next();
})

studentRouter.get('/', (req, res) =>{
    res.send('<h1>Student Home Page</h1>');
});

studentRouter.get('/list' , (req, res) => {
    res.send('<h1>Student List</h1>');
});

studentRouter.post('/add' , (req, res) => {
    res.send('<h1>Add Student</h1>');
});

studentRouter.put('/update/:id', (req, res) => {
    const { id } = req.params;
    res.send(`<h1>Update Student with ID: ${id}</h1>`);
});

studentRouter.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    res.send(`<h1>Delete Student with ID: ${id}</h1>`);
});

studentRouter.get('/error', (req, res) => {
    throw new Error('This is a forced error in Student Router');
});

// ROute Error Handling Middleware
studentRouter.use((err, req, res, next) => {
    console.error('Error Handling Middleware:', err.message);
    res.status(500).send('Something broke from student!');
});

module.exports = studentRouter;