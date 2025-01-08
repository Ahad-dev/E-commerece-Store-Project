import React from "react";
import { FaSearch } from "react-icons/fa";

const DropDown = ({ handleDropSearch, name, options }) => {
  return (
    <div>
      <label htmlFor={name} className="text-black/55 font-semibold">
        {name}
      </label>
      <select
        id={name}
        name={name}
        className="bg-transparent text-grey-40 rounded-lg border-2 border-black/50 overflow-hidden relative h-14 outline-none w-56 flex justify-start gap-3 items-center"
        onChange={(e) => handleDropSearch(e.target.value)}
      >
        {options.map((option, i) => {
          return (
            <option value={option} key={i} className="bg-bla">
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
