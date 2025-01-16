import React from 'react'
import { sendVerificationCode } from '../../Services/Auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const EmailNotVerifyBadge = () => {
  const navigate = useNavigate();
  const handleClick = async() => {
    const data = await sendVerificationCode();

    console.log(data);
    //if data.success is true then show a success toast and redirect to the /verify page
    if(data.success){
      //show a success toast
      toast.success("Verification Code Sent")
      //redirect to /verify
      setTimeout(() => {
        navigate('/verify')
      }, 1000);
    }else{
      //else show an error toast
      toast.error("Error")

    }

  }
  return (
    <div className='m-auto w-full bg-emerald-500/20 border-emerald-500 border rounded-lg text-center py-10 text-emerald-700 font-semibold text-xl mt-56'>Please Verify your Email First <button onClick={handleClick}>Send Verification Code</button></div>
  )
}

export default EmailNotVerifyBadge