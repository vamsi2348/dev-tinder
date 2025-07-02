const adminAuth = (req,res,next) => {
    // const token = req.body?.token;
    const token = "xyz1";
    const isAuthorization = token === "xyz";
    if(!isAuthorization){
        res.status(401).send("Unauthorized request");
    }else{
        next();
    }

}

module.exports = {adminAuth};