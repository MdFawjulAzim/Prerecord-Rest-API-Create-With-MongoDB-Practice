const jwt = require('jsonwebtoken');

exports.TokenIssue= (req,res)=>{

    let payload = {
        exp:Math.floor(Date.now()/1000)+(60*60),
        date:{Name:"Rabbil Hasan",City:"Dhaka",admin:true}
    }

    let Token = jwt.sign(payload,"SecretKey123");
    res.send(Token);
}