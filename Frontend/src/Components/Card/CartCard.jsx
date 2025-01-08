import React, { useState } from "react";
import NewsLetterIMG from "/NewsLetterIMG.jpg";
import { MdDelete } from "react-icons/md";

const CartCard = ({product,handleInc,handleDec,handleDelete}) => {

  

  return (
    <div className="border-b-[1px] p-2 gap-16 mr-3 border-black/30  flex justify-between max-lg:w-full  items-center max-lg:gap-5 max-sm:gap-3">
      <div className="w-24 h-24">
        <img
          src={NewsLetterIMG}
          className="h-full w-full object-cover"
          alt="IMG"
        />
      </div>
      <div className="flex gap-5 justify-center items-center max-sm:flex-col">

        <p>{product.product.name}</p>
        <div className="flex justify-center gap-10 items-center max-sm:gap-4">
            <button className="font-bold text-3xl" onClick={()=>handleDec(product.product._id)}>-</button>
            <p className="p-4 bg-white/50 rounded-xl shadow-lg">{product.quantity}</p>
            <button className="font-bold text-3xl" onClick={()=>handleInc(product.product._id)}>+</button>
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center max-sm:flex-col">

        <div className="p-2 hover:bg-red-900/30 transition-all hover:scale-105 rounded-xl cursor-pointer text-red-600" onClick={()=>handleDelete(product.product._id)}>
            <MdDelete size={25} />
        </div>
            <span className="text-black/60">${product.quantity*product.product.price}</span>
      </div>
    </div>
  );
};

export default CartCard;
