const express = require('express');
const helloController =require("../app/controllers/helloController.js")
const JWTPractice = require("../app/controllers/JWTPractice.js");
const studentController=require("../app/controllers/studentController.js");
const TokenIssueController = require("../app/controllers/TokenIssueController.js");
const TokenVerifyMiddleware = require("../app/middleware/TokenVerifyMiddleware.js");
const router = express.Router();

router.get('/hello1',helloController.Hello1);
router.post('/hello2',helloController.Hello2);

//CRUD routes
router.post('/InsertStudent',TokenVerifyMiddleware,studentController.InsertStudent);
router.get('/ReadStudent',TokenVerifyMiddleware,studentController.ReadStudent);
router.post('/UpdateStudent/:id',TokenVerifyMiddleware,studentController.UpdateStudent);
router.get('/DeleteStudent/:id',TokenVerifyMiddleware,studentController.DeleteStudent);

//Apply JWT Auth
router.get('/TokenIssue',TokenIssueController.TokenIssue);


//Create & Decode JWT token Practice
router.get('/CreateToken',JWTPractice.CreateToken);
router.get('/DecodeToken',JWTPractice.DecodeToken);



module.exports = router;