import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
// import { isAuthenticated } from "../../Services/Auth";
import { useAuth } from "../../Context/AuthContext";
//Profile Icon  from react Icons




const Navbar = ({ cart }) => {
  const {isAuthenticated,logout} = useAuth();
  console.log(cart);
  return (
    <nav className="flex p-5 justify-around items-center">
      <Link
        to="/"
        className="text-5xl font-semibold hover:scale-105 transition-all"
      >
        3lectronic.
      </Link>
      {isAuthenticated?
       <ul className="flex gap-9 max-sm:hidden justify-center items-center">
       <li className="hover:scale-105">
         <Link
           to="/shop"
           className="py-3 px-5 bg-transparent hover:bg-black/50 hover:text-white rounded-lg transition-all"
         >
           Shop
         </Link>
       </li>
       <li className="hover:scale-105 p-3 bg-transparent hover:bg-black/50  hover:text-white rounded-lg transition-all">
         <Link to="/cart">
           <div className="flex relative">
             <FaShoppingCart size={25} />
             <span className="absolute -top-2 -right-6 text-black font-semibold shadow-lg  px-2 bg-white rounded-full text-sm">
               {cart.items?.length}
             </span>
           </div>
         </Link>
       </li>
       <li className="hover:scale-105">
         <Link
           to="/Personalinformation"
           className="py-3 px-5 bg-transparent hover:bg-black/50 hover:text-white rounded-lg transition-all"
         >
           Profile
         </Link>
       </li>
       <li className="cursor-pointer hover:scale-105 py-3 px-5 bg-transparent hover:bg-black/50 hover:text-white rounded-lg transition-all" onClick={()=>{logout();localStorage.removeItem('token')}}>        
           Logout
       </li>
     </ul>
      :

      <ul className="flex gap-9 max-sm:hidden justify-center items-center">
        <li className="hover:scale-105">
          <Link
            to="/shop"
            className="py-3 px-5 bg-transparent hover:bg-black/50 hover:text-white rounded-lg transition-all"
          >
            Shop
          </Link>
        </li>

        <li className="hover:scale-105">
          <Link
            to="/login"
            className="py-3 px-5 bg-transparent hover:bg-black/50 hover:text-white rounded-lg transition-all"
          >
            Login
          </Link>
        </li>
        <li className="hover:scale-105">
          <Link
            to="/signup"
            className="py-3 px-5 bg-transparent hover:bg-black/50  hover:text-white rounded-lg transition-all"
          >
            Sign Up
          </Link>
        </li>
        <li className="hover:scale-105 p-3 bg-transparent hover:bg-black/50  hover:text-white rounded-lg transition-all">
          <Link to="/cart">
            <div className="flex relative">
              <FaShoppingCart size={25} />
              <span className="absolute -top-2 -right-6 text-black font-semibold shadow-lg  px-2 bg-white rounded-full text-sm">
                {cart?.items?.length}
              </span>
            </div>
          </Link>
        </li>
      </ul>
      }

    </nav>
  );
};

export default Navbar;