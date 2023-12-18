const jwt=require("jsonwebtoken");

const auth=(req,res,next)=>{
const token=req.headers.authorization;
if(token){
    const decoded=jwt.verify(token,"remote");
    if(decoded){
        req.body.user=decoded.userID;
        //req.body.user=decoded.user;
        next()
    }
    else{
        res.send({"msg":"Please login"});
    }
}
else{
    res.send({"msg":"Please login"})
}

}

module.exports={
    auth
}