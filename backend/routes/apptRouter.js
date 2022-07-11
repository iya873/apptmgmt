// import express to create routes
const express = require('express')

// import appt Controller
const apptController = require('../controller/apptController')

const apptRouter = express.Router();

apptRouter
    .route('/')
    .get(apptController.getAllAppts)
    .post(apptController.createAppt)

apptRouter
    .route('/:id')
    .get(apptController.getOneAppt)
    .put(apptController.updateAppt)
    .delete(apptController.deleteAppt)

module.exports = apptRouter;