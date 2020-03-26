const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:{
        type: String,
      
    },
    name:{
        type: String,
       
    }
})

module.exports = mongoose.model('Product', productSchema);