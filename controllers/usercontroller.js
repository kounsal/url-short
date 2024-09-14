const User = require('../models/user');
const { v4 : uuidv4 } = require('uuid');
const { setUser } = require('../helper/auth');

async function handleSignUp(req,res) {
    const {name , email, password } = req.body;

    await User.create({
        name,
        email,
        password,
    });
 return res.status(201).json({msg:"user Created"});   
}

async function handleSignIn(req,res) {
    const {email, password } = req.body;

    const user =await User.findOne({email,password});
    if(!user){
        return res.status(400).json({msg:"Email or Password Incorrect"});
    }
    else 
    {
        const sessionId = uuidv4();
        setUser(sessionId,user);
        res.cookie("uid", sessionId);
        return res.status(200).json({msg:"Authenticated", uid : sessionId});   
    }
 }
module.exports = {
    handleSignUp,
    handleSignIn,
}