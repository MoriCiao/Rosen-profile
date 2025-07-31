import "./style/index.css";

import { animate, motion } from "framer-motion";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./pages/Header";
import BgImg from "./components/BgImg";
import AppRoute from "./routes/AppRoute";
import AppProvider from "./components/AppProvider";
import Begin from "./components/Begin";
import MainArea from "./pages/MainArea";

function App() {
  // useContext 將部分FN提供給 childern

  return (
    <section className="APP relative z-[10] grid xl:grid-cols-2 md:grid-cols-1 md:gap-8 sm:gap-5 xl:px-40 md:px-10 sm:px-10 w-full h-screen ">
      <AppProvider>
        <Begin />
        <BgImg />
        <header className="header flex flex-col gap-8 items-start justify-between py-4 h-[90%]  mt-10 xl:px-10 md:px-20">
          <Header />
        </header>

        <main className="flex flex-col gap-8 items-center justify-between py-4 h-[90%] w-full mt-10 xl:px-10 md:px-20 ">
          <AppRoute />
        </main>
      </AppProvider>
    </section>
  );
}

export default App;
