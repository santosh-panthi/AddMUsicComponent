import React, { useState } from "react";

export default function UseState() {
  //   const [val, setval] = useState(0);
  // const [users, setUsers] = useState({
  //   name: "hari",
  //   isbanned: true,
  // });

  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <div className="p-5">
      {arr.map((item) => (
        <h1> {item}</h1>
      ))}
      <button
        // onClick={() => {
        //   setArr(arr.filter((item, index) => index !== arr.length - 1));
        // }}
        onClick={() => {
          setArr(arr.filter((item, index) =>  item%2 === 1));
        }}
   
        
        className="px-2 py-1 bg-blue-400 rounded-full text-zinc-100 mt-2"
      >
        Delete
      </button>

      {/* <h1>Name: {users.name}</h1>
      <h2>banned: {users.isbanned.toString()}</h2>
      <button
        onClick={() => setUsers({ ...users, isbanned: !users.isbanned })}
        className={`px-2 py-1 ${
          users.isbanned ? "bg-blue-400" : "bg-red-400"
        } rounded-full text-zinc-100 mt-2`}
      >
        {users.isbanned ? "unban" : "  ban"}
      </button> */}

      {/* <h1>{val}</h1> */}
      {/* <button
        onClick={() => {
          setval(val + 1);
        }}
        className="px-2 py-1 bg-blue-400 rounded-full text-zinc-100 mt-2"
      >
        Increase
      </button> */}
      {/* <button
        onClick={() => {
          setval((prev) => prev + 1);
        }}
        className="px-2 py-1 bg-blue-400 rounded-full text-zinc-100 mt-2"
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          setval(val - 1);
        }}
        className="px-2 py-1 bg-blue-400 rounded-full text-zinc-100 mt-2"
      >
        Decrease
      </button> */}
    </div>
  );
}
