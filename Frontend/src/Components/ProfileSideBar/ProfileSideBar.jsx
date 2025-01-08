import React from 'react'
import { Link } from 'react-router-dom'
import {data} from "../../lib/ProfileSideBarData"

const ProfileSideBar = () => {
  return (
    <div>
        <ul>
            {data.map((item,i)=>(
                <li key={i} className='border-b-[1px] border-black/50 text-gray-500 hover:text-gray-800 p-10 '><Link to = {item.link}>{item.heading}</Link></li>
            ))}
        </ul>
        
    </div>
  )
}

export default ProfileSideBar