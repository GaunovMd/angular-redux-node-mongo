const router = require('express').Router();
const Product = require('../models/Product');

router.post('/', async (req,res)=>{

    const newProduct = new Product({
        id: req.body.id,
        name: req.body.name,
    })

    try{
        await newProduct.save();
        res.send(newProduct)
    }
    catch(err){
        console.log(err);
    }
})

router.get('/', async(req,res)=>{
    try{
        const products = await Product.find();
        res.send(products);
    }
    catch(err){
        console.log(err);
    }
})

router.delete('/:id', async (req,res)=>{

    gotId = req.params.id;

    try{
        await Product.findOneAndDelete({id:gotId});
        res.send("");
    }
    catch(err){
        console.log(err);
    }
})



module.exports = router;