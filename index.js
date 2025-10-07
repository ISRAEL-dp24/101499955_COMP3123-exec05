const express = require('express');
const studentRouter = require('./routes/student');
const employeeRouter = require('./routes/employee');

const app = express();
const SERVER_PORT = process.env.PORT || 3000;

//Build in routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Custom Routes
app.use('api/v1/student', studentRouter);
app.use('api/v1/employee', employeeRouter);

//https://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});