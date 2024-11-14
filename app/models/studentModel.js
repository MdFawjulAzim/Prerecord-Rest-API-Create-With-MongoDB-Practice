const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    Name: String,
    Role: String,
    Class: String,
    Remark: String
})

const studentModel = mongoose.model('students', DataSchema);
module.exports = studentModel;

