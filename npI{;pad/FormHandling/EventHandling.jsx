import React from "react";

export default function EventHandling() {
  const data = [
    {
      name: "Faded",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur?",
    },
    {
      name: "Alone",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur?",
    },
  ];
  const PlayMusicEvent = ()=>{alert("Playing")}

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center">
      {
        data.map((element, index) => (
          <div key={index} className=" w-80 px-3 py-2 bg-zinc-100 rounded-md">
        <h3 className="font-semibold text-xl">{element.name}</h3>
        <p className="text-xs mt-2">
          {element.description}
        </p>
        <button onClick= {PlayMusicEvent} className="mt-2 px-2 py-1 bg-blue-400 text-xs font-semibold text-zing-100 rounded-md">
          Download Now
        </button>
      </div>
          
        ))
      }
    </div>
  );
}
