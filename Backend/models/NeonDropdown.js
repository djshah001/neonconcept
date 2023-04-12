const { default: mongoose } = require("mongoose");

const DropDownSchema = new mongoose.Schema({
    title: {
        type: "string",
        required: true
    },
    description: {
        type: "string",
        required: true
    },
    videoUrls:{
        type: "Array",
        required: true
    }
})

const neonDropDown = mongoose.model('neonSign',DropDownSchema)
module.exports = neonDropDown