// import appt model
const Appts = require('../model/Appts')



exports.getAllAppts = async (req, res) => {
    try {
        // retrieve all upcoming appointments
        const appts = await Appts.find();
        // send a response 
        res.status(200).json({
            state: 'success',
            result: appts.length,
            data: {
                appts,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            data: {
                error: error.message
            },
        });
    }
};

exports.createAppt = async (req, res) => {
    try {
        // create a new appt
        const newAppt = await Appts.create(req.body);
        // send a response 
        res.status(201).json({
            status: 'success',
            data: {
                newAppt,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            error: error.message,
        })
    }
}

exports.getOneAppt = async (req, res) => {
    try {

        // retrieve a single appt
        const appt = await Appts.findById(req.params.id);
        // send a response 
        res.status(200).json({
            status: 'success',
            data: {
                appt
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            error: error.message,
        });
    }
};

exports.updateAppt = async (req, res) => {
    try {
        // get a single appt
        const updateAppt = await Appts.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        // send a response 
        res.status(200).json({
            status: 'success',
            data: {
                updateAppt,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            error: error.message,
        });
    }
};

exports.deleteAppt = async (req, res) => {
    try {
        // find a single appt
        await Appts.findByIdAndDelete(req.params.id);
        // send a response
        res.status(200).json({
            status: 'success',
            data: {},
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            error: error.message,
        });
    }
};




