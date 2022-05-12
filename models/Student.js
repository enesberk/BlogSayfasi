const {Schema, model}= require('mongoose')

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    no:{
        type: Number,
        required: true
    },
    className:{
        type: String,
        required: true
    }
    
})

module.exports = model('Student', schema)