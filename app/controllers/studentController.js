const studentModel = require('../models/studentModel.js');

exports.InsertStudent = async (req, res) => {
    const reqBody = req.body;  // Get the data from the request body

    try {
        // Await the result of the create method
        const data = await studentModel.create(reqBody);

        // Respond with success if the student is created
        res.status(201).json({
            status: "success",
            data: data
        });
    } catch (err) {
        // Catch and handle any error during student creation
        res.status(400).json({
            status: "fail",
            data: err.message  // Send error message as part of the response
        });
    }
};
