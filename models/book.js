const mongoose = require('mongoose');

const bookschema=new mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
      author: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
     

    isbn: {
        type: String,
        required: true
    },
    publisheddate:{
        type:Date,
        required:true
    }
})
module.exports = mongoose.model("Book", bookschema);