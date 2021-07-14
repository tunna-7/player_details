const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    club: {
        type:String,
        required:true
    },
    DOB: {
        type:Date,
        required:true,
        default: Date.now
    }
})

module.exports = mongoose.model("Player",playerSchema);