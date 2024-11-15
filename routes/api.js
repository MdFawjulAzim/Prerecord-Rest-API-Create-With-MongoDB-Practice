const express = require('express');
const helloController =require("../app/controllers/helloController.js")
const studentController=require("../app/controllers/studentController.js");
const router = express.Router();

router.get('/hello1',helloController.Hello1);
router.post('/hello2',helloController.Hello2);

router.post('/InsertStudent',studentController.InsertStudent);
router.get('/ReadStudent',studentController.ReadStudent);

module.exports = router;