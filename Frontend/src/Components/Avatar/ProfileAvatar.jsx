import React from 'react'
import ProfileIMG from '/profile.jpeg'

const ProfileAvatar = () => {
  return (
    <div className='w-32 h-32 overflow-hidden rounded-full shadow-lg'>
        <img src={ProfileIMG} alt="PROFILE" />
    </div>
  )
}

export default ProfileAvatar