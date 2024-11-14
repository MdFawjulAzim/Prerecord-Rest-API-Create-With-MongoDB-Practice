const express = require('express');
const helloController =require("../app/controllers/helloController.js")
const router = express.Router();

router.get('/hello1',helloController.Hello1);
router.post('/hello2',helloController.Hello2);

module.exports = router;