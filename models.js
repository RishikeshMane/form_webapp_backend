const mongoose = require('mongoose')
const nodeAPI = mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    RollNo:{
        type:Number,
        require:true
    },
    Question:{
        type:String,
        require:true
    }
    
})
module.exports = mongoose.model("new_nodeAPI",nodeAPI);