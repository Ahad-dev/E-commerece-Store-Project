import React, { useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";
import { FaSearch } from "react-icons/fa";

const FilterTab = ({ handleDropCSearch, products, handleDropPSearch }) => {
  const [option, setOption] = useState(["All"]);

  useEffect(() => {
    console.log(products);

    let opt = ["All"];
    products.map((p) => {
      if (opt.find((o) => o === p.category)) {
      }else {

        opt.push(p.category);
      }

    });
    setOption(opt);
  }, []);
  const handleDrop1Search = () => {
    console.log("search");
  };
  return (
    <div className="flex gap-5 justify-center flex-wrap">
      <DropDown
        icon={FaSearch}
        name="Category"
        options={option}
        handleDropSearch={handleDropCSearch}
      ></DropDown>
      <DropDown
        icon={FaSearch}
        name="Price"
        options={["All", "$ 500-$ 1000", "$ 1000-$ 1500", "$ 1500-$ 2000"]}
        handleDropSearch={handleDropPSearch}
      ></DropDown>
      <DropDown
        icon={FaSearch}
        name="Sorted By"
        options={["PC", "Consoles", "Mobiles"]}
        handleDropSearch={handleDrop1Search}
      ></DropDown>
    </div>
  );
};

export default FilterTab;
