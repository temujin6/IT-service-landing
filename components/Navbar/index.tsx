import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const menu = [
    {
      label: "Нүүр хуудас",
      href: "#1",
    },
    {
      label: "Бидний тухай",
      href: "#2",
    },

    {
      label: "Мэдээ, мэдээлэл",
      href: "#3",
    },
    {
      label: "Үйл ажиллагаа",
      href: "#5",
    },
    {
      label: "Фото/Видео сан",
      href: "#4",
    },
    {
      label: "Холбоо барих маягт",
      href: "#6",
    },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className=" italic text-2xl">
            PenGuTJ
          </h1>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="sm:flex space-x-5 z-20 hidden md:flex text-lg text-bold"
        >
          {menu.map((item, index) => (
            <a
              href={item.href}
              key={`header-${index}`}
              data-sal="fade"
              data-sal-duration="1000"
              className="cursor-pointer text-bold"
            >
              {item.label}
            </a>
          ))}
        </ul>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul className="text-bold">
            {menu.map((item, index) => (
              <a
                onClick={handleNav}
                href={item.href}
                key={`header-${index}`}
                data-sal="fade"
                data-sal-duration="1000"
                className="cursor-pointer text-bold"
              >
                {item.label}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
