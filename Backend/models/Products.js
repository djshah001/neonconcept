const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: "string",
        required: true
    },
    description: {
        type: "string",
        required: true,
        // unique:true
    },
    imgurl: {
        type: "string",
        required: true,
        // unique:true
    },
    offerPrice: {
        type: "number",
        required: true
    },
    originalPrice: {
        type: "number",
        required: true
    }
})

const Product = mongoose.model('product',productSchema)
module.exports = Product