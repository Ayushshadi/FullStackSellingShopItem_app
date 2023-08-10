const express=require('express');
const Controller=require('../controllers/item');

const router=express.Router();

router.get('/add',Controller.homepage);

router.post('/add',Controller.add);

router.get('/load-data',Controller.sendAll);



router.put('/edit/:Id',Controller.edit);
// router.get('/edit-candy/:candyId',candyController.getEditCandy);

module.exports=router;