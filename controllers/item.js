const path=require('path');
const Record=require('../models/product.js');
const rootDir=require('../util/path.js');

exports.homepage=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','index.html'));

}

exports.add=async (req,res,next)=>{
    const name=req.body.itemname;
    const description=req.body.description;
    const price=req.body.price;
    const quantity=req.body.quantity;
    try{

        
        let result= await Record.create({name:name,description:description,price:price,quantity:quantity})
        
             console.log('item added',result);
             res.status(200).json({"newitem":result});
    }
    catch(err){
        console.log(err);
    }
}

exports.sendAll=async (req,res,next)=>{
    try{

        let items = await Record.findAll()
             res.status(201).json({allData:items});
    }
    catch(err){
        console.log(err,'Got some error')
        res.status(500).json({error:err});
       
    }
}






exports.edit= async (req,res,next)=>{
    const Id=req.params.Id;
    const updatedName=req.body.itemname;
    
    const updatedDescription=req.body.description;
    const updatedPrice=req.body.price;
    const updatedQuantity=req.body.quantity;
try{

    let item = await Record.findByPk(Id)
         item.itemname=updatedName;
         item.description=updatedDescription;
         item.price=updatedPrice;
         item.quantity= updatedQuantity;
          let result= await  item.save();
             res.send();
         
}
    catch(err){
        console.log(err);
    }
}