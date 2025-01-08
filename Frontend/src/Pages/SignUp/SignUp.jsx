import React, { useState } from 'react'
import PasswordInput from '../../Components/Inputs/PasswordInput'
import { Link } from 'react-router-dom'
import {regsiter} from '../../Services/Auth'
import { useNavigate  } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import { motion } from 'framer-motion'
import {toast} from 'react-hot-toast' 

const SignUp = ({setUser}) => {
  const navigate = useNavigate ();
  const {login} = useAuth();

  const [body,setBody] = useState({
    username:'',
    fullname:'',
    email:'',
    password:'',
  }); 
  const [error,setError] = useState(null);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(body.username === '' || body.fullname === '' || body.email === '' || body.password === ''){
      setError('Please fill all the fields')
      toast.error("Please fill all the fields")
    }else{
      setError(null)
      const token = await regsiter(body)
      localStorage.setItem("token",token);
      login();
      //wait for 1 second
      toast.success("Account created successfully")
      await new Promise(r=>setTimeout(r,100))

      navigate("/")

    }
  }
  return (
     <motion.div
      initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
     className='flex justify-center items-center'>
      <div className='flex flex-col text-center gap-10 w-[29rem] h-full mt-16 bg-white/50 p-10 rounded-lg shadow-lg '>
        <h1 className='text-5xl font-semibold '>Sign Up</h1>
        <div className='flex flex-col gap-5'>
          <input type="text" placeholder="Username" value={body.username} onChange={({target})=>setBody({...body,username:target.value})}  className="py-4 px-3 bg-transparent border-2 border-black/10 text-black rounded-lg outline-none flex-1 "/>
          <input type="text" placeholder="Full Name" value={body.fullname} onChange={({target})=>setBody({...body, fullname:target.value})} className="py-4 px-3 bg-transparent border-2 border-black/10 text-black rounded-lg outline-none flex-1 "/>
          <input type="text" placeholder="Email" value={body.email} onChange={({target})=>setBody({...body,email:target.value})} className="py-4 px-3 bg-transparent border-2 border-black/10 text-black rounded-lg outline-none flex-1 "/>
          <PasswordInput value={body.password} onChange={({target})=>setBody({...body,password:target.value})}></PasswordInput>
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button type="submit" onClick={handleSubmit} className='bg-black/90 text-white p-3 rounded-lg'>SignUp</button>
        </div>
        <p className='text-sm text-black/50'>Already have an account? <Link to="/login" className='text-green-500 hover:underline'>Login</Link></p>
      </div>
     </motion.div>
  )
}

export default SignUp