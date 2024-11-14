const app = require('./app.js');
const dotenv = require('dotenv');

dotenv.config({Path:'./.env'});

app.listen(process.env.RUNNING_PORT,function(){
    console.log("this is from env"+ process.env.RUNNING_PORT);
})