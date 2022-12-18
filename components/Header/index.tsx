import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-start h-screen bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]  h-32 w-1/2 ml-8">
        <h3
          className="text-2xl italic transition duration-150 ease-in-out"
          data-sal="fade"
          data-sal-duration="1000"
        >
          Түргэн шуурхай үйлчилгээг та манай "IT service" буюу Website, Mobile
          application, AI develop гэх мэт үйлчилгээг авах боломжтой билээ.
        </h3>
        <p
          className="py-5 text-xl"
          data-sal="fade"
          data-sal-duration="1000"
        ></p>
        <button
          className="px-8 py-2 border hover:rounded-xl"
          data-sal="fade"
          data-sal-duration="1000"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
