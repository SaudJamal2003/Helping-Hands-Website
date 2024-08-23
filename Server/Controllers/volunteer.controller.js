const express = require('express');
const router = express.Router();

const services = require('../Services/volunteer.services.js');

router.get('/', async(req, res) => {
    const volunteers = await services.getAllVolunteers();
    res.send(volunteers);
})

router.post('/', async(req, res) => {
    await services.addOrEdit(req.body);
    res.status(201).json({message: 'Created Successfully'});
});

module.exports = router;