const express = require('express');
const router = express.Router();
const { verifyUser } = require('../middleware');

const Services = require('../Services/dashboard.services');

router.get('/',verifyUser, async(req, res) => {
    const donations = await Services.getDonations(req.body);
    res.send(donations);
});

router.get('/Count',verifyUser, async(req, res) => {
    const count = await Services.getTotalDonators(req.body);
    res.send(count);
});

router.get('/Total',verifyUser, async(req, res) => {
    const sum = await Services.getSum(req.body); 
    res.send(sum);
});

module.exports = router;