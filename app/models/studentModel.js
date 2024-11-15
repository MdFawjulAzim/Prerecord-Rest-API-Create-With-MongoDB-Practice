const mongoose = require('mongoose');

// const DataSchema = mongoose.Schema({
//     Name: String,
//     Roll: String,
//     Class: String,
//     Remark: String
// })

// type validation

/*
const DataSchema = mongoose.Schema({
    Name: {type:String},
    Roll: {type:Number},
    Class: {type:String},
},{versionKey:false});
*/

// default value And version key 

/*
const DataSchema = mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remark: {type:String,default: "no Remarks"}
},{versionKey:false});
*/


// Custom error message validation

/*
const DataSchema = mongoose.Schema({
    Name: {type:String},
    Roll: {
        type:Number,
        min:[6,'Min 6 & max 12 ,but supplied value is = {VALUE}'],
        max:[12,'Min 6 & max 12 ,but supplied value is = {VALUE}']
    },
    Class: {type:String},
},{versionKey:false});
*/


// custom validation

/*
const DataSchema = mongoose.Schema({
    Name: {type:String},
    Roll: {type:Number},
    Mobile:{
        type:String,
        validate:{
            validator: function(value) {
                if(value.length == 11){
                    return true;
                }
                return false;
            },
            message:`Invalid Mobile Number 11 digit`
        }
    },
    Class: {type:String},
},{versionKey:false});
*/

// custom validation function Regex 
const DataSchema = mongoose.Schema({
    Name: {type:String},
    Roll: {type:Number},
    Mobile:{
        type:String,
        validate:{
            validator: function(value) {
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
            },
            message:props => `${props.value} is not a valid bangladeshi phone number!`
        }
    },
    Class: {type:String},
},{versionKey:false});

 




const studentModel = mongoose.model('students', DataSchema);
module.exports = studentModel; 

