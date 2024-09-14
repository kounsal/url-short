const express = require('express');
const {handleSignUp, handleSignIn}= require('../controllers/usercontroller')

const router = express.Router();

router.post('/signup',handleSignUp);
router.post('/login',handleSignIn);

module.exports = router;    