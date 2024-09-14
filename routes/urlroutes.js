const express = require('express');
const {handleGenerateShortUrl, handleRedirect, handleStats} = require('../controllers/urlController');
const router = express.Router();

router.post('/url', handleGenerateShortUrl);
router.get('/:shortid',handleRedirect);
router.get('/stats/:shortid',handleStats);
router.get('/', (res,req)=>{res.json({msg : "HELLO"})});

module.exports = router;    
