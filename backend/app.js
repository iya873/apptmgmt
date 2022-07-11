// import express to create express app
const express = require('express');

// import appt router
const apptRouter = require('./routes/apptRouter')
// create a variable to hold express methods
const app = express();

// tell express app not to use nested data
app.use(express.urlencoded({
    extended: false,
}))

// add a body parser
app.use(express.json())

// send user to appts router
app.use('/appts', apptRouter)

module.exports = app