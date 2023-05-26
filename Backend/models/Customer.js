const { default: mongoose } = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstName: {
        type: "string",
        required: true
    },
    lastName: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true,
        unique:true
    },
    contactNumber: {
        type: "number",
        required: true,
        unique:true
    },
    password: {
        type: "string",
        required: true
    },
    profilePic: {
        type: "string",
    }
})

const Customer = mongoose.model('customer',customerSchema)
module.exports = Customer