const express = require('express');
const jwt = require('jsonwebtoken')
const cors = require('cors');
const productdata=require('./src/models/productdata');
const userData=require('./src/models/userdata');
const loginData=require('./src/models/logindata')
var bodyparser = require('body-parser');
const { urlencoded } = require('body-parser');
const app = new express();
productRoute=require('./src/Routes/productsRoute')

app.use(cors());
app.use(bodyparser.json());
app.use(urlencoded({extended:true}));
app.use('/products',productRoute);



app.post('/add', function(req,res){
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    console.log(req.body);
    let item = req.body;
    product=productdata(item);
    product.save()
    res.send("successfully added new product");
})
app.post('/signup',function(req,res){
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    console.log(req.body);
    let item = req.body;
    users=userData(item);
    users.save((error,user)=>{
        if(error){
            console.log(error)
        }else{
            let payload={subject:user._id}
            let token =jwt.sign(payload,'secretKey')
            res.status(200).send({token})
        }
    });
    
})
app.post('/login',function(req,res){
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    console.log(req.body);
    let item = req.body;
    userData.findOne({username:item.username},(error,user)=>{
        if (error){
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send('invalid username')
            }
            else
            if(user.password!==item.password){
                res.status(401).send("invalid password")
            }else{
                let payload={subject:user._id}
                let token =jwt.sign(payload,'secretKey')
                res.status(200).send({token})
            }

        } 
            

    })
    
    
})


app.listen(4000);

