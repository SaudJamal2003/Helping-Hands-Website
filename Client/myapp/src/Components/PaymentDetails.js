import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom';
import Logo from '../FoodDonationImages/logo.png';
import PaymentDetailsCss from '../CssFiles/PaymentDetails.module.css';
import backgroundPic from '../PaymentDetailsImages/BackGroundPic.png';
import CashdonationDropdown from './CashdonationDropdown';
// import RedEllipse from '../PaymentDetailsImages/RedEllipse.png';
// import yellowEllipse from '../PaymentDetailsImages/yellowEllipse.png';
import {Link} from 'react-router-dom';
export default function PaymentDetails() {

  const [paymentDetails, setPaymentDetails] = useState({
    card_number: '',
    Card_Holder: '',
    expiry_date: '',
    CVC_code: '',
    amount: '',
    address: '',
    state: '',
    zip_code: '',
    foundation_name: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value});
};

const handleDropdownChange = (e) => {
  const { value } = e.target;
  setPaymentDetails({ ...paymentDetails, foundation_name: value });
};
  
  const handleSubmit = (e) => {
    // e.preventDefault();  // -> this is to prevent the page from refreshing
      fetch('http://localhost:3002/api/cashdonations', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
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
          const name = paymentDetails.name;
          const address = paymentDetails.address;
          const state = paymentDetails.state;
          const money = paymentDetails.amount;
        
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

          if (!/^\d+$/.test(money)) {
            alert("Money should contain only numbers.");
            return;
          }
        
          // Proceed with further logic if all checks pass
          // For example: submit the form or proceed to the next step
        };
        
        // const checkAddress = () => {
        //   const name = paymentDetails.address;
        //   if (!name || !name.trim()) {
        //     alert("Please enter a valid address without numbers.");
        //   }
        // };
        const checkCodeLength = () => {
          if (paymentDetails.CVC_code.length !== 4 || paymentDetails.zip_code.length !== 4) {
            alert("Incorrect Details in the field.");
          }
        };


  return (
    <>
{/*     
    <div className={PaymentDetailsCss.PaymentDiv}>
            <img src={backgroundPic} alt="..." className={PaymentDetailsCss.paymentDonationPic} />
          </div>
          <Link to='/'>
            <img src ={Logo} alt="..." className={PaymentDetailsCss.logo}/>
          </Link>

          <form onSubmit={handleSubmit} className={PaymentDetailsCss.form}>
            <div className={PaymentDetailsCss.form1}>
              <h1 className={PaymentDetailsCss.formHeader1}>Make a Donation</h1>
              <h2 className={PaymentDetailsCss.formHeader2}>Select Foundation</h2>
              <h2 className={PaymentDetailsCss.Charity}>Charity</h2 >
              <div className={PaymentDetailsCss.inputCharityDiv}>
                <select className={PaymentDetailsCss.FoundationsDropDown} onChange={handleDropdownChange} name='foundation_name'
                value={paymentDetails.foundation_name}>
                  {foundationName.map((item) => {
                    return<CashdonationDropdown foundationName={item.foundation_name}/>
                  })}
                </select>
              </div>
              <p className={PaymentDetailsCss.amountLabel}>Enter Amount You Want To Donate</p>
              <h2 className={PaymentDetailsCss.amount}>USD</h2>
              <div className={PaymentDetailsCss.inputamountDiv}>
              <input  className={PaymentDetailsCss.amountInput} type='text' placeholder='$200.73' 
              onChange={handleInputChange} name='amount' value = {paymentDetails.amount || ''} required />
              </div>
              <button type='text' className='ProceedBtn btn-outline-ProceedBtn' id={PaymentDetailsCss.proceedBtn}>Proceed</button>
            </div>
          
                    
            <h1 className={PaymentDetailsCss.heading}>Payment Details</h1>
            <div className={PaymentDetailsCss.stateHeader}>State</div>
            <div className={PaymentDetailsCss.CityHeader}>Address</div>
            <div className={PaymentDetailsCss.CvcHeader}>CVC</div>
            <div className={PaymentDetailsCss.ZipHeader}>Zip Code</div>
            <div className={PaymentDetailsCss.CardNumHeader}>Card Number</div>
            <div className={PaymentDetailsCss.HolderHeader}>Card Holder</div>

            <div className={PaymentDetailsCss.StateInputDiv}>
              <input  className={PaymentDetailsCss.stateInput} type='text' placeholder='State' 
              onChange={handleInputChange} name='state'  value = {paymentDetails.state || ''} required  />
            </div>

            <div className={PaymentDetailsCss.CityInputDiv}>
              <input  className={PaymentDetailsCss.cityInput} type='text' placeholder='City' 
              onChange={handleInputChange} name='address'  value = {paymentDetails.address || ''} required />
            </div>

            <div className={PaymentDetailsCss.CvcInputDiv}>
            <input  className={PaymentDetailsCss.CvcInput} type='text' placeholder='x x x x' 
             onChange={handleInputChange} name='CVC_code'  value = {paymentDetails.CVC_code || ''} required/>
            </div>

            <div className={PaymentDetailsCss.ZipInputDiv}>
            <input  className={PaymentDetailsCss.zipCodeInput} type='text' placeholder='Zip Code' 
             onChange={handleInputChange} name='zip_code'  value = {paymentDetails.zip_code || ''} required/>
            </div>

            <div className={PaymentDetailsCss.CardNumInputDiv}>
              <input  className={PaymentDetailsCss.CardNumInput} type='text' placeholder='9870 8880 8880 8880'
               onChange={handleInputChange} name='card_number'  value = {paymentDetails.card_number || ''} required/>
            </div>

            <div className={PaymentDetailsCss.HolderInputDiv}>
              <input  className={PaymentDetailsCss.HolderInput} type='text' placeholder="Holder's Name" 
              onChange={handleInputChange} name='Card_Holder'  value = {paymentDetails.Card_Holder || ''} required/>
            </div>
               <button type="submit" className={PaymentDetailsCss.DonateBtn}>Donate Now</button>
        </form> */}

<div className={PaymentDetailsCss.BackGroundPic}>
            <img src={backgroundPic} alt="..." className={PaymentDetailsCss.BackGroundPic} />
          </div>
          <Link to='/'>
            <img src ={Logo} alt="..." className={PaymentDetailsCss.logo}/>
          </Link>

          <form onSubmit={handleSubmit} className={PaymentDetailsCss.form}>
            <div className={PaymentDetailsCss.form1}>
              <h1 className={PaymentDetailsCss.formHeader1}>Make a Donation</h1>
              <h2 className={PaymentDetailsCss.formHeader2}>Select Foundation</h2>
              <h2 className={PaymentDetailsCss.Charity}>Charity</h2 >
              <div className={PaymentDetailsCss.inputCharityDiv}>
                <select className={PaymentDetailsCss.FoundationsDropDown} onChange={handleDropdownChange} name='foundation_name'
                value={paymentDetails.foundation_name}>
                  {foundationName.map((item) => {
                    return<CashdonationDropdown foundationName={item.foundation_name}/>
                  })}
                </select>
              </div>
              <p className={PaymentDetailsCss.amountLabel}>Enter Amount You Want To Donate</p>
              <h2 className={PaymentDetailsCss.amount}>USD</h2>
              <div className={PaymentDetailsCss.inputamountDiv}>
              <input  className={PaymentDetailsCss.amountInput} type='text' placeholder=' $200.73' 
              onChange={handleInputChange} name='amount' value = {paymentDetails.amount || ''} required />
              </div>
            </div>
                    
            <h1 className={PaymentDetailsCss.heading}>Payment Details</h1>
            <div className={PaymentDetailsCss.stateHeader}>State</div>
            <div className={PaymentDetailsCss.CityHeader}>Address</div>
            <div className={PaymentDetailsCss.CvcHeader}>CVC</div>
            <div className={PaymentDetailsCss.ZipHeader}>Zip Code</div>
            <div className={PaymentDetailsCss.CardNumHeader}>Card Number</div>
            <div className={PaymentDetailsCss.HolderHeader}>Card Holder</div>

            <div className={PaymentDetailsCss.StateInputDiv}>
              <input  className={PaymentDetailsCss.stateInput} type='text' placeholder='  State' 
              onChange={handleInputChange} name='state'  value = {paymentDetails.state || ''} required  />
            </div>

            <div className={PaymentDetailsCss.CityInputDiv}>
              <input  className={PaymentDetailsCss.cityInput} type='text' placeholder=' City' 
              onChange={handleInputChange} name='address'  value = {paymentDetails.address || ''} required />
            </div>

            <div className={PaymentDetailsCss.CvcInputDiv}>
            <input  className={PaymentDetailsCss.CvcInput} type='text' placeholder='  x x x x' 
             onChange={handleInputChange} id ='CVCInput' name='CVC_code'  value = {paymentDetails.CVC_code || ''} required/>
            </div>

            <div className={PaymentDetailsCss.ZipInputDiv}>
            <input  className={PaymentDetailsCss.zipCodeInput} type='text' placeholder='  zip Code' 
             onChange={handleInputChange} id ='codeInput' name='zip_code'  value = {paymentDetails.zip_code || ''} required/>
            </div>

            <div className={PaymentDetailsCss.CardNumInputDiv}>
              <input  className={PaymentDetailsCss.CardNumInput} type='text' placeholder='  9870 8880 8880 8880'
               onChange={handleInputChange} name='card_number'  value = {paymentDetails.card_number || ''} required/>
            </div>

            <div className={PaymentDetailsCss.HolderInputDiv}>
              <input  className={PaymentDetailsCss.HolderInput} type='text' placeholder=" Holder's Name" 
              onChange={handleInputChange} name='Card_Holder'  value = {paymentDetails.Card_Holder || ''} required/>
            </div>
            {/* <Link to='/DonationSuccessful'> */}
               <button type="submit" className={PaymentDetailsCss.DonateBtn} onClick={checkCodeLength && checkNameCorrectness}>Donate Now</button>
            {/* </Link> */}
        </form>

    </>
    );
}
