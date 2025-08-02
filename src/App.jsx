import "./style/index.css";

import { animate, motion } from "framer-motion";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./pages/Header";
import BgImg from "./components/BgImg";
import AppRoute from "./routes/AppRoute";
import AppProvider from "./components/AppProvider";
import Begin from "./components/Begin";
import MainArea from "./pages/MainArea";
import HeaderGuided from "./components/HeadeGuided";
import { useState } from "react";

function App() {
  // useContext 將部分FN提供給 childern
  const [isToggle, setIsToggle] = useState(false);

  return (
    <section
      className={`APP relative z-[10] xl:grid xl:grid-cols-12 flex  w-full h-screen `}
    >
      <AppProvider>
        <Begin />

        <BgImg />
        <header
          className={`header  ${
            isToggle
              ? "translate-x-0"
              : "md:-translate-x-80 sm:-translate-x-40 -translate-x-30"
          } fixed z-1 py-20 top-0 left-0 flex flex-col gap-8 items-center justify-between  h-full bg-slate-900/70 transition duration-800`}
        >
          <HeaderGuided isToggle={isToggle} setIsToggle={setIsToggle} />
        </header>
        <main
          className={`col-start-4 col-span-8 ${
            !isToggle ? "xl:-translate-x-40" : ""
          } flex flex-col  gap-8 items-center justify-between py-4 h-[90%] w-full mt-10 md:px-10  transition duration-800`}
        >
          <AppRoute />
        </main>
      </AppProvider>
    </section>
  );
}

export default App;
