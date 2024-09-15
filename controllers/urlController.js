const shortid = require('shortid');
const Url = require('../models/url');

async function handleGenerateShortUrl(req, res) {
const body = req.body; 
  if(!body.url) {
    return res.status(400).json({ error: 'URL is required' });
  }
  const shortId = shortid(8);
  // const cid = req.user._id;
  // console.log(req.user._id);
  await Url.create({
    shortID: shortId,
    redirectUrl: body.url,
    createdBy :req.user._id,
    vistHistory: [], 
    
});
  res.json({ id : shortId , body: body.url });
};


async function handleRedirect(req, res) {
const shortId = req.params.shortid;
const entry = await Url.findOneAndUpdate({shortID: shortId}, {
    $push: {vistHistory: {timestamp: Date.now()}},
});
if (!entry) {
    return res.status(404).send('URL not found');
  }
  res.redirect(`http://${entry.redirectUrl}` );
  
};

async function handleStats(req, res) {
const shortId = req.params.shortid;
const entry = await Url.findOne({shortID: shortId});
if (!entry) {
    return res.status(404).send('URL not found');
  }
 res.json({
     visitCount: entry.vistHistory.length ,
     analatics: entry.vistHistory
    });
}
function handledefault(req,res){
  res.json({msg:"hello"});


}

module.exports = {
    handleGenerateShortUrl,
    handleRedirect,
    handleStats,
    handledefault
    };