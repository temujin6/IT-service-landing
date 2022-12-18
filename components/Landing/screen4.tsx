import React from "react";

const Screen4 = () => {
  return (
    <div className="mx-auto bg-black">
      <h1 className="text-2xl font-bold text-center pt-4">Gallery</h1>
      <div className="grid grid-cols-3 grid-3 ">
        <img src="./about1.jpeg" className="w-96 h-56 m-8 border p-4" />
        <img src="./about3.jpeg" className="w-96 h-56 m-8 border p-4" />
        <img src="./about2.webp" className="w-96 h-56 m-8 border p-4" />
        <img src="./about1.jpeg" className="w-96 h-56 m-8 border p-4" />
        <img src="./about2.webp" className="w-96 h-56 m-8 border p-4" />
        <img src="./about3.jpeg" className="w-96 h-56 m-8 border p-4" />
      </div>
    </div>
  );
};

export default Screen4;
