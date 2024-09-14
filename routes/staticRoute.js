const express = require("express");
const URL = require("../models/url");
const {handleSignUp, handleSignIn}= require('../controllers/usercontroller')
const{handleRedirect} = require('../controllers/urlController');
const router = express.Router();
router.get("/",(req,res)=>{
    res.json({msg:"hello"});
  });

router.get("/urlfind", async (req, res) => {
  if (!req.user) return res.json({msg:"LOGIN"});
  console.log(req.user);
  const allurls = await URL.find({createdBy: req.user._id});
  return res.json( {
    urls: allurls,
  });
});
router.get('/:shortid',handleRedirect);

router.post('/signup',handleSignUp);
router.post('/login',handleSignIn);


module.exports = router;