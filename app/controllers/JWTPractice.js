let jwt = require('jsonwebtoken');


exports.CreateToken= (req,res)=>{

    let payload = {
        exp:Math.floor(Date.now()/1000)+(60*60),
        date:{Name:"Rabbil Hasan",City:"Dhaka",admin:true}
    }

    let Token = jwt.sign(payload,"SecretKey123");
    res.send(Token);
}

exports.DecodeToken= (req,res)=>{
    let Token = req.headers['token-key'];

    jwt.verify(Token,"SecretKey123",(err,decoded)=>{
        if(err){
            res.status(401).send({status:"Invalid Token",message:"Token is not valid"});
        }else{
            res.status(200).send({status:"success",data:decoded});
        }
    })
}

