const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Productdb');
const Schema = mongoose.Schema;

var NewProductSchema=new Schema({
    productId:Number,
    productName:String,
    productCode:String,
    releaseDate:String,
    description:String,
    price:Number,
    starRating:Number,
    imageUrl:String
});

var Productdata = mongoose.model('product',NewProductSchema);
module.exports=Productdata;