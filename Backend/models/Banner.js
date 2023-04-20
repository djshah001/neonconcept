const { default: mongoose } = require("mongoose");

const bannerSchema = new mongoose.Schema({
    topTitle: {
        type: "string",
        // required: true
    },
    title: {
        type: "string",
        // required: true
    },
    subTitle: {
        type: "string",
        // required: true,
    },
    bannerImg: {
        type: "string",
    }
})

const Banner = mongoose.model('banner',bannerSchema)
module.exports = Banner