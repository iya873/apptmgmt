// import mongoose in order to create a model
const mongoose = require('mongoose');

// before creating a model create a schema
const apptSchema = mongoose.Schema({
    name:  String,
    type:  String,
    date: Date,

})
// use schema to create a model
const Appts = mongoose.model('Appt', apptSchema)

module.exports = Appts;