const express = require ('express');
const router = express.Router();

//loading the Product model

const Product = require('../../models/products');
const Cart= require('../../models/cart');
const Saveforlater = require('../../models/saveforlater');
const products = require('../../models/products');


//test routes with our @get api

router.get('/test', (req,res)=> res.send("Test msg"));


router.get('/prod',async(req,res)=>{
    



    let {page,limit} = req.query;
    if(!page) page= 1;
    if(!limit) limit = 10;
    const skip =(page-1)*10;

    Product.find().skip(skip).limit(limit)
    .then(products => res.json(products))
    .catch(err=>res.json({err:"No products found"}).status(404));


    


    
});


router.get('/cart',async(req,res)=>{
    
    Cart.find()
    .then(products => res.json(products))
    .catch(err=>res.json({err:"No products found"}).status(404));
 
});

router.get('/saveforlater',async(req,res)=>{
    
    Saveforlater.find()
    .then(products => res.json(products))
    .catch(err=>res.json({err:"No products found"}).status(404));
 
});

router.post('/cart',(req,res)=>{

    Cart.create(req.body)
    .then(Cartprds => res.json({msg:"Product added succesfully"}))
    .catch(err=>res.json({err:err}).status(400));




   
});



router.post('/saveforlater',(req,res)=>{

    Saveforlater.create(req.body)
    .then(Saveforlater => res.json({msg:"Product added succesfully"}))
    .catch(err=>res.json({err:"Unable to add product"}).status(400));
});




router.get('/:id',(req,res)=>{

    Product.findById(req.params.id)
    .then(products => res.json(products))
    .catch(err=>res.json({err:"No products found"}).status(404));
});



router.post('/',(req,res)=>{

    Product.create(req.body)
    .then(Product => res.json({msg:"Product added succesfully"}))
    .catch(err=>res.json({err:"No"}).status(400));
});



router.delete('/cart/:id',(req,res)=>{

    Cart.findByIdAndRemove(req.params.id,req.body)
    .then((Product) => res.json({msg:"Product deleted succesfully"}))
    .catch((err)=>res.json({err:"Unable to delete product"}).status(400));
});


router.delete('/save/:id',(req,res)=>{

    Saveforlater.findByIdAndRemove(req.params.id,req.body)
    .then((Product) => res.json({msg:"Product deleted succesfully"}))
    .catch((err)=>res.json({err:"Unable to delete product"}).status(400));
});



router.put('/cart:id',(req,res)=>{

    Cart.findByIdAndUpdate(req.params.id,req.body)

    .then(Product=>res.json(Product)).catch(err=>
        { console.log(err)
        res.status(404).json({err: 'No products found'})})

});


module.exports = router;



