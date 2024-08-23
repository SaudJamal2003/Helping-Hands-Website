const express = require('express');
const router = express.Router();
const { verifyUser } = require('../middleware');

const Services = require('../Services/userProfile.services');

router.get('/',verifyUser, async(req, res) => {
    const donations = await Services.getUserDetails(req.body);
    res.send(donations);
});

module.exports = router