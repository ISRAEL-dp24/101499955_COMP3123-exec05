const express = require('express');
const studentRouter = require('./routes/student');
const employeeRouter = require('./routes/employee');

const app = express();
const SERVER_PORT = process.env.PORT || 3000;

//Build in routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application Level Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} – ${new Date().toISOString()}`);
    next();
});



// Custom Routes
// const apiV1 = express.Router();
// const apiV2 = express.Router();
// apiV1.use('/student', studentRouter)
// apiV1.use('/employee', employeeRouter);

// apiV2.use('/student', studentRouter) 

// app.use('/api/v1', apiV1);
// app.use('/api/v2', apiV2);

app.use('/api/v1/student', studentRouter);
app.use('/api/v1/employee', employeeRouter);

//https://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

//http://localhost:3000/error
app.get('/error', (req, res) => {
    throw new Error('This is a forced error.');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error Handling Middleware:', err.message);
    res.status(500).send('Something broke!');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});