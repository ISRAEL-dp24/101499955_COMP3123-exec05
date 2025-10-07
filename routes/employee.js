const express = require('express');
const employeeRouter = express.Router();

//Employee Router Level Middleware
employeeRouter.use((req, res, next) => {
    console.log('Employee Router Middleware');
    next();
})

employeeRouter.get('/', (req, res) => {
    res.send('<h1>Employee Home Page</h1>');
});

employeeRouter.get('/list' , (req, res) => {
    res.send('<h1>Employee List</h1>');
});

employeeRouter.post('/add' , (req, res) => {
    res.send('<h1>Add Employee</h1>');
});

employeeRouter.put('/update/:id', (req, res) => {
    const { id } = req.params;
    res.send(`<h1>Update Employee with ID: ${id}</h1>`);
});

employeeRouter.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    res.send(`<h1>Delete Employee with ID: ${id}</h1>`);
});

employeeRouter.get('/error', (req, res) => {
    throw new Error('This is a forced error in Employee Router');
});

// ROute Error Handling Middleware
employeeRouter.use((err, req, res, next) => {
    console.error('Error Handling Middleware:', err.message);
    res.status(500).send('Something broke from employee!');
});

module.exports = employeeRouter;