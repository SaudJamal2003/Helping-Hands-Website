import React, {useEffect, useState} from 'react';
import  ClothDonationDetailsCss from '../CssFiles/ClothDonationDetails.module.css';
import Logo from '../DashBoardImages/Logo.png'
import clothDonationPic from '../ClothDonationImages/clothDonationPic.png';
import CashdonationDropdown from './CashdonationDropdown';
// import GoogleLogo from '../SignUpImages/GoogleLogo.png';
import {Link} from 'react-router-dom';

export default function ClothDonationDetails(){

  const [clothDetails, setClothDetails] = useState({
    name: '',
    pickup_location: '',
    quantity: '',
    city: '',
    zip_code: '',
    date: '',
    foundation_name: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClothDetails({ ...clothDetails, [name]: value});
};

const handleDropdownChange = (e) => {
  const { value } = e.target;
  setClothDetails({ ...clothDetails, foundation_name: value });
};
  
  const handleSubmit = (e) => {
    // e.preventDefault();  // -> this is to prevent the page from refreshing
      fetch('http://localhost:3002/api/clothdonations', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clothDetails),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    const [foundationName, setFoundationName] = useState([]);

      useEffect(() => {
        fetchData();
      }, []);  
  
      const fetchData = () => {
          fetch('http://localhost:3002/api/viewFoundations')
            .then((response) => response.json())
            .then((data) => {
              setFoundationName(data);
            })
            .catch((error) => {
              console.error('Error:', error);
  
              setFoundationName({ error: true });
  
            });
        };

        const checkNameCorrectness = () => {
          const name = clothDetails.name;
          const address = clothDetails.pickup_location;
          const state = clothDetails.city;
          const qty = clothDetails.quantity;
        
          // Check if any of the fields are not provided or contain only whitespace characters
          // if (!name || !name.trim() || !address || !address.trim() || !state || !state.trim()) {
          //   alert("Please ensure all fields are filled out correctly.");
          //   return;
          // }
        
          // Check if any of the fields contain numbers
          if (/\d/.test(name) || /\d/.test(address) || /\d/.test(state)) {
            alert("Numbers are not acceptable in Name, address, and state fields.");
            return;
          }

          if (!/^\d+$/.test(qty)) {
            alert("Quantity should contain only numbers.");
            return;
          }
        
          // Proceed with further logic if all checks pass
          // For example: submit the form or proceed to the next step
        };

        const checkCodeLength = () => {
          if (clothDetails.zip_code.length !== 4) {
            alert("Zip code must be 4 digits long.");
          }
        };

    return (
        <> 
          {/* <div className={ClothDonationDetailsCss.clothDonationPic}>
            <img src={clothDonationPic} alt="..." className={ClothDonationDetailsCss.clothDonationPic} />
          </div>
          <Link to='/'>
            <img src ={Logo} alt="..." className={ClothDonationDetailsCss.logo}/>
          </Link>

         <form onSubmit={handleSubmit}> 
            <div className={ClothDonationDetailsCss.form1}>
              <h1 className={ClothDonationDetailsCss.textwrapper4}>Make a Donation</h1>
              <h2 className={ClothDonationDetailsCss.textwrapper5}>Select Foundation</h2>
              <h2 className={ClothDonationDetailsCss.Charity}>Charity</h2 >
              <div className={ClothDonationDetailsCss.inputCharityDiv}>
                <select className={ClothDonationDetailsCss.FoundationsDropDown} onChange={handleDropdownChange}
                name='foundation_name' value={clothDetails.foundation_name}>
                  {foundationName.map((item) => {
                      return<CashdonationDropdown foundationName={item.foundation_name}/>
                    })}
                </select>
              </div>
              <p className={ClothDonationDetailsCss.QtyLabel}>Enter Amount You Want To Donate</p>
              <h2 className={ClothDonationDetailsCss.Qty}>QTY</h2>
              <div className={ClothDonationDetailsCss.inputQtyDiv}>
              <input  className={ClothDonationDetailsCss.QtyInput} type='text' placeholder='1' 
                onChange={handleInputChange} name='quantity' value ={clothDetails.quantity || ''} required/>
              </div>
              <button type="text" className="ProceedBtn btn-outline-ProceedBtn" id={ClothDonationDetailsCss.proceedBtn}>Proceed</button>
            </div>

                    
            <h1 className={ClothDonationDetailsCss.heading}>Cloth Donation Details</h1>
            <div className={ClothDonationDetailsCss.textwrapper10}>City</div>
            <div className={ClothDonationDetailsCss.textwrapper11}>Name</div>
            <div className={ClothDonationDetailsCss.textwrapper13}>Zip Code</div>
            <div className={ClothDonationDetailsCss.textwrapper14}>Pickup Location</div>

            <div className={ClothDonationDetailsCss.overlap7}>
              <input  className={ClothDonationDetailsCss.cityInput} type='text' placeholder='City' 
              onChange={handleInputChange} name='city' value ={clothDetails.city || ''} required/>
            </div>

            <div className={ClothDonationDetailsCss.overlap8}>
              <input  className={ClothDonationDetailsCss.nameInput} type='text' placeholder='User name' 
              onChange={handleInputChange} name='name' value ={clothDetails.name || ''} required/>
            </div>

            <div className={ClothDonationDetailsCss.overlap10}>
            <input  className={ClothDonationDetailsCss.zipCodeInput} type='text' placeholder='Zip Code' 
              onChange={handleInputChange} name='zip_code' value ={clothDetails.zip_code || ''} required/>
            </div>

            <div className={ClothDonationDetailsCss.overlap11}>
              <input  className={ClothDonationDetailsCss.locationInput} type='text' placeholder=' Pickup Location'
                onChange={handleInputChange} name='pickup_location' value ={clothDetails.pickup_location || ''} required/>
            </div>
              <button type="submit" className={ClothDonationDetailsCss.DonateBtn}>Donate Now</button>
        </form> */}
        
        <div className={ClothDonationDetailsCss.clothDonationPic}>
            <img src={clothDonationPic} alt="..." className={ClothDonationDetailsCss.clothDonationPic} />

          </div>
          {/* <div className={ClothDonationDetailsCss.cloth_illustration}>
            <img src={cloth_illustration} alt="..." className={ClothDonationDetailsCss.cloth_illustration} />
          </div> */}
          <Link to='/'>
            <img src ={Logo} alt="..." className={ClothDonationDetailsCss.logo}/>
          </Link>

         <form onSubmit={handleSubmit}> 
            <div className={ClothDonationDetailsCss.form1}>
              <h1 className={ClothDonationDetailsCss.textwrapper4}>Make a Donation</h1>
              <h2 className={ClothDonationDetailsCss.textwrapper5}>Select Foundation</h2>
              <h2 className={ClothDonationDetailsCss.Charity}>Charity</h2 >
              <div className={ClothDonationDetailsCss.inputCharityDiv}>
                <select className={ClothDonationDetailsCss.FoundationsDropDown} onChange={handleDropdownChange}
                name='foundation_name' value={clothDetails.foundation_name}>
                  {foundationName.map((item) => {
                      return<CashdonationDropdown foundationName={item.foundation_name}/>
                    })}
                </select>
              </div>
              <p className={ClothDonationDetailsCss.QtyLabel}>Enter Amount You Want To Donate</p>
              <h2 className={ClothDonationDetailsCss.Qty}>QTY</h2>
              <div className={ClothDonationDetailsCss.inputQtyDiv}>
              <input  className={ClothDonationDetailsCss.QtyInput} type='text' placeholder='1' 
                onChange={handleInputChange} name='quantity' value ={clothDetails.quantity || ''} required/>
              </div>
              {/* <button type="text" className="ProceedBtn btn-outline-ProceedBtn" id={ClothDonationDetailsCss.proceedBtn}>Proceed</button> */}
            </div>

                    
            <h1 className={ClothDonationDetailsCss.heading}>Cloth Donation Details</h1>
            <div className={ClothDonationDetailsCss.textwrapper10}>City</div>
            <div className={ClothDonationDetailsCss.textwrapper11}>Name</div>
            <div className={ClothDonationDetailsCss.textwrapper13}>Zip Code</div>
            <div className={ClothDonationDetailsCss.textwrapper14}>Pickup Location</div>

            <div className={ClothDonationDetailsCss.overlap7}>
              <input  className={ClothDonationDetailsCss.cityInput} type='text' placeholder=' City' 
              onChange={handleInputChange} name='city' value ={clothDetails.city || ''} required/>
            </div>

            <div className={ClothDonationDetailsCss.overlap8}>
              <input  className={ClothDonationDetailsCss.nameInput} type='text' placeholder=' User name' 
              onChange={handleInputChange} name='name' value ={clothDetails.name || ''} required/>
            </div>

            <div className={ClothDonationDetailsCss.overlap10}>
            <input  className={ClothDonationDetailsCss.zipCodeInput} type='text' placeholder='  Zip Code' 
              onChange={handleInputChange} name='zip_code' value ={clothDetails.zip_code || ''} required/>
            </div>

            <div className={ClothDonationDetailsCss.overlap11}>
              <input  className={ClothDonationDetailsCss.locationInput} type='text' placeholder=' Pickup Location'
                onChange={handleInputChange} name='pickup_location' value ={clothDetails.pickup_location || ''} required/>
            </div>
              <button type="submit" className={ClothDonationDetailsCss.DonateBtn} onClick={checkCodeLength && checkNameCorrectness}>Donate Now</button>
        </form>

  </>
  );
}