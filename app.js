const express =require('express');
const router =require("./routes/api.js")
const app = new express();

//security middleware Import
const rateLimit =require('express-rate-limit')
const helmet =require('helmet')
const xss =require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')

const mongoose = require('mongoose')

//security middleware Implementation
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(hpp());


//Request Rate Limit
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 100
})

app.use(limiter);

//Mongodb database connection

let URI = "mongodb://localhost:27017/CroftShop";
let options = { user: '', pass: '' };

mongoose.connect(URI, options)
	.then(() => {
		console.log("Connection successful");
	})
	.catch((error) => {
		console.error("Connection error:", error);
	});


app.use("/api/v1",router);


//undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",message: "Page not found"})
})
module.exports =app;