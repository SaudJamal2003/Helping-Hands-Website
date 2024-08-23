import React, { useState } from 'react'

export default function SaylaniCard({volunteer_name, email, registration_date}) {
    const[volEmail, setEmail] = useState({
        _email: '',
        _schedule: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmail({ ...volEmail, [name]: value, _email: email});
    };

    const handleEmail = async (e) => {
        try{
            fetch('http://localhost:3002/api/saylaniPanel/sendSaylaniEmail',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(volEmail)
            })
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        }
        catch (error) {
            console.error('Error sending schedule to volunteer:', error);
            alert('Error send the schedule. Try again later');
        }
    }

  return (
    <>
        <div>
            <h2>{volunteer_name}</h2>
            <h4>{email}</h4>
            <p>{registration_date}</p>
            <input type='text' name='_schedule' value={volEmail._schedule || ''} 
            onChange={handleInputChange} placeholder='Enter the schedule for volunteer'/>
            <button onClick={handleEmail}>Send Schedule</button>
        </div>
    </>
  )
}

