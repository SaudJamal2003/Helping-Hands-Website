const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const bodyparser = require('body-parser');
require('express-async-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./db');
const { verifyUser } = require('./middleware');
//Routes
const adminRoutes = require('./Controllers/adminPage.controller');
const userRoutes = require('./Controllers/user.controller');
const volunteerRoutes = require('./Controllers/volunteer.controller');
const dashBoardRoutes = require('./Controllers/dashboard.controller');
const ViewFoundationsRoutes = require('./Controllers/foundation.controller');
const cashDonationRoutes = require('./Controllers/cashdonation.controller');
const clothDonationRoutes = require('./Controllers/clothDonation.controller');
const foodDonationRoutes = require('./Controllers/fooddonation.controller');
const userProfileRoutes = require('./Controllers/userProfile.controller');
const foundationRoutes = require('./Controllers/foundationPanel.controller');
const adminFoundationRoutes = require('./Controllers/adminFoundation.controller');

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', '*'],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use(cookieParser());
app.use(bodyparser.json());

app.get('/', verifyUser, (req, res) => {
    return res.json({ status: "Success" })
})
app.use('/api/adminPanel', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/volunteer', volunteerRoutes);
app.use('/api/dashBoard', dashBoardRoutes);
app.use('/api/viewFoundations', ViewFoundationsRoutes);
app.use('/api/cashdonations', cashDonationRoutes);
app.use('/api/clothdonations', clothDonationRoutes);
app.use('/api/fooddonations', foodDonationRoutes);
app.use('/api/userinformation', userProfileRoutes);
app.use('/api/adminFoundationPanel', adminFoundationRoutes);
app.use('/api/foundationPanel',foundationRoutes);

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong')
});

db.query('SELECT 1')
    .then(() => {
        console.log('db connection succeeded.')
        app.listen(PORT,
            () => console.log(`server running at port ${PORT}`))
    })
    .catch(err => console.log('db connection failed. \n' + err))

