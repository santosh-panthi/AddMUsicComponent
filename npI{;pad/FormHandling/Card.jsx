import React from "react";

export default function Card({handleRemove, name , image, email, id}) {
  return (
    <div className="w-52 h-full bg-zinc-100 rounded-md flex flex-col items-center py-1">
      <div className=" mt-1 image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
        <img className="w-full h-full object-cover" src={`${image}`} alt="" />
      </div>
      <h1 className="mt-2 text-xl font-semibold ">{name}</h1>
      <h1 className="mt-0 text-xs font-semibold opacity-50">{email}</h1>

      <p className="mt-1 font-semibold text-center text-xs leading-[2vh] tracking-wider">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias!</p>
      <button onClick={ ()=>handleRemove(id)} className="px-3 py-1 bg-red-600 text-white rounded-full mt-3 font-semibold">
        Remove
      </button>
    </div>
  );
}
