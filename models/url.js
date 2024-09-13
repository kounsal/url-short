const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
    {
        shortID : {
            type: String,
            required: true,
            unique: true,
        },
        redirectUrl : {
            type: String,
            required: true,
        },
        vistHistory :[{timestamp:{type: Number}}]// default: Date.now, can be used to get the current timestamp 
    },{timestamps: true}
);
const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
