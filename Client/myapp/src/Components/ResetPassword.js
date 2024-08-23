import React, { useState } from 'react'
import forgotPasswordCss from '../CssFiles/forgotPasswordCss.module.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function ResetPassword() {

    // const[Password, setPassword] = useState(null);

    // const handleInput = (e) => {
    //     const { name, value } = e.target;
    //     setPassword({ ...Password, [name]: value })
    // };

    const [password, setPassword] = useState('');

    const handleInput = (e) => {
        setPassword(e.target.value);
    };

    const {id, token} = useParams()

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log(id, token)
        console.log("password: ", password)
        e.preventDefault()
        fetch(`http://localhost:3002/api/user/reset-password/${id}/${token}`,{
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({ password: Password }),
            body: JSON.stringify({ password }),
        })
        .then((response) => response.json() )
        .then((res => {
            console.log(res)
            if(res.status === "Success"){
                navigate('/login')
            }
            // setPassword(data)
            // console.log(data)
        }))
        .catch((error) => {
            console.log('Error', error);
            // setPassword({error: true});
        })
    };


  return (
    <>
        <div className={forgotPasswordCss.main}>
            <form onSubmit={handleSubmit} className={forgotPasswordCss.mailForm}>
                <div className={forgotPasswordCss.innerDiv}>
                    <h4>Reset Password</h4>
                    <p>Password</p>
                    <input onChange={handleInput} value={password} name='Password' type='password' placeholder='   password' className={forgotPasswordCss.emailInput} required/>
                </div>
                <button type='submit' className={forgotPasswordCss.emailSendButton}>Reset</button>
            </form>
        </div>
    </>
  )
}

