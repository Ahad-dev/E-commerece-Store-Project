import React, { useEffect, useState } from 'react'
import NewsLetterIMG from "/NewsLetterIMG.jpg";

const OrderCard = ({product}) => {
    
    const [orderP,setOrderP] = useState({})

    useEffect(() => {

    
    }, [])
    
  return (
    <div className="border-b-[1px] p-2 border-black/30 max-lg:w-full flex flex-col max-lg:gap-5 max-sm:gap-3">
      <div className='gap-16 border-black/30  flex justify-between max-lg:w-full max-sm:flex-col  items-center max-lg:gap-5 max-sm:gap-3'>

      <div className="w-24 h-24">
        <img
          src={NewsLetterIMG}
          className="h-full w-full object-cover"
          alt="IMG"
        />
      </div>
         <p>{product._id}</p>
      <div>
      {product.items.map((item,i)=>(
        <div className="flex gap-5 justify-center items-center ">
        <p>{item.product.name}</p>
        <p className="">x {item.quantity}</p>
        <p className="">${item.product.price.toFixed(2)}</p>
      </div>
    ))}
    </div>
      <div className="flex gap-5 justify-center items-center max-sm:flex-col">
            <span className="text-black/60">${product.totalAmount.toFixed(2)}</span>
      </div>
      </div>
      <span className='font-semibold text-gray-900 mt-3 text-center'>Status: <span className={`font-normal ${product.status==="pending"?"text-yellow-500":"text-green-900"}`}>{product.status}</span></span>
      <span className='font-semibold text-gray-900 mt-3 text-center'>Shipping Address: <span className={`font-normal text-blue-600`}>{product.shippingAddress}</span></span>
    </div>
  )
}

export default OrderCard