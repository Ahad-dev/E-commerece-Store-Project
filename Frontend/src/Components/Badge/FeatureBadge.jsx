import React from "react";
import { feature } from "../../lib/feature";

const FeatureBadge = () => {
  return (
    <div className="flex justify-center gap-10 flex-wrap mt-10">
      {feature.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className=" p-10 border-[1px] shadow-lg bg-gray-200 flex-col text-black text-center flex flex-wrap gap-2 items-center justify-center">
            <Icon size={40} />
            <h2 className="font-semibold text-xl">{item.title}</h2>
            <p className="text-gray-600">{item.detail}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureBadge;
