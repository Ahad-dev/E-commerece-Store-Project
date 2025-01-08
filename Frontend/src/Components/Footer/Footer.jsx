import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="p-24 bg-black w-full flex flex-col justify-center items-center gap-10 text-white max-[500px]:p-10 text-center ">
      <section className="flex justify-between items-center w-full max-[500px]:flex-col max-[500px]:gap-5 ">
        <div className="flex gap-5 justify-center items-center max-md:flex-col ">
          <Link
            to="/"
            className="font-semibold text-xl hover:scale-110 transition-all duration-300"
          >
            3lectronics
          </Link>
          <div className="bg-white/30 h-10 w-[1px] max-md:w-10 max-md:h-[1px] "></div>
          <p className="text-white/50 ">Gift & Decoration Store</p>
        </div>
        <ul className="flex gap-5 flex-wrap max-md:flex-col max-[500px]:flex-row">
          <li className="hover:scale-110 transition-all duration-300">
            <Link to="/" className="text-white/50 hover:underline ">
              Home
            </Link>
          </li>
          <li className="hover:scale-110 transition-all duration-300">
            <Link to="/shop" className="text-white/50 hover:underline ">
              Shop
            </Link>
          </li>
          <li className="hover:scale-110 transition-all duration-300">
            <Link to="/products" className="text-white/50 hover:underline ">
              Products
            </Link>
          </li>
        </ul>
      </section>
      <hr className="w-full opacity-30" />
      <section className="flex justify-between items-center w-full max-sm:flex-col">
        <p className="text-white/50">Copyright © 2022 3lectronics.</p>
        <p className="text-white/50">All Rights Reserved.</p>
      </section>
    </div>
  );
};

export default Footer;
