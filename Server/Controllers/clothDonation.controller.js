const express = require('express');
const router = express.Router();

const Services = require('../Services/clothdonation.services');

router.post('/', async(req, res) =>{
    await Services.insertClothDetails(req.body);
    res.status(201).json({message: 'Created Successfully'});
})

module.exports = router;