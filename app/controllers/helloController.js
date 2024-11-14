

exports.Hello1=(req,res)=>{
    res.status(200).json({status:"success",data:"Hello this is Get rest api"})
}

exports.Hello2=(req,res)=>{
    res.status(201).json({status:"success",data:"Hello this is Post rest api"})
}



