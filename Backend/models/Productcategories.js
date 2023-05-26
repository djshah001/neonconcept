const { default: mongoose } = require("mongoose");

const productsCategorySchema = new mongoose.Schema({
    title: {
        type: "string",
        required: true
    },
    topTitle: {
        type: "string",
    },
    heading: {
        type: "string",
    },
    description: {
        type: "string",
    },
    active: { 
        type: Boolean, 
        required: true 
    }
})

const productsCategory = mongoose.model('productscategory', productsCategorySchema)
module.exports = productsCategory