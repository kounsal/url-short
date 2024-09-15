const express = require('express');
const {handleGenerateShortUrl, handleRedirect, handleStats,handledefault} = require('../controllers/urlController');
const router = express.Router();

router.post('/', handleGenerateShortUrl);

router.get('/stats/:shortid',handleStats);
// router.get('/', handledefault);

module.exports = router;    
