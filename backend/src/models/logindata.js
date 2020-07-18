const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Productdb');
const Schema = mongoose.Schema;

var NewUserSchema=new Schema({
    
    username:String,
    password:String
    
});

var logindata = mongoose.model('',NewUserSchema);
module.exports=logindata;