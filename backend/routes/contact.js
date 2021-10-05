const router = require('express').Router();
const Contact = require('../models/Contact')
const cors = require('cors');
router.use(cors());

//post 

router.post('/', async(req,res)=> {
    try{
        const form = await new Contact(req.body);
        const savedForm = form.save();
        res.status(200).json("Success")
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router