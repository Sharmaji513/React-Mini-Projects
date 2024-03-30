import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';


// components


const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [ShowOTPInput, setShowOTPInput] = useState(false);
  
  const [generatedOtp, setGeneratedOtp] = useState(null)

  const length= 4
  const [otp, setOtp] = useState(Array.from({ length }, () => ''));

  const inputRefs = useRef([]);
 
// Focusing on the first input box for the OTP
  useEffect( () => {
   if (ShowOTPInput && inputRefs.current[0]){
    inputRefs.current[0].focus();
   }
  }, [ShowOTPInput])

 // Mobile login 
 // User details
  const handleMobileNumberChange = (e) => {
    const input = e.target.value;
    // Allow only numbers
    const numbersOnly = input.replace(/[^0-9]/g, '');    
    // Limit to 10 digits
    // const maxDigits = numbersOnly.slice(0, 10);   
    setMobileNumber(numbersOnly);
  };


 
// Send OTP button error and OTP generation
  const handleSendOTP = () => {
    // Add your logic for sending OTP here
    if (mobileNumber.trim() === ''){
      toast.error('Please enter your mobile number first.');
    } else {   
      // Generating OTP
      const newOtp = Math.floor(1000 + Math.random() *9000);
      setGeneratedOtp(newOtp)
      // toastify a random OTP      
      toast.success(`Sending ${newOtp} to mobile number:, ${mobileNumber}`);      
      setShowOTPInput(true);
      
    }
    
  };
  

// OTP login 

  const handleChnage = (index,e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp]
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // const combinedOtp = newOtp.join("");
    // if (combinedOtp.length === length) handleOtpSubmit(combinedOtp)

    // Move to next input if curret field is filled
    if (value && index < length -1 && inputRefs.current[index+1]){
      inputRefs.current[index+1].focus();
    }
  };

  const handleClick = (index) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index].focus();
    }


  };

  const handleKeyDown = (index,e) => {
    if (
      e.key === "Backspace" && 
      !otp[index] && 
      index > 0 && 
      inputRefs.current[index -1]
    ) {
      inputRefs.current[index -1].focus();
    }
  };

  const handleOtpSubmit = () => {
    const enteredOtp = otp.join('');
    console.log(enteredOtp)
    if (enteredOtp === generatedOtp.toString()) {
      toast.success('Login Successful!');
    } else{
      toast.error('Invalid Otp. Please try again.');
    }
  }


  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Navbar/>
      <div>
        <div className="flex flex-col items-center justify-center h-96 ">
            <div className="w-96 p-6 bg-white border rounded-md shadow-md flex flex-col justify-center  ">
              <h1 className='flex justify-center text-gray-700 font-bold mb-4'>Login Via OTP</h1>
              {!ShowOTPInput ? (
              <div className="flex flex-col w-80 rounded-md justify-center items-center ">
                <input
                  type="tel"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  id="mobileNumber"
                  className="flex-grow text-center border-2 border-gray-300 rounded-md p-2 mb-3 w-80 "
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  maxLength="10"
                />
                <button
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 w-48 justify-center "
                  type='submit'
                  onClick={handleSendOTP}
                >
                  Send OTP
                </button>
                <ToastContainer position='bottom-right' />
              </div>
              ) : (
                <div className=' flex flex-col items-center  '>
                <div className="flex flex-row">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    ref = {(input) => (inputRefs.current[index] = input)}
                    maxLength="1"
                    value={value}
                    onChange ={(e) => handleChnage(index, e)}
                    onClick = {() => handleClick(index)}
                    onKeyDown = {(e) => handleKeyDown(index,e)}
                    className="justify-center text-center border-2 border-gray-300 rounded-md p-2 mb-3 w-12 h-12 m-2 "
                  />
                )
                )}
                </div>
                <button
                  className=" bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 w-48 "
                  type='submit'
                  onClick={handleOtpSubmit}
                  onSubmit={handleOtpSubmit}
                >
                  Login
                </button>
                <ToastContainer position='bottom-right' />
               
                </div>
            )}
            </div>      
        </div>
    </div>
  </div>
  );
};




export default Login;
