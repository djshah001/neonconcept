const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    ProductCategoryId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref:"productscategory",
        required: true 
    },
    ProductCategory: { 
        type: String,
        required: true 
    },
    title: {
        type: "string",
        required: true
    },
    description: {
        type: "string",
        required: true,
    },
    smalldescription: {
        type: "string",
    },
    productImgUrl: {
        type: "string",
        required: true,
    },
    active: {
        type: Boolean, 
        required: true 
    },
    readyToBuy: {
        type: Boolean, 
        required: true 
    },
    offerPrice: {
        type: "string",
      //  required: true 
    },
    originalPrice: {
        type: "string",
      //  required: true 
    }
})

const Product = mongoose.model('product', productSchema)
module.exports = Product