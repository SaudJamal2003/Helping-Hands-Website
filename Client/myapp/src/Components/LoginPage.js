import React from 'react';
import LoginPageCss from '../CssFiles/LoginPageCss.module.css';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import coverPic from '../LoginImages/CoverPic.png'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    user_password: ''
  });

  const handleInputChangeName = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();  
    fetch('http://localhost:3002/api/user/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(res => {
        // console.log(res, res.json())
        if (res.status === "Success") {
          if(formData.email === "admin@mail.com" && formData.user_password === "admin"){
            navigate('/adminPage')
          }
          // else if(formData.email === "alkhidmat@mail.com" && formData.user_password === "alkhidmat"){
          //   navigate('/foundationPanel')
          // }
          else{
          // console.log("Login pe jao")
          navigate('/')
          }
        }
        else {
          alert(res.error);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleRoute = async () => {
    navigate('/foundationLogin')
  }

  const [showPassword, setShowPassword] = useState(true);

  const handlePassword = () => {
      setShowPassword(!showPassword); // Toggle the state between true and false
  };

  const handleForgetPassRoute = async () => {
    navigate('/forgetPassword');
  }
  const handleFoundationRegRoute = async () => {
    navigate('/register-foundation');
  }


  return (
    <>
    <div className={LoginPageCss.Main}>
      <div className={LoginPageCss.coverPhoto}>
        <img src={coverPic} alt='coverPic' className={LoginPageCss.Image}/>
        <div className={LoginPageCss.text}>
          <h1>Empower, Support, Inspire, Transform.</h1>
          <p>Through support and inspiration, we create a ripple effect of positivity, fostering a community built on kindness and shared success.</p>
        </div>
      </div>

      <div className={LoginPageCss.fromBlock} onSubmit={handleSubmit}>
        <form className={LoginPageCss.form}>
            <h1>Welcome Back!</h1>
            <p className={LoginPageCss.emailLabel}>Email Address</p>
            <input type='text' placeholder='  Enter Email' name='email' onChange={handleInputChangeName} className={LoginPageCss.EmailField} required/>
            <p className={LoginPageCss.passwordLabel}>Password</p>
            <div className={LoginPageCss.passwordFieldDiv}>
              <input type={showPassword ? 'password' : 'text'} placeholder='  Enter Password' name='user_password' onChange={handleInputChangeName} className={LoginPageCss.PasswordField} required />
              <svg onClick={handlePassword} className= {LoginPageCss.eye} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M14 12c-1.095 0-2-.905-2-2 0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-.092-.02-.178-.027-.268-.29.165-.619.268-.973.268z"></path><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path></svg>
            </div>
            <a className={LoginPageCss.forgotPassword} onClick={handleForgetPassRoute}>Forgot Password?</a>
            <div className={LoginPageCss.btns}>
              <button type='submit' className={LoginPageCss.loginBtn}> User Login</button>
                <button type='submit' onClick={handleRoute} className={LoginPageCss.foundationLoginBtn}> Org. Login</button>
            </div>
            <div className={LoginPageCss.signup}>
              <div className={LoginPageCss.innerLinks}>
                  <p>Don't have an account?</p>
                  <Link to='/signup' className={LoginPageCss.link}>
                    <span>  Sign up </span>
                  </Link>
              </div>
                <p className={LoginPageCss.Or}>or</p>
                <span  className={LoginPageCss.regFoundationLink} onClick={handleFoundationRegRoute}>Register Your own Foundation</span>
            </div> 
        </form>
      </div>
    </div>
    </>
  );
}
