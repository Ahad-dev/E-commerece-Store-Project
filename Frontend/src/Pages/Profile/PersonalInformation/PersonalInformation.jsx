import React, { useEffect, useState } from 'react'
import Button from '../../../Components/Buttons/Button'
import { getUser, updateUser } from '../../../Services/User';
import {FaEdit} from 'react-icons/fa'
import ProfilePicChange from '../../../Components/ProfilePicChange/ProfilePicChange';
import { Loader } from 'rsuite';

const PersonalInformation = ({user,setUser}) => {

  const [edit,setEdit] = useState(false);
  useEffect(()=>{
    const fetchUser = async()=>{
      const data = await getUser();
      console.log(data)
      setUser(data);
    }
   fetchUser()
    console.log(localStorage.getItem("user"))
  },[])

  console.log(user)

  const handleUpdate = async()=>{
    console.log(user)
    const data = await updateUser(user)
    console.log(data);

  }

  const handleUploadPhoto = ()=>{

  }

  
  return (

    <>
              

      {/* <img src={user.profilePic} alt="asdf" /> */}
        <h1 className='font-bold text-6xl text-center'>Personal Information</h1>
        <div className='flex justify-between items-center gap-24 mr-24'>
          {user&&<ProfilePicChange url = {user.profilePic}/>}
          <div className='flex gap-10 flex-col flex-wrap flex-grow'>
            {edit?<>
            <input type="text" onChange={({target})=>setUser({...user,username:target.value})} className='bg-transparent outline-none border-b-[1px] flex-1 flex-grow border-black/40 rounded-lg p-3 text-black font-normal' placeholder='Username' value={user.username} />
            <button className='cursor-pointer p-3 bg-blue-700 text-white font-bold' onClick={()=>setEdit(!edit)}>Done</button>
            </>
            :<p className='flex justify-between gap-10 bg-transparent outline-none border-b-[1px] flex-1 flex-grow border-black/40 p-3 text-black font-normal' >{user.username} <span className='cursor-pointer hover:scale-105 transition-all' onClick={()=>setEdit(!edit)}><FaEdit size={25} /></span></p>}
            <input type="text" onChange={({target})=>setUser({...user,address:target.value})} value={user.address} className='bg-transparent outline-none border-b-[1px] flex-1 flex-grow border-black/40 rounded-lg p-3 text-black font-normal' placeholder='Shipping Address' />
            <input type="text" onChange={({target})=>setUser({...user,phoneNumber:target.value})} value={user.phoneNumber} className='bg-transparent outline-none border-b-[1px] flex-1 flex-grow border-black/40 rounded-lg p-3 text-black font-normal' placeholder='Phone Number' />

          <button onClick={handleUpdate} className='bg-gradient-to-r from-orange-500 to-red-500 p-3 text-white rounded-lg after:w-5 after:h-5 after:bg-green-950 '>Update</button>
          </div>
        </div>
          
    </>
  )
}

export default PersonalInformation