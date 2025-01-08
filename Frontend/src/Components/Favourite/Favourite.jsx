import React,{useState} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Favourite = ({handleFavourite,setFavourite,favourite}) => {
    const [hover,setHover] = useState(false);

  return (
    <div>
        <div className='relative h-10 w-10 mr-3 mt-3 flex justify-center items-center hover:scale-110 transition-all duration-300 bg-white shadow-lg rounded-full' onClick={()=>setFavourite(!favourite)} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            {favourite || hover ? <FaHeart size={20} onClick={handleFavourite} /> : <FaRegHeart size={20} onClick={handleFavourite}/>}
        </div>
    </div>
  )
}

export default Favourite