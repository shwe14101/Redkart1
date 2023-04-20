const mongoose = require('mongoose');

SaveforlaterSchema = new mongoose.Schema({
   id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    keyword: {
        type: String,
        required: false
    }
    

});

module.exports = Saveforlater=mongoose.model("Saveforlater",SaveforlaterSchema);