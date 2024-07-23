import React from "react";

function MusicCard({ song, handleClick, index }) {
  const { image, name, artist, add } = song;
  return (
    <div className="relative gap-2  w-52 bg-zinc-100 rounded-md flex justify-between mt-10 p-4 pb-6">
      <div className=" mt-2 bg-orange-400 flex-shrink-0 h-20 w-20 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="py-1 flex gap-1 flex-col justify-start items-start">
        <h3 className=" leading-none font-semibold my-1">{name}</h3>
        <p className="text-sm ">{artist}</p>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={` absolute ${add ? "bg-purple-600" : "bg-orange-500 "
          } rounded-full text-sm text-white px-2 py-1 bottom-0 left-1/2 whitespace-nowrap translate-x-[-50%] translate-y-[50%]`}>
        {/* {" "} */}
        {add ? "Added" : "Add to Favourite"}
      </button>
    </div>
  );
}

export default MusicCard;
