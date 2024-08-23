const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer');

const Services = require('../Services/adminFoundation.services');

router.get('/foundationsDetails', async (req, res) => {
    const foundation_details = await Services.getFoundationsDetails();
    res.send(foundation_details);
})

router.get('/totalDonations', async (req, res) =>{
    const totalAmount = await Services.getTotalDonations();
    res.send(totalAmount[0]);
})

router.get('/totalDonators', async (req, res) => {
    const totalPeople = await Services.getTotalDonators();
    res.send(totalPeople[0]);
})



router.get('/totalFoundations', async (req, res) => {
    const totalfoundation = await Services.getTotalFoundations();
    res.send(totalfoundation[0]);
})

router.get('/foundationQueryRecord', async(req, res) => {
  const queryName = req.query.queryName
  console.log("QUERY NAME = " + queryName);
  const record = await Services.getFoundationQueryDetails(queryName);
  console.log(record);
  res.send(record);
})

router.post('/approveFoundation', async (req, res) => {
  try {
    // Update volunteer status in the database (pseudocode)
    await Services.updateStatus(req.body);
    console.log(req.body)
    console.log(req.body._email)
    //connect with SMTP
    const transporter = nodemailer.createTransport({
        service: "gmail",
        // host: 'smtp.ethereal.email',
        // port: 587,
        auth:{
            // user: 'ova.bauch52@ethereal.email',
            // pass: 'GM4XPpCW3rPb5fJX9T'
            user: "k213964@nu.edu.pk",
            pass: YOUR_PASSWORD_HERE
        }
    });

    const mailOptions = {
      from: "k213964@nu.edu.pk",
      to: 'jsaud7308@gmail.com',
      subject: 'Request Approved. Your foundation has been registered on Helping Hands! Congratulations',
      text: 'Your registeration request has been approved. Thank you for your contribution!'
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Registeration request approved and email sent successfully.');
  } catch (error) {
    console.error('Error approving registeration request:', error);
    res.status(500).send('Error approving registeration request. Please try again later.');
  }
});

router.post('/rejectFoundation', async (req, res) => {
  try {
    // Update volunteer status in the database (pseudocode)
    await Services.updateStatusReject(req.body);
    console.log(req.body)
    console.log(req.body._email)
    //connect with SMTP
    const transporter = nodemailer.createTransport({
        service: "gmail",
        // host: 'smtp.ethereal.email',
        // port: 587,
        auth:{
            // user: 'ova.bauch52@ethereal.email',
            // pass: 'GM4XPpCW3rPb5fJX9T'
            user: "k213964@nu.edu.pk",
            pass: YOUR_PASSWORD_HERE
        }
    });

    const mailOptions = {
      from: "k213964@nu.edu.pk",
      to: 'jsaud7308@gmail.com',
      subject: 'Request Rejected. Your foundation has not been registered on Helping Hands.',
      text: 'Your registeration request has been rejected. Please contact to the headoffice of Helping Hands if you want further details \n\n Contact Number: 0330323023 '
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Registeration request rejected and email sent successfully.');
  } catch (error) {
    console.error('Error in rejecting registeration request:', error);
    res.status(500).send('Error inrejecting registeration request. Please try again later.');
  }
});

module.exports = router;

