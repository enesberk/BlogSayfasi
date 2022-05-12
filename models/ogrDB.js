const {Schema, model}= require('mongoose')

const schema = new Schema({
    ogrAdSoy:{
        type: String,
        required: true
    },
    ogrNum:{
        type: Number,
        required: true
    },
    ogrSinif:{
        type: String,
        required: true
    }
    
})