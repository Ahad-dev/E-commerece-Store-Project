import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const PasswordInput = ({value,onChange}) => {
  const [showPassword, setshowPassword] = useState(true);
  return (
    <div className="flex relative">
      <input
        type={!showPassword ? "text" : "password"}
        placeholder="Password"
        className="py-4 px-3 bg-transparent border-2 border-black/10 text-black rounded-lg outline-none flex-1 "
        value={value}
        onChange={onChange}
      />
      {showPassword ? (
        <FaRegEye
          className="absolute right-3 top-4 cursor-pointer"
          size={22}
          color="rgb(59 130 246)"
          onClick={() => setshowPassword(!showPassword)}
        />
      ) : (
        <FaRegEyeSlash
          className="absolute right-3 top-3 cursor-pointer"
          size={22}
          color="gray"
          onClick={() => setshowPassword(!showPassword)}
        />
      )}
    </div>
  );
};

export default PasswordInput;
