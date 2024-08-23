import React, { useState } from 'react';
import AdminCss from '../CssFiles/adminPanel.module.css';
import {convertSqlDateToFormattedDate} from '../lib';
import pic from '../DashBoardImages/ProfilePic1.png'


export default function AdminVolunteerCard({volunteer_name, foundation_name, registration_date, email, _status}) {
  const [volEmail, setEmail]= useState({
    _email: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleApprove = async () => {

    setIsLoading(true);
    setEmail({ ...volEmail, _email: email});

    try {
      // Make API call to approve volunteer request using fetch
      const response = await fetch('http://localhost:3002/api/adminPanel/approveVolunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // You can pass any necessary data here in the body
        // For example: JSON.stringify({ volunteerId: 'volunteerIdHere' })
        body: JSON.stringify({_email: email}) //volEmail instead of this ?
      });

      if (!response.ok) {
        throw new Error('Failed to approve volunteer request');
      }

      alert('Volunteer request approved and email sent successfully.');
    } catch (error) {
      console.error('Error approving volunteer request:', error);
      alert('Error approving volunteer request. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // const [updateStatus, setUpdateStatus] = useState({
  //   email: '' ,
  // });

  // const handleApprove = (e) => {
  //   e.preventDefault();  // this is to prevent the page from refreshing
  //   // Use the formData to make a fetch API request
  //   fetch('http://localhost:3002/api/adminPanel/adminApprove', {
  //     method: 'POST', // or 'GET', 'PUT', etc., depending on your API
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then(res => {
  //       // console.log(res, res.json())
  //       if(res.status === "Success"){
  //         // console.log("Login pe jao")
  //         navigate('/login')
  //       }
  //       else{
  //         alert("Error");
  //       }
  //     })
  //     // .then((data) => {
  //     //   // Handle the API response here
  //     //   console.log(data);
  //     // })
  //     .catch((error) => {
  //       // Handle errors here
  //       console.error('Error:', error);
  //     });
  // };

  const[statusRetreived, setStatus] = useState(false);
  const[statusReject, setStatusReject] = useState(false);

  const handleRejectStatus = async () => {

    setIsLoading(true);
    setEmail({ ...volEmail, _email: email});

    try {
      // Make API call to approve volunteer request using fetch
      const response = await fetch('http://localhost:3002/api/adminPanel/rejectVolunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // You can pass any necessary data here in the body
        // For example: JSON.stringify({ volunteerId: 'volunteerIdHere' })
        body: JSON.stringify({_email: email}) //volEmail instead of this ?
      });

      if (!response.ok) {
        throw new Error('Failed to approve volunteer request');
      }

      alert('Volunteer request rejected and email sent successfully.');
    } catch (error) {
      console.error('Error in rejecting volunteer request:', error);
      alert('Error rejecting volunteer request. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
        <div className={AdminCss.outerCard}>
          
          <div className={AdminCss.volDetails}>
              <img src={pic} alt='pic' className={AdminCss.pic}/>
              <div className={AdminCss.personalDetails}>
                <h4>{volunteer_name}</h4>
                <p>____________________________________</p>

                <p>Email: {email}</p>
                <p>{foundation_name}</p>
                <p>Status: <span style={{color: _status ==='Rejected' ? '#FD5D5D' : _status === 'Approved' ? '#28C423' : '#FFA500'}}>
                 {_status}  </span> </p>
              </div>
              <p className={AdminCss.date}>{convertSqlDateToFormattedDate(registration_date)}</p>
          </div>

          <div className={AdminCss.buttons}>
            <button onClick={handleApprove} className={AdminCss.approveBtn}>Approve</button>
            <button className={AdminCss.rejectBtn} onClick={handleRejectStatus}>Reject</button>
          </div>
        </div>
    </>
  )
}

