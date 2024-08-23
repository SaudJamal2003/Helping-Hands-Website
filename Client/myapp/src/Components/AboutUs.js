import React from 'react';
import '../CssFiles/AboutUsCss.css';
import Logo from '../DashBoardImages/Logo.png'
import smallvector from '../AboutUsImages/smallvector.png'
import underline1 from '../AboutUsImages/underline1.png'
import linevector1 from '../AboutUsImages/linevector1.png'
import linevector2 from '../AboutUsImages/linevector2.png'
import bottomrect from '../AboutUsImages/bottomrect.png'
import saudimage from '../AboutUsImages/saudimage.png'
import usaidimage from '../AboutUsImages/usaidimage.png'
import usaidskills from '../AboutUsImages/usaidskills.png'
import saudskills from '../AboutUsImages/saudskills.png';
import {Link} from 'react-router-dom';


export default function AboutUs(){

    return(
        <div>
        <div className="container-fluid" id='logoDiv'>
        <Link to='/'>
            <img src ={Logo} alt="..." className='logo'/>
        </Link>
    </div>

    <div className='AboutUText'>
        About
        <br />
        Us
        <span className="dot">.</span>
    </div>

    <div className='overlap1'>
        <img src={smallvector} alt='smallvector' className='smallvector'/>
    
    
    <p className='we-started'>
    We started out just like you, helped
    <br/>
    friends and family just like you, then
    <br/>
    built Helping Hands just for you.
    </p>
    </div>

    <div className='overlap2'>

    <div className='saudtxt'>Saud Jamal</div>
    <img src={underline1} alt='underline1' className='underline1'/>
    </div>

    <div className='overlap3'>

    <div className='usaidtxt'>Usaid Ahmed</div>
    <img src={underline1} alt='underline1' className='underline1'/>
    </div>

    <div className="contactustxt">Contact us</div>

<div className="overlap4">

<img src={linevector2} alt='linevector2' className='linevector2'/>

{/* <img src={toprectangle} alt='toprectangle' className='toprectangle'/> */}

<img src={saudimage} alt='saudimage' className='saudimage'/>
</div>


<div className="overlap5">

<img src={linevector1} alt='linevector1' className='linevector1'/>

{/* <img src={toprectangle} alt='toprectangle' className='toprectangle'/> */}

<img src={usaidimage} alt='usaidimage' className='usaidimage'/>
</div>

<p className="alwaystxt">

<span className="always">Always </span>

<span className="ready">Ready </span>
<br/>
<span className="assist">To Assist.</span>

</p>

<div className='workedon-saud'>
worked on
</div>
<img src={saudskills} alt='saudskills' className='saudskills'/>


<div className='workedon-usaid'>
worked on
</div>
<img src={usaidskills} alt='usaidskills' className='usaidskills'/>

<p className='para1'>
Saud is a versatile web developer proficient in ReactJS, Express, 
Node.js, HTML, CSS, SQL, and JavaScript. With a comprehensive 
skill set spanning both front-end and back-end technologies, 
Saud excels in crafting dynamic and visually appealing web 
applications. His commitment to staying updated with industry 
trends and dedication to delivering high-quality solutions make 
him a valuable asset to any development team.
</p>
<p className='para2'>
Usaid is a multi-talented creative mind who seamlessly blends development and 
design expertise. As a developer, he has honed his skills in ReactJS, HTML, 
CSS, and JavaScript, ensuring the functionality and responsiveness of web 
applications. Beyond coding, Usaid excels in the realms of UI/UX and 
graphic design, bringing a holistic approach to his projects. Proficient 
in tools like Figma and SQL, he crafts visually stunning and user-friendly 
interfaces, demonstrating a keen eye for aesthetics and a deep understanding 
of user experience.
</p>

<div className='email1'>usaid.ahmedmay@gmail.com</div>
<div className='email2'>saud.jamal123@gmail.com</div>

<img src={bottomrect} alt='bottomrect' className='bottomrect'/>

</div>



    );

}
