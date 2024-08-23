const express = require('express');
const router = express.Router();

const Services = require('../Services/cashdonation.services');

router.post('/', async(req, res) =>{
    await Services.insertCashDetails(req.body);
    res.status(201).json({message: 'Created Successfully'});
})

module.exports = router;