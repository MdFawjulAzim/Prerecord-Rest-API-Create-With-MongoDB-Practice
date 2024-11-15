const studentModel = require('../models/studentModel.js');
//CRUD

//c=Create
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


//r=Read

exports.ReadStudent = async (req, res) => {
    try {
        let query = {}; // You can modify the query here to filter students if needed
        let projection = "Name Roll Class Remarks"; // Fields to return

        // Fetching the data using await
        const result = await studentModel.find(query, projection);

        // Return the result with success status
        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (err) {
        // Error handling
        res.status(500).json({
            status: "fail",
            data: err.message
        });
    }
};

exports.UpdateStudent = async (req, res) => {
    let id = req.params.id;
    let QUERY = { _id: id };
    let reqBody = req.body;
    
    const data = await studentModel.updateOne(QUERY, reqBody);
    if (data) {
        return res.status(200).json({
            status: "success",
            data: data
        });
    }
    // This code is executed even after sending a response
    return res.status(404).json({
        status: "fail",
        message: "No student found or data is the same"
    }); 
}
