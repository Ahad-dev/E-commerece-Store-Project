import React, { useEffect, useState } from 'react'
import {getFavourite,RemoveFromFavourite} from "../../../Services/User"
import ProductCard from '../../../Components/Card/ProductCard';


const FavouriteProducts = ({handleCart}) => {
  const [FaviouriteP,setFavouriteP] = useState([]);


  


  useEffect(()=>{
    const fetchFavourite =async ()=>{
      const data = await getFavourite();

      setFavouriteP(data);

    } 
    fetchFavourite()

  },[])

  const handleRemoveClick = async(id)=>{
    const data = await RemoveFromFavourite(id); 
    console.log(data)
    const newFavourite = FaviouriteP.filter(f=>f._id!==id);
    setFavouriteP(newFavourite);
  }

  return (
<div className='flex flex-wrap gap-4'>  
    {FaviouriteP.length===0?<p>No Favourite Product</p>:FaviouriteP?.map((product,i)=>(
      <div className='flex flex-col'>
      <ProductCard product={product} key={i} handleCart={handleCart} />
      <button onClick={()=>handleRemoveClick(product._id)} className='text-center p-3 bg-red-600 text-white font-semibold rounded-xl mt-3'>Remove</button>
      </div>
    ))}
    
</div>
  )
}

export default FavouriteProducts