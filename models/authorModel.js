const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
     fname: {type: String, required: true, trim: true},
     lname: {type: String, required: true, trim: true}, 
     title: {type: string,required: true,enum: ["Mr", "Mrs", "Miss","Must be mr,mrs or miss, no ther values can be accepted, got {VALUE}" ],trim: true},
     email: {type: String, required: true, unique: true, trim: true},
     password: { type: String, required: true, trim: true, minlength: [8, 'Must be atleast 8 characters'], maxlength: [15, 'Must be atmost 15 characters'] },
     isDeleted:{type:Boolean,default:false},
     }
         , { timestamp: true });
module.exports = mongoose.model('author',authorSchema)
