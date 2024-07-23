import React from "react";

function Cart() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1712100596750-f5a184222206?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon",
      description: "Lorem ipsum dolor sit amet consectetur.",
      stock: true,
    },
    {
      img: "https://images.unsplash.com/photo-1712229102477-f0d8a1b2dbd7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "flipkart",
      description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      stock: false,
    },
    {
      img: "https://images.unsplash.com/photo-1516414490660-1a7954e26981?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "apple",
      description: "asgoh agohi asoriwe agohweg asgohagriupgwrh asdvohag ohf",
      stock: true,
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1680184593480-113cb2441011?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "samsung",
      description:
        "asdgnojn weou dbvsd aa aegrphgwehu  avnjadkj awfpaghp adviadsvbifd",
      stock: false,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((element, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100  rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={element.img}
              alt=""
            />
          </div>
          <h2 className="mt-2 font-semibold">{element.name}</h2>
          <p className="text-xs mt-4">{element.description}</p>
          <button
            className={`px-4 py-1 m-2 ${
              element.stock ? "bg-blue-600" : "bg-red-600"
            } rounded text-xs text-zinc-100`}
          >
            {element.stock ? "In Stock" : "Out Of Stock"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
