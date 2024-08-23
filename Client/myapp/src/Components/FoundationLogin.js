import React, { useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import foundationLoginCss from '../CssFiles/foundationLogin.module.css';
import kids from '../FoundationPanelLoginImages/kids.png'
import people from '../FoundationPanelLoginImages/people.png'
import arrow from '../FoundationPanelLoginImages/arrow.png'

export default function FoundationLogin() {

    const [showPassword, setShowPassword] = useState(true);

    const handlePassword = () => {
        setShowPassword(!showPassword); // Toggle the state between true and false
    };

    const [formData, setFormData] = useState({
        email: '',
        _password: ''
      });
    
      const handleInputChangeName = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const navigate = useNavigate()
    
      const handleSubmit = (e) => {
        e.preventDefault();  
        fetch('http://localhost:3002/api/user/foundationLogin', {
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
                navigate('/foundationPanel')
            }
            else {
              alert(res.error);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

      const handleForgetPassRoute = async () => {
        navigate('/forgot-foundation-password');
      }


  return (
    <>
    <div className={foundationLoginCss.main}>

        <form onSubmit={handleSubmit}>
            <h1>Login As Foundation</h1>
            <div className={foundationLoginCss.fields}>
                <p style={{fontWeight: '500'}}>Email Address</p>
                <input onChange={handleInputChangeName} name='email' type='text' placeholder='    foundation.charity@mail.com' className={foundationLoginCss.emailfield} required/>
                <p style={{color: '#FF7070', fontWeight: '500'}}>Password</p>
                <div className={foundationLoginCss.passwordDiv}>
                    <input onChange={handleInputChangeName} name='_password' placeholder='' className={foundationLoginCss.passfield} 
                    type={showPassword ? 'password' : 'text'} required/><svg 
                    onClick={handlePassword} className= {foundationLoginCss.eyeImage} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M14 12c-1.095 0-2-.905-2-2 0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-.092-.02-.178-.027-.268-.29.165-.619.268-.973.268z"></path><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path></svg>
                </div>
                <a className={foundationLoginCss.forgetPass} onClick={handleForgetPassRoute}>Forgot Password?</a>
                <button>Login</button>
                <p className={foundationLoginCss.signup}>Don't have an account? 
                <Link to='/register-foundation' className={foundationLoginCss.link}>
                    <span>  Sign up</span>
                </Link>
                </p> 
            </div>
        </form>

        <div className={foundationLoginCss.pictureDiv}>
            <img src={kids} alt='kids' className={foundationLoginCss.image}/>
            <div className={foundationLoginCss.imageText}>
                <h1>"Bringing Hope: Together for a Brighter Tomorrow"</h1>
                <p>In collaboration with the Avari Tower, we are facilitating a donation drive aimed at supporting the noble cause of Alkhidmat Foundation. Donations will be accepted at the designated drop-off points located at the Avari Tower premises during the specified timings. </p>
                <img src={people} alt='people' className={foundationLoginCss.peopleImage}/>
            </div>
            <img src={arrow} alt='arrow' className={foundationLoginCss.arrow}/>
        </div>

    </div>

    </>
  )
}


