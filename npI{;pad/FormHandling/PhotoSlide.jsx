import React, { useState } from "react";

export default function PhotoSlide() {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="relative w-60 h-32 rounded-md flex overflow-hidden">
        <img
          className={`transition-transform	ease-linear duration-300 shrink-0 ${
            val ? "-translate-x-[90%]" : "-translate-x-[10%]"
          } w-full h-full object-cover`}
          src="https://images.pexels.com/photos/18206912/pexels-photo-18206912/free-photo-of-couple-by-house-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className={`transition-transform	ease-linear duration-300 shrink-0  ${
            val ? "-translate-x-[90%]" : "-translate-x-[10%]"
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span
          onClick={() => setVal(() => !val)}
          className="w-8 h-8 flex items-center justify-center bg-[#dadada8b] rounded-full absolute bottom-2 left-1/2"
        >
          <button className=" bg-blue-600">Next</button>
        </span>
      </div>
    </div>
  );
}
