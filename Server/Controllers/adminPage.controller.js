const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer');

const Services = require('../Services/adminPage.services');

router.get('/', async (req, res) => {
    const volunteer_details = await Services.getVolunteerDetails();
    res.send(volunteer_details);
})

router.get('/totalDonations', async (req, res) =>{
    const totalAmount = await Services.getTotalDonations();
    res.send(totalAmount[0]);
})

router.get('/totalDonators', async (req, res) => {
    const totalPeople = await Services.getTotalDonators();
    res.send(totalPeople);
})

router.get('/totalVolunteers', async (req, res) => {
    const totalVol = await Services.getTotalVolunteers();
    res.send(totalVol[0]);
})

router.get('/queryRecord', async(req, res) => {
  const {queryName} = req.query
  const record = await Services.getQueryDetails(queryName);
  // console.log(record);
  res.send(record);
})

router.post('/approveVolunteer', async (req, res) => {
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
            pass: "saudjamal2003"
        }
    });

    const mailOptions = {
      from: "k213964@nu.edu.pk",
      to: req.body._email,
      subject: 'Volunteer Request Approved',
      text: 'Your volunteer request has been approved. Thank you for your contribution!'
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Volunteer request approved and email sent successfully.');
  } catch (error) {
    console.error('Error approving volunteer request:', error);
    res.status(500).send('Error approving volunteer request. Please try again later.');
  }
});


router.post('/rejectVolunteer', async (req, res) => {
  try {
    // Update volunteer status in the database (pseudocode)
    await Services.updateStatusForRejection(req.body);
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
            pass: "saudjamal2003"
        }
    });

    const mailOptions = {
      from: "k213964@nu.edu.pk",
      to: req.body._email,
      subject: 'Volunteer Request rejected',
      text: 'Your volunteer request has been rejected. Thank you for your contribution!'
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Volunteer request rejected and email sent successfully.');
  } catch (error) {
    console.error('Error in rejecting volunteer request:', error);
    res.status(500).send('Error in rejecting volunteer request. Please try again later.');
  }
});

module.exports = router;

