import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductCard from '../Card/ProductCard';
import { Link } from 'react-router-dom';
import { Products } from "../../lib/Products";

 

const Slider = ({handleCart}) => {
  const [shopProduct,setShopProduct] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const fetchProduct = async()=>{
      const data = await Products()
      setShopProduct(data);
      setLoading(false);
    }
    fetchProduct();
  },[])


  return (
    <>
        <div className='w-2/3 flex justify-between mt-10 m-auto'>
            <h1 className='text-4xl font-semibold'>NEW ARRIVALS</h1>
            <Link to="/shop" className='hover:scale-105 transition-all duration-500 cursor-pointer'>More Products<IoIosArrowRoundForward size={30} /></Link>
        </div>
        <div className='w-2/3 max-[500px]:w-10/12 scroll-m-0 scrollbar-thin p-10 scrollbar-thumb-slate-700 scrollbar-track-transparent overflow-y-hidden overflow-scroll gap-12 flex m-auto mt-10'>
          {loading?<p>Loading...</p>:shopProduct.map((p,i)=>(

            <ProductCard key={i} product={p} handleCart={handleCart}></ProductCard>
          ))}


        </div>
    </>
  )
}

export default Slider