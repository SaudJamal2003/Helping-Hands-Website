import React, { useState } from 'react';
import volunteerLoginCss from '../CssFiles/volunteerLogin.module.css';
import kids from '../FoundationPanelLoginImages/kids.png'
import people from '../FoundationPanelLoginImages/people.png'
import arrow from '../FoundationPanelLoginImages/arrow.png'
import Volunteer from '../FoundationPanelLoginImages/mainPic.png'
import {Link, useNavigate} from 'react-router-dom'

export default function FoundationRegistration() {
    const [showPassword, setShowPassword] = useState(true);

    const handlePassword = () => {
        setShowPassword(!showPassword); // Toggle the state between true and false
    };
    

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        _password: '',
        description: '',
        owner: '',
        location: '',
        address: '',
      });
    
      const handleInputChangeName = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const navigate = useNavigate()
    
      const handleSubmit = (e) => {
        fetch('http://localhost:3002/api/user/foundation-registration', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then(data => {
            setFormData(data)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };





  return (
    <>
    <div className={volunteerLoginCss.main}>
        <div className={volunteerLoginCss.pictureDiv}>
            <img src={Volunteer} alt='Volunteer' className={volunteerLoginCss.image}/>
            <img src={arrow} alt='arrow' className={volunteerLoginCss.arrow}/>
            <div className={volunteerLoginCss.imageText}>
                <blockquote style={{textAlign: 'center'}}>
                    “Money is not the only commodity that is fun to give. We can give time, we can give our expertise, we can give our love, or simply give a smile. What does that cost? The point is, none of us can ever run out of something worthwhile to give.”
                    <p>- Steve Goodier</p>
                </blockquote>
            </div>
        </div>
        <div className={volunteerLoginCss.rightDiv}>
            <Link to='/foundationLogin'>
                <button className={volunteerLoginCss.login}>
                    Login
                </button>
            </Link>
            <form className={volunteerLoginCss.registrationForm} onSubmit={handleSubmit}>
                <div className={volunteerLoginCss.title}>
                    <h1>Welcome Foundations</h1>
                    <p>Welcome owners! Please enter out details</p>
                </div>
                
                <div className={volunteerLoginCss.fields}>
                    <p style={{fontWeight: '500', color: 'black'}}>Enter your Foundation Name</p>
                    <input name='name' type='text' placeholder='Enter your foundation name' onChange={handleInputChangeName} className={volunteerLoginCss.emailfield} required/>
                    <p style={{fontWeight: '500', color: 'black'}}> Email Address</p>
                    <input name='email' type='text' placeholder='foundation.charity@mail.com' onChange={handleInputChangeName} className={volunteerLoginCss.emailfield} required/>
                    <div className={volunteerLoginCss.description}>
                        <div className={volunteerLoginCss.innerDescriptionDiv2}>
                            <p style={{fontWeight: '500', color: 'black'}}> Description</p>
                            <textarea className={volunteerLoginCss.textBox} name='description' type='text' rows='22' cols='10' placeholder='   Tell us about your foundation...'  onChange={handleInputChangeName} ></textarea>
                        </div>

                        <div className={volunteerLoginCss.inner}>
                            <div className={volunteerLoginCss.innerDescriptionDiv1}>
                                <p style={{fontWeight: '500', color: 'black'}}> Foundation Owner</p>
                                <input className={volunteerLoginCss.owner} name='owner' type='text' placeholder='   name'  onChange={handleInputChangeName} />
                            </div>

                            <div className={volunteerLoginCss.innerLocationDiv1}>
                                <p style={{fontWeight: '500', color: 'black'}}> Address</p>
                                <input className={volunteerLoginCss.addressInp} name='address' type='text' placeholder='   address'  onChange={handleInputChangeName} />
                            </div>

                            <div className={volunteerLoginCss.innerLocationDiv2}>
                                <p style={{fontWeight: '500', color: 'black'}}> Location Code</p>
                                <input className={volunteerLoginCss.locationInitials} name='location' type='text' placeholder='   location Code: KHI'  onChange={handleInputChangeName} />
                            </div>

                        </div>
                    </div>
                    
                    
                    <p style={{color: '#FF7070', fontWeight: '500'}}> Password</p>
                    <div className={volunteerLoginCss.passwordDiv}>
                        <input name='_password' placeholder='' onChange={handleInputChangeName} className={volunteerLoginCss.passfield} 
                        type={showPassword ? 'password' : 'text'} required/><svg 
                        className= {volunteerLoginCss.eyeImage}  onClick={handlePassword} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M14 12c-1.095 0-2-.905-2-2 0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-.092-.02-.178-.027-.268-.29.165-.619.268-.973.268z"></path><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path></svg>
                    </div>
                    <button className={volunteerLoginCss.loginButton} type='submit'>Create an account</button>
                    {/* <p className={volunteerLoginCss.signup}>Already have an account? 
                    <Link to='/login'>
                        <a className={volunteerLoginCss.link}>
                            <span>  Log in</span>
                        </a>
                    </Link>
                    </p>  */}
                </div>
            </form>
        </div>
    </div>

    </>
  )
}