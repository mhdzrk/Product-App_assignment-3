const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Productdb');
const Schema = mongoose.Schema;

var NewUserSchema=new Schema({
    name:String,
    email:String,
    username:String,
    password:String,
    phone:Number
    
});

var Userdata = mongoose.model('user',NewUserSchema);
module.exports=Userdata;