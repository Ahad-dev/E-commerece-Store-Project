import React, { useState } from 'react'
import { verifyEmail } from '../../Services/Auth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { BsLock, BsLockFill } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'

const VerifyEmail = () => {
    const [code, setCode] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{

            setLoading(true)
            const data = await verifyEmail(code)
            if(data.success){
                toast.success("Email Verified")
                
                navigate('/Personalinformation')
            }
            else{
                toast.error(data.message)
            }        // console.log(code)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }
  return (
    <div className='flex justify-center items-center mt-44'>
        <form className='flex flex-col gap-10 bg-white/50 p-10 rounded-lg shadow-lg' onSubmit={handleSubmit}>
            <h1 className='text-3xl font-semibold text-neutral-800 '>Verify Your Email</h1>
            <div className='relative'>
                <div className='absolute top-3  left-2 text-gray-800/30'>
                    <FaLock size={24}/>
                </div>
            <input disabled={loading} className=' bg-transparent ring-1 ring-gray-500/30 border-none rounded-md placeholder:text-gray-500/40 shadow-sm pl-10 py-3' placeholder='code ...' type="text" onChange={({target})=>setCode(target.value)} />
            </div>
            <button disabled={loading} className={`bg-green-500 rounded-lg text-white py-2 font-semibold w-full hover:scale-105 transition-all ${loading?"bg-green-500/50":""}`} type='submit'>Verify</button>
        </form>
    </div>
  )
}

export default VerifyEmail