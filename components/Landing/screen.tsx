import React from "react";

const Screen = () => {
  return (
    <div className="h-auto border-x-4">
      <h1 className="text-2xl font-bold text-center pt-4 text-black">
        About us
      </h1>
      <div className="grid grid-cols-3 grid-3 ">
        <img src="./about1.jpeg" className="w-96 h-36 m-8 rounded-xl" />
        <img src="./about3.jpeg" className="w-96 h-36 m-8 rounded-xl" />
        <img src="./about2.webp" className="w-96 h-36 m-8 rounded-xl" />
      </div>
      <div className="flex justify-center  text-black">
        <img src="./me.jpeg" className="h-96 m-8 rounded-xl" />
        <p className="w-1/3 italic h-32 mt-32 ml-8">
          Манай компани нь 2022.01.01-нээс үйл ажиллагаа явуулж байгаа билээ.
          Үйл ажиллагаагаа итвэхтэй явуулаад нэг жил болж байгаа ч гэсэн маш их
          туршлага хуримтлуулж багагүй амжилт бүтээсэн билээ...
        </p>
      </div>
    </div>
  );
};

export default Screen;
