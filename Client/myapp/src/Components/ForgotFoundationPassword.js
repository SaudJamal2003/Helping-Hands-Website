import React, { useState } from 'react'
import forgotPasswordCss from '../CssFiles/forgotPasswordCss.module.css';
import { useNavigate } from 'react-router-dom';

export default function ForgotFoundationPassword() {

    const[email, setEmail] = useState(null);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setEmail({ ...email, [name]: value })
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        fetch('http://localhost:3002/api/user/forgot-foundation-password',{
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email),
        })
        .then((response) => response.json())
        .then((res => {
            console.log(res)
            if(res.status === "Success"){
                navigate('/foundationLogin')
            }
        }))
        .catch((error) => {
            console.log('Error', error);
            setEmail({error: true});
        })
    };


  return (
    <>
        <div className={forgotPasswordCss.main}>
            <form onSubmit={handleSubmit} className={forgotPasswordCss.mailForm}>
                <div className={forgotPasswordCss.innerDiv}>
                    <h4>Forgot Password</h4>
                    <p>Email</p>
                    <input onChange={handleInput} name='email' type='text' placeholder='   foundation.name@mail.com' className={forgotPasswordCss.emailInput} required/>
                </div>
                <button type='submit' className={forgotPasswordCss.emailSendButton}>Send</button>
            </form>
        </div>
    </>
  )
}

