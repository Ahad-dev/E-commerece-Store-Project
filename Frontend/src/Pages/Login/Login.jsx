import React, { useState } from 'react'
import PasswordInput from '../../Components/Inputs/PasswordInput'
import { Link } from 'react-router-dom'
import {LoginUser} from "../../Services/Auth"
import { useAuth } from '../../Context/AuthContext'
import { useNavigate  } from 'react-router-dom'
import { motion } from 'framer-motion'
import {toast} from 'react-hot-toast'


const Login = ({setUser}) => {
  const {login} = useAuth();

  const navigate = useNavigate ();

  const [body,setBody] = useState({
    email:"",
    password:""
    
  })
  const [error,setError] = useState(null);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(body.email == ''||body.password == ''){
      setError("Fill the The Fields")
      toast.error("Fill the The Fields")
    }
    else{
      const data = await LoginUser(body);
      localStorage.setItem("token",data.token);
      localStorage.setItem("user",data.user.email);
      console.log(data.user);
      setUser(data.user);
      login();
      navigate("/")
      toast.success("Login Successfull")

    }
  }


  return (
    <>
     <motion.div 
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
     className='flex justify-center items-center'>
      <div className='flex flex-col text-center gap-10 w-[29rem] h-full mt-16 bg-white/50 p-10 rounded-lg shadow-lg '>
        <h1 className='text-5xl font-semibold '>Login</h1>
        <div className='flex flex-col gap-5'>
          <input type="text" placeholder="Email" value={body.email} onChange={({target})=>setBody({...body,email:target.value})}  className="py-4 px-3 bg-transparent border-2 border-black/10 text-black rounded-lg outline-none flex-1 "/>
          <PasswordInput value={body.password} onChange={({target})=>setBody({...body,password:target.value})}></PasswordInput>
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button type="submit" onClick={handleSubmit} className='bg-black/90 text-white p-3 rounded-lg'>Login</button>
        </div>
        <p className='text-sm text-black/50'>Don't have an account? <Link to="/signup" className='text-green-500 hover:underline'>Sign Up</Link></p>
      </div>
     </motion.div>
    </>
  )
}

export default Login