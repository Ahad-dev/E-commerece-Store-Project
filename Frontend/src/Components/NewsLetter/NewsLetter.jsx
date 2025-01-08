import React from "react";
import NewsLetterIMG from "/NewsLetterIMG.jpg";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <>
      <div className="w-full h-[60vh] overflow-hidden relative z-10 mt-10 text-center  ">
        <img
          src={NewsLetterIMG}
          className="object-cover w-full h-full object-center absolute "
          alt="IMG"
        />
        <div className="w-ful h-full text-white bg-gradient-to-r from-black to-white/10 relative z-10 flex-col gap-5 flex justify-center items-center">
          <h1 className="text-5xl font-semibold">Join Our Newsletter</h1>
          <p className="text-gray-500">
            Sign up for deals, new products and promotions
          </p>
          <div className="relative">
            <label htmlFor="email" className="absolute top-3 cursor-pointer">
              <MdOutlineMailOutline size={30} className="text-white/50" />
            </label>

            <input
              id="email"
              type="text "
              className="pl-10 pr-16 py-4 bg-transparent  text-white  border-b-[2px] border-white/15 outline-none"
              placeholder="Email"
            />
            <Link to='/signup' className="absolute right-0 top-4 text-white/50 hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
