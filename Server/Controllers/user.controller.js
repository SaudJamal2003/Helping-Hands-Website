const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { verifyUser } = require('../middleware');
const nodemailer = require('nodemailer');
// const cookie = require('cookie-parser');

const service = require('../Services/user.services')

router.get('/logout', async (req, res) => {
    res.clearCookie('token')
    return res.json({ status: "Success" })
})
router.get('/', async (req, res) => {
    const users = await service.getAllUsers();
    res.send(users);
})

router.post('/', async (req, res) => {
    await service.addOrEdit(req.body);
    return res.json({ status: "Success" });
})

router.post('/login', async (req, res) => {
    const user = await service.loginUser(req.body);
    if (user) {
        const token = jwt.sign(user, "jwt-secret-key", { expiresIn: '1d' });
        console.log(token);
        res.cookie('token', token);
        return res.json({ status: "Success" });
    } else {
        return res.json({ error: "Invalid credentials" })
    }
})

router.post('/foundationLogin', async (req, res) => {
    const foundation = await service.loginFoundation(req.body)
    if (foundation) {
        const token = jwt.sign(foundation, "jwt-secret-key", { expiresIn: '1d' });
        console.log(token);
        res.cookie('token', token);
        return res.json({ status: "Success" });
    } else {
        return res.json({ error: "Invalid credentials" })
    }
});

router.get('/userName', verifyUser, async(req, res) => {
    const user = await service.getUserName(req.body);
    console.log('----------------admin route--------------')
    console.log(user[0]);
    res.send(user);
})


router.post('/forgot-password', async (req, res) => {
    const user = await service.forgetPassword(req.body);
    console.log(user.user_id)
    // try{
        if (!user) {
            return res.json({status: 'User does not exit'});
        }
            const token = jwt.sign({email: user.email, id: user.user_id}, "jwt-secret-key", { expiresIn: '1d' });
            // const link = `http://localhost:3000/reset-password/${user.user_id}/${token}`
            // console.log(link)
    // }
    // catch (error){

    // }
        const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "k213964@nu.edu.pk",
                    pass: YOUR_PASSWORD_HERE
                }
            });
        
            const mailOptions = {
              from: "k213964@nu.edu.pk",
              to: 'jsaud7308@gmail.com',
              subject: 'Reset Password Link',
              text: `http://localhost:3000/reset-password/${user.user_id}/${token}`
            };
        
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                }
                else{
                    return res.status(200).send({Status: "Success"})
                }
            });
            //  res.status(200).send('Successfully sent mail.');

});


router.post('/reset-password/:id/:token', async(req, res) => {
    console.log("reset")
    const {id, token} = req.params;
    const {password} = req.body;

    console.log('hello')
    console.log(password)
    console.log(token)

    jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
        if(err){
            return res.json({Status: 'Error with token',error:err})
        }
        else{
            service.resetPassword({ user_id: id, usr_password: password })
            return res.status(200).send({status:'Success'})
        }
    })
});


router.post('/foundation-registration', async(req,res) => {
    await service.registerFoundation(req.body);
    return res.status(200).json({ status: "Success" });
})

router.post('/forgot-foundation-password', async (req, res) => {
    const user = await service.forgetFoundationPassword(req.body);
    console.log(user.foundation_id)
    // try{
        if (!user) {
            return res.json({status: 'User does not exit'});
        }
            const token = jwt.sign({email: user.email, id: user.foundation_id}, "jwt-secret-key", { expiresIn: '1d' });
            // const link = `http://localhost:3000/reset-password/${user.user_id}/${token}`
            // console.log(link)
    // }
    // catch (error){

    // }
        const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "k213964@nu.edu.pk",
                    pass: YOUR_PASSWORD_HERE
                }
            });
        
            const mailOptions = {
              from: "k213964@nu.edu.pk",
              to: 'jsaud7308@gmail.com',
              subject: 'Reset Password Link',
              text: `http://localhost:3000/reset-password/${user.foundation_id}/${token}`
            };
        
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                }
                else{
                    return res.status(200).send({Status: "Success"})
                }
            });
            //  res.status(200).send('Successfully sent mail.');

});


router.post('/reset-foundation-password/:id/:token', async(req, res) => {
    console.log("reset")
    const {id, token} = req.params;
    const {password} = req.body;

    console.log('hello')
    console.log(password)
    console.log(token)

    jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
        if(err){
            return res.json({Status: 'Error with token',error:err})
        }
        else{
            service.resetFoundationPassword({ foundation_id: id, foundation_password: password })
            return res.status(200).send({status:'Success'})
        }
    })
});




module.exports = router;
