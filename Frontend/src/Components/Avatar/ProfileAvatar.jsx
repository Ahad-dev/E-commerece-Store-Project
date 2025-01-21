import React from 'react'
import ProfileIMG from '/profile.jpeg'

const ProfileAvatar = ({profilePic}) => {
  return (
    <div className='w-32 h-32 overflow-hidden rounded-full shadow-lg  '>
        <img src={profilePic?profilePic:ProfileIMG}  className='h-full w-full object-cover' alt="PROFILE" />
    </div>
  )
}

export default ProfileAvatar