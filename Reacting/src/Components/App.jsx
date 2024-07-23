import React, { useState } from "react";
import Nav from "./Nav";
import MusicCard from "./MusicCard";

function App() {
  const artworks = [
    {
      add: false,
      name: "Starry Night",
      artist: "Vincent van Gogh",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    },
    {
      add: false,
      name: "Mona Lisa",
      artist: "Leonardo da Vinci",
      image: "https://picsum.photos/200/300?random=6",
    },
    {
      add: false,
      name: "The Starry Night",
      artist: "Edvard Munch",
      image: "https://picsum.photos/200/300?random=4",
    },
    {
      add: false,
      name: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      add: false,
      name: "The Persistence of Memory",
      artist: "Salvador Dalí",
      image: "https://picsum.photos/200/300?random=1",
    },
    // Add more objects with similar structure as needed
  ];

  const [data, setData] = useState(artworks);
  const handleClick = (index) => {
    setData(() => {
      return data.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            add: !item.add,
          };
        }
        return item;
      });
    });
  };

  return (
    <div className=" w-full h-screen bg-zinc-300 px-20 ">
      <Nav count = {data} />
      <div className="flex justify-center gap-6 flex-wrap mt-4 ">
        {data.map((item, index) => (
          <MusicCard index={index} song={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
