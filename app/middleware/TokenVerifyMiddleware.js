const jwt = require("jsonwebtoken")

module.exports = (req,res,next) => {
        let Token = req.headers['token-key'];
    
        jwt.verify(Token,"SecretKey123",(err,decoded)=>{
            if(err){
                res.status(401).send({status:"Invalid Token",message:"Token is not valid"});
            }else{
                next();
            }
        })
}