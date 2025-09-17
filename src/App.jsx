import "./style/index.css";
import BgImg from "./components/BgImg";
import AppRoute from "./routes/AppRoute";
import AppProvider from "./components/AppProvider";
import Begin from "./components/Begin";
import HeaderGuided from "./components/HeadeGuided";
import { useState } from "react";
import BeginPage from "./components/begin/beginPage";

function App() {
  // useContext 將部分FN提供給 childern
  const [isToggle, setIsToggle] = useState(false);

  return (
    <section
      className={`APP relative z-[10] flex h-screen w-full xl:grid xl:grid-cols-12`}
    >
      <AppProvider>
        <BeginPage />
        {/* <Begin /> */}

        <BgImg />
        <header
          className={`header ${
            isToggle
              ? "translate-x-0"
              : "-translate-x-30 sm:-translate-x-40 md:-translate-x-80"
          } fixed top-0 left-0 z-1 flex h-full flex-col items-center justify-between gap-8 bg-slate-900/70 py-20 transition duration-800`}
        >
          <HeaderGuided isToggle={isToggle} setIsToggle={setIsToggle} />
        </header>
        <main
          className={`col-span-8 col-start-4 ${
            !isToggle ? "xl:-translate-x-40" : ""
          } mt-0 flex h-[90%] w-full flex-col items-center justify-between gap-8 py-4 transition duration-800 sm:mt-10 md:px-10`}
        >
          <AppRoute />
        </main>
      </AppProvider>
    </section>
  );
}

export default App;
