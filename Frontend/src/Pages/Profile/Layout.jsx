import React, { useEffect, useState } from 'react'
import ProfileAvatar from '../../Components/Avatar/ProfileAvatar'
import ProfileSideBar from "../../Components/ProfileSideBar/ProfileSideBar"
import { Link, Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import { getUser } from '../../Services/User'
import EmailNotVerifyBadge from '../../Components/VerifyEmail/EmailNotVerifyBadge'

const Layout = () => {
  const { isAuthenticated,logout } = useAuth();
  const [verified,setVerified] = useState(false);
  const [loading,setLoading] = useState(true);
  useEffect( ()=>{

    const fetchUser = async()=>{
      const data = await getUser();
      console.log(data)
      setLoading(false);
      console.log(data)
      if(data.user.isVerified){
        setVerified(true);
      }

    }
    fetchUser()
  },[])
  const handleLogout = () => {
    localStorage.removeItem("token")
    logout();
  };


  return ( isAuthenticated ? (
    <>
      <div className='flex justify-end '>
        <div className='flex flex-col justify-center items-center gap-5 fixed top-0 left-0 max-lg:hidden'>
          <h1 className='text-3xl font-semibold text-center hover:scale-110 transition-all duration-300 mb-14'>
            <Link to="/">Home</Link>
          </h1>
          <ProfileAvatar />
          <ProfileSideBar />
          <button onClick={handleLogout}>Logout</button> {/* Add a logout button */}
        </div>
        <main className='p-10 w-[80vw] flex flex-col gap-24 max-lg:w-full'>
          {loading?<p>loading...</p>:
            verified?
            <Outlet />:
            <EmailNotVerifyBadge/>
          }
        </main>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  )
  )
}

export default Layout