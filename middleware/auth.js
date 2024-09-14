 const {getUser} = require('../helper/auth');

 async function restrictToLoggedInUserOnly(req,res,next){
    const userUid = req.cookies.uid;
    if(!userUid) return res.status(400).json({msg:"Login First"});
    const user = getUser(userUid);

    if(!user) return res.status(404).json({msg:"No User Found, Login First"});
    
    req.user = user;
    next();
 }
 async function authCheck(req,res,next){
    const userUid = req.cookies?.uid;

    const user = getUser(userUid);
  
    req.user = user;
    next();
  }


 module.exports = {
    restrictToLoggedInUserOnly,
    authCheck
 }