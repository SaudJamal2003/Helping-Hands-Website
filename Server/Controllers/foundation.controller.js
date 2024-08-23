const express = require('express');
const router = express.Router();

const Services = require('../Services/foundation.services');

router.get('/', async (req, res) => {
    const foundationNames = await Services.getFoundationNames();
    res.send(foundationNames);
});

module.exports = router;