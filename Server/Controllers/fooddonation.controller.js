const express = require('express');
const router = express.Router();
const { verifyUser } = require('../middleware');


const Services = require('../Services/fooddonation.services');

router.post('/', async(req, res) =>{
    await Services.insertFoodDetails(req.body);
    res.status(201).json({message: 'Created Successfully'});
})

module.exports = router;