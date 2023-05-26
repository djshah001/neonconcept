const { default: mongoose } = require("mongoose");

const cmsSchema = new mongoose.Schema({
    tagLine: {
        type: "string",
        required: true
    },
    description: {
        type: "string",
    },
})

const cmsmaster = mongoose.model('cmsmaster',cmsSchema)
module.exports = cmsmaster