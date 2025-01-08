import React from 'react'
import ShopIMG from '/BGSHOP.jpg';
const ShopPoster = () => {
  return (
    <div className='text-center w-10/12 m-auto shadow-lg h-[26rem]  flex flex-col justify-center gap-9 items-center overflow-hidden relative'>
        <img src={ShopIMG} alt="SHOP"  className='w-full h-full object-cover absolute'/>
        <h1 className='text-8xl relative text-white'>Shop Page</h1>
        <p className='relative text-white'>Let's Gear For latest design and Electronics INovations</p>
    </div>
  )
}

export default ShopPoster