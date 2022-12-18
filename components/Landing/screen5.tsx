import React from "react";

const Screen5 = () => {
  const show_alert = () => {
    alert("Амжилттай хүсэлт илгээгдлээ <3");
  };

  return (
    <div className="m-auto p-4 h-auto mb-16 text-black">
      <h1 className="text-2xl font-bold text-center p-4 text-black">
        Хамтарч ажиллахыг хүсвэл бүдэнтэй холбогдоорой (Contact)
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Нэр"
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            placeholder="И-мейл"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="number"
          placeholder="Дугаар"
        />
        <input
          className="border shadow-lg p-3 w-full"
          placeholder="Компани"
        ></input>
        <textarea
          className="border shadow-lg p-3 w-full my-2"
          cols={30}
          rows={10}
          placeholder="Нэмэлт мэдээлэл"
        ></textarea>
        <button
          className="border shadow-lg p-3 w-full mt-2"
          onClick={() => show_alert()}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Screen5;
