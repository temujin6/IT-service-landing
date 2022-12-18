import type { NextPage } from "next";
import React, { useEffect } from "react";
import sal from "sal.js";
import Header from "../components/Header";
import Screen from "../components/Landing/screen";
import Screen2 from "../components/Landing/screen2";
import Screen3 from "../components/Landing/screen3";
import Screen4 from "../components/Landing/screen4";
import Screen5 from "../components/Landing/screen5";
import Footer from "../components/Landing/footer";

const Home: NextPage = () => {
  const [scroll, setScroll] = React.useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 200)
      );
    }
    sal();
  }, []);

  return (
    <div className="text-white select-none ">
      <div>
        <div
          id="1"
          className="fixed lg:relative top-0 z-50 lg:z-auto left-0 right-0 bg-gradient-to-r from-[#07377a] via-[#011756] to-[#360882]"
        >
          <Header />
        </div>
      </div>
      <div id="2">
        <Screen />
      </div>
      <div id="3">
        <Screen2 />
      </div>
      <div id="5">
        <Screen3 />
      </div>
      <div id="4">
        <Screen4 />
      </div>
      <div id="6">
        <Screen5 />
      </div>
      <div>
        <Footer />
      </div>

      <div
        className={`${
          scroll ? "fixed" : "hidden"
        } right-5 md:right-10 bottom-14 lg:bottom-20 rounded-full border bg-mainColor p-2`}
      >
        <a href="#0" className="text-4xl text-white"></a>
      </div>
    </div>
  );
};

export default Home;
