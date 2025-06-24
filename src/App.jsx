import "./style/index.css";

import { animate, motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import MainArea from "./pages/MainArea";
import Story from "./pages/Story";
import Skills from "./pages/Skills";
import Projects from "./pages/Projests";
import Page404 from "./pages/Page404";
import Todolist from "./pages/projectsPages/Project-Todolist";
import Cart from "./pages/projectsPages/Project-Cart";
import FormData from "./pages/projectsPages/Project-FormData";
import ImageSearch from "./pages/projectsPages/Project-ImageSearch";
import { createContext } from "react";

export const AnimateContext = createContext();

const BgImg = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-screen
        z-[-1] select-none pointer-events-none "
    >
      <img
        className="md:w-full sm:h-auto md:w-auto sm:h-full sm:object-top object-cover opacity-[.8] brightness-50"
        src="/Rosen-profile/pictrue/Bg-img.jpg"
        alt="BgImg"
      />
    </motion.div>
  );
};
function App() {
  // useContext 將部分FN提供給 childern
  const AnimateProvider = ({ children }) => {
    const BgAnimate = {
      initial: { scale: 0.2 },
      animate: {
        opacity: 0.5,
        scale: 0.8,
        rotate: 30,
        x: [-30],
        y: [-200],
      },
      viewport: { once: true },
      transition: { duration: 1 },
    };

    const BgWord = {
      initial: { scale: 0.5 },
      animate: {
        opacity: 0.5,
        scale: 0.8,
        rotate: -15,
        x: [0],
        y: [0],
      },
      // viewport: { once: true },
      transition: { duration: 1 },
    };

    const SectionAnimate = {
      // whileInView: { opacity: 1 },
      initial: { opacity: 1 },
      transition: { duration: 1 },
    };

    const BgPoint = "/Rosen-profile/pictrue/icon-point.png";
    const BgImgs = [
      {
        id: 0,
        name: "homepage",
        imgWord: "/Rosen-profile/pictrue/Bg-img.jpg",
        imgBg: "",
      },
      {
        id: 1,
        name: "story",
        imgWord: "/Rosen-profile/pictrue/icon-Stroy.png",
        imgBg: BgPoint,
      },
      {
        id: 2,
        name: "skills",
        imgWord: "/Rosen-profile/pictrue/icon-Skills.png",
        imgBg: BgPoint,
      },
      {
        id: 3,
        name: "projects",
        imgWord: "/Rosen-profile/pictrue/icon-projects.png",
        imgBg: BgPoint,
      },
      {
        id: 4,
        name: "projects",
        imgWord: "/Rosen-profile/pictrue/icon-404Error.png",
        imgBg: BgPoint,
      },
    ];

    const handleScroll = () => {
      console.log("Scroll");
      window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
    };

    return (
      <AnimateContext.Provider
        value={{ BgAnimate, BgWord, SectionAnimate, handleScroll }}
      >
        {children}
      </AnimateContext.Provider>
    );
  };

  return (
    <div className="APP grid xl:grid-cols-2 md:grid-cols-1 md:gap-0 sm:gap-5 xl:px-40 md:px-10 sm:px-10 w-full bg-slate-900  h-screen relative z-[10] relative">
      <AnimateProvider>
        <Header />

        <Routes>
          <Route path="/Rosen-profile" element={<MainArea />}>
            <Route index element={<BgImg />} />
            <Route path="story" element={<Story />} />
            {/* <Route path="work" element={<Work />} /> */}
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/Cart" element={<Cart />} />
            <Route path="projects/FormData" element={<FormData />} />
            <Route path="projects/ImageSearch" element={<ImageSearch />} />
            <Route path="projects/todolist" element={<Todolist />} />
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </AnimateProvider>
    </div>
  );
}

export default App;
