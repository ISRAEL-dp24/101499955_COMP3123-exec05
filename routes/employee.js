const express = require('express');
const employeeRouter = express.Router();

employeeRouter.get('/', (req, res) => {
    res.send('<h1>Employee Home Page</h1>');
});

employeeRouter.get('/list', (req, res) => {
    res.send('<h1>Employee List</h1>');
});

employeeRouter.post('/add', (req, res) => {
    res.send('<h1>Add Employee</h1>');
});

module.exports = employeeRouter;