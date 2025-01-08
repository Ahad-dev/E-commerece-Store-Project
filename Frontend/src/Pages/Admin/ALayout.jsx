import React from "react";
import { Outlet } from "react-router-dom";

const ALayout = () => {
  return (
    <div>
      <main className="p-10 w-[80vw] flex flex-col gap-24 max-lg:w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ALayout;
