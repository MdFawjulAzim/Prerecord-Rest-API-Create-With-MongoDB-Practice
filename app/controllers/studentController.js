const studentModel = require('../models/studentModel.js');
//CRUD

//c=Create
exports.InsertStudent = async (req, res) => {
    const reqBody = req.body;
    try {
        // Using await to directly get the data from the create method
        let data = await studentModel.create(reqBody);
        
        // Success response
        return res.status(201).json({
            status: "success",
            data: data
        });
    } catch (err) {
        // Error handling if something goes wrong with the database operation
        return res.status(500).json({
            status: "failed",
            data: err
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

//u=Update
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

//d=Delete

exports.DeleteStudent = async (req, res) => {
    let id = req.params.id;
    let query = { _id: id };

    const data = await studentModel.deleteOne(query);
    if (data) {
        return res.status(200).json({
            status: "success",
            data: data
        });
    }
    // This code is executed even after sending a response
    return res.status(404).json({
        status: "fail",
        message: "No student found"
    }); 
}; 


