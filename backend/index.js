const mongoose = require ('mongoose');
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const bodyParser = require('body-parser');
const port =5000;
const cors = require('cors');
const Product = require('./models/products');
const router = require('./routes/api/prdlist')

connectDB();
//console.log("hi")
app.use(express.json({extended: false}));
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));
app.get('/list',async(req,res)=>{
    const PAGE_SIZE = 10;
    const page  = parseInt(req.query.page ||"0");
   const total = await Product.countDocuments({});
    const lists = await Product.find({}).limit(PAGE_SIZE).skip(PAGE_SIZE*page);

  res.json({total, lists});
  // res.send("Hello");

})
app.use(router);



const db= mongoose.connection;
db.once('open', () => {
    app.listen(port,()=>console.log(`Server running on ${port}`));

})




