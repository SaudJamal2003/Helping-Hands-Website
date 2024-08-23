import React,{useEffect, useState} from 'react'
import backgroundPic from '../FoodDonationImages/backgroundPic.png';
import FoodDetailCss from '../CssFiles/FoodDetails.module.css';
import Logo from '../FoodDonationImages/logo.png';
import CashdonationDropdown from './CashdonationDropdown';
import {Link} from 'react-router-dom';
export default function FoodDonationDetails() {

  const [foodDetails, setFoodDetails] = useState({
    name: '',
    pickup_location: '',
    quantity: '',
    city: '',
    state: '',
    zip_code: '',
    foundation_name: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoodDetails({ ...foodDetails, [name]: value});
};

const handleDropdownChange = (e) => {
  const { value } = e.target;
  setFoodDetails({ ...foodDetails, foundation_name: value });
};
  
  const handleSubmit = (e) => {
    // e.preventDefault();  // -> this is to prevent the page from refreshing
      fetch('http://localhost:3002/api/fooddonations', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodDetails),
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
          const name = foodDetails.name;
          const address = foodDetails.pickup_location;
          const state = foodDetails.city;
          const qty = foodDetails.quantity;
        
          // Check if any of the fields are not provided or contain only whitespace characters
          // if (!name || !name.trim() || !address || !address.trim() || !state || !state.trim()) {
          //   alert("Please ensure all fields are filled out correctly.");
          //   return;
          // }
        
          // Check if any of the fields contain numbers
          if (/\d/.test(name) || /\d/.test(address) || /\d/.test(state) ) {
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
          if (foodDetails.zip_code.length !== 4) {
            alert("Zip code must be 4 digits long.");
          }
        };



  return (
    <>
        {/* <div className={FoodDetailCss.FoodDonationDiv}>
            <img src={backgroundPic} alt="..." className={FoodDetailCss.FoodDonationPic} />
          </div>
          <Link to='/'>
            <img src ={Logo} alt="..." className={FoodDetailCss.logo}/>
          </Link>

        <form onSubmit={handleSubmit}>
          <div className={FoodDetailCss.form1}>
            <h1 className={FoodDetailCss.formHeader1}>Make a Donation</h1>
            <h2 className={FoodDetailCss.formHeader2}>Select Foundation</h2>
            <h2 className={FoodDetailCss.Charity}>Charity</h2 >
            <div className={FoodDetailCss.inputCharityDiv}>
              <select className={FoodDetailCss.FoundationsDropDown} onChange={handleDropdownChange}
               name='foundation_name' value={foodDetails.foundation_name}>
                  {foundationName.map((item) => {
                        return<CashdonationDropdown foundationName={item.foundation_name}/>
                  })}
              </select>
            </div>
            <p className={FoodDetailCss.QtyLabel}>Enter Amount You Want To Donate</p>
            <h2 className={FoodDetailCss.Qty}>QTY(Kg)</h2>
            <div className={FoodDetailCss.inputQtyDiv}>
             <input  className={FoodDetailCss.QtyInput} type='text' placeholder='1' 
              onChange={handleInputChange} name='quantity'  value ={foodDetails.quantity || ''} required/>
            </div>
            <button type="text" className='ProceedBtn btn-outline-ProceedBtn' id={FoodDetailCss.proceedBtn}>Proceed</button>
          </div>

                  
          <h1 className={FoodDetailCss.heading}>Food Donation Details</h1>
          <div className={FoodDetailCss.CityHeader}>City</div>
          <div className={FoodDetailCss.NameHeader}>Name</div>
          <div className={FoodDetailCss.ZipHeader}>Zip Code</div>
          <div className={FoodDetailCss.LocationHeader}>Pickup Location</div>

          <div className={FoodDetailCss.CityInputDiv}>
            <input  className={FoodDetailCss.cityInput} type='text' placeholder='City' 
             onChange={handleInputChange} name='city' value ={foodDetails.city || ''} required/>
          </div>

          <div className={FoodDetailCss.NameInputDiv}>
            <input  className={FoodDetailCss.nameInput} type='text' placeholder='Name' 
             onChange={handleInputChange}  name='name' value ={foodDetails.name || ''} required/>
          </div>

          <div className={FoodDetailCss.ZipInputDiv}>
          <input  className={FoodDetailCss.zipCodeInput} type='text' placeholder='Zip Code'
            onChange={handleInputChange} name='zip_code' value ={foodDetails.zip_code || ''} required/>
          </div>

          <div className={FoodDetailCss.LocationInputDiv}>
            <input  className={FoodDetailCss.locationInput} type='text' placeholder='Pickup Location' 
             onChange={handleInputChange}  name='pickup_location' value ={foodDetails.pickup_location || ''} required/>
          </div>
          <button type="submit" className={FoodDetailCss.DonateBtn}>Donate Now</button>
        </form> */}

        <div className={FoodDetailCss.backgroundPic}>
            <img src={backgroundPic} alt="..." className={FoodDetailCss.backgroundPic} />
          </div>
          <Link to='/'>
            <img src ={Logo} alt="..." className={FoodDetailCss.logo}/>
          </Link>

        <form onSubmit={handleSubmit}>
          <div className={FoodDetailCss.form1}>
            <h1 className={FoodDetailCss.formHeader1}>Make a Donation</h1>
            <h2 className={FoodDetailCss.formHeader2}>Select Foundation</h2>
            <h2 className={FoodDetailCss.Charity}>Charity</h2 >
            <div className={FoodDetailCss.inputCharityDiv}>
              <select className={FoodDetailCss.FoundationsDropDown} onChange={handleDropdownChange}
               name='foundation_name' value={foodDetails.foundation_name}>
                  {foundationName.map((item) => {
                        return<CashdonationDropdown foundationName={item.foundation_name}/>
                  })}
              </select>
            </div>
            <p className={FoodDetailCss.QtyLabel}>Enter Amount You Want To Donate</p>
            <h2 className={FoodDetailCss.Qty}>QTY(Kg)</h2>
            <div className={FoodDetailCss.inputQtyDiv}>
             <input  className={FoodDetailCss.QtyInput} type='text' placeholder=' 1' 
              onChange={handleInputChange} name='quantity'  value ={foodDetails.quantity || ''} required/>
            </div>
      
          </div>

                  
          <h1 className={FoodDetailCss.heading}>Food Donation Details</h1>
          <div className={FoodDetailCss.CityHeader}>City</div>
          <div className={FoodDetailCss.NameHeader}>Name</div>
          <div className={FoodDetailCss.ZipHeader}>Zip Code</div>
          <div className={FoodDetailCss.LocationHeader}>Pickup Location</div>

          <div className={FoodDetailCss.CityInputDiv}>
            <input  className={FoodDetailCss.cityInput} type='text' placeholder=' City' 
             onChange={handleInputChange} name='city' value ={foodDetails.city || ''} required/>
          </div>

          <div className={FoodDetailCss.NameInputDiv}>
            <input  className={FoodDetailCss.nameInput} type='text' placeholder=' Name' 
             onChange={handleInputChange}  name='name' value ={foodDetails.name || ''} required/>
          </div>

          <div className={FoodDetailCss.ZipInputDiv}>
          <input  className={FoodDetailCss.zipCodeInput} type='text' placeholder='  zip Code'
            onChange={handleInputChange} name='zip_code' value ={foodDetails.zip_code || ''} required/>
          </div>

          <div className={FoodDetailCss.LocationInputDiv}>
            <input  className={FoodDetailCss.locationInput} type='text' placeholder=' Pickup Location' 
             onChange={handleInputChange}  name='pickup_location' value ={foodDetails.pickup_location || ''} required/>
          </div>
          <button type="submit" className={FoodDetailCss.DonateBtn} onClick={checkCodeLength && checkNameCorrectness}>Donate Now</button>
        </form>

    </>
  )
}
