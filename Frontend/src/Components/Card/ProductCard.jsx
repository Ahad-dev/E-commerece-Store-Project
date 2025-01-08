import React, { useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";
import Favourite from "../Favourite/Favourite";
import {AddToFavourite,RemoveFromFavourite,getFavourite} from "../../Services/User"
import { toast } from "react-hot-toast";

const ProductCard = ({product,handleCart}) => {

  const [favourite, setFavourite] = useState(false);
  const [FaviouriteP,setFavouriteP] = useState([]);

  useEffect(()=>{
    const fetchFavourite =async ()=>{
      const data = await getFavourite();
      setFavouriteP(data);
      //Check weather data have product._id or not
      const check = data.find(d=>d._id===product._id);
      if(check){
        setFavourite(true);
      } 
      else{
        setFavourite(false)
      }
    } 
    fetchFavourite()

  },[])



  const handleFavourite = async()=>{
    console.log(favourite)
    if(favourite){
      const data = await RemoveFromFavourite(product._id); 
      toast.success("Removed From Favourite");
      console.log(data);
    }else{
      const data = await AddToFavourite(product._id);
      toast.success("Added To Favourite");
      console.log(data);
    }
  }
  
  return (
    <div className="w-64 space-y-2">
      <div className="relative h-72 w-64 flex flex-col justify-between">
        <div className="h-full w-full bg-gray-500/10 absolute"></div>
        <div className="flex justify-between">
          <div className="relative space-y-3 ml-3 mt-3">
            <p className="py-1 px-4 bg-white shadow-xl rounded-lg  text-black font-semibold transition-all duration-300 hover:scale-110">
              NEW
            </p>
            <p className="py-1 px-4 bg-green-500 shadow-xl rounded-lg  text-white font-semibold transition-all duration-300 hover:scale-110">
              -50%
            </p>
          </div>
          <Favourite favourite={favourite} setFavourite={setFavourite} handleFavourite={handleFavourite}></Favourite>
        </div>
        <button className="p-3 mr-3 ml-3 mb-3 relative bg-black text-white font-semibold rounded-xl transition-all duration-300 hover:scale-110" onClick={()=>handleCart(product._id)}>
          ADD TO CART
        </button>
      </div>
      <StarRating className = "transition-all duration-300 hover:scale-110"></StarRating>
      <div>
        <p className="text-gray-950 font-semibold">{product.name}</p>

        <span className="text-gray-950 font-semibold">$ {product.price}</span>
        <span className="ml-3 text-gray-950/30 font-semibold line-through">
          $ 299.00
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
