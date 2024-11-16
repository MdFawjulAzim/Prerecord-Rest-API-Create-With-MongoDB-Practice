const express = require('express');
const helloController =require("../app/controllers/helloController.js")
const JWTPractice = require("../app/controllers/JWTPractice.js");
const studentController=require("../app/controllers/studentController.js");
const router = express.Router();

router.get('/hello1',helloController.Hello1);
router.post('/hello2',helloController.Hello2);

router.post('/InsertStudent',studentController.InsertStudent);
router.get('/ReadStudent',studentController.ReadStudent);
router.post('/UpdateStudent/:id',studentController.UpdateStudent);
router.get('/DeleteStudent/:id',studentController.DeleteStudent);

//Create JWT token
router.get('/CreateToken',JWTPractice.CreateToken);

//Decode JWT token
router.get('/DecodeToken',JWTPractice.DecodeToken);

module.exports = router;