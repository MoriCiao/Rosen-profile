import "./style/index.css";

import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import MainArea from "./pages/MainArea";
import Story from "./pages/Story";
import Work from "./pages/Work";
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
      initial={{ opacity: 0, scale: 1.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[80vh] fixed top-0 left-0 w-full h-full  z-[-1] "
    >
      <img
        className=" w-full object-cover opacity-[.8] brightness-50"
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
      whileInView: {
        opacity: 0.5,
        scale: 0.8,
        rotate: 30,
        x: [-30],
        y: [-200],
      },
      viewport: { once: true, amount: 0.5 },
      transition: { duration: 1 },
    };

    const BgWord = {
      initial: { scale: 0.5 },
      whileInView: {
        opacity: 0.7,
        scale: 0.8,
        rotate: -15,
        x: [0],
        y: [0],
      },
      viewport: { once: true, amount: 0.5 },
      transition: { duration: 1 },
    };

    const SectionAnimate = {
      whileInView: { opacity: 1 },
      initial: { opacity: 0 },
      transition: { duration: 0.5 },
    };

    return (
      <AnimateContext.Provider value={{ BgAnimate, BgWord, SectionAnimate }}>
        {children}
      </AnimateContext.Provider>
    );
  };

  return (
    <div className="APP grid grid-cols-2 gap-20 px-40 w-full bg-slate-900  h-screen relative z-[10] relative">
      <AnimateProvider>
        <Header />

        <Routes>
          <Route path="/Rosen-profile" element={<MainArea />}>
            <Route index element={<BgImg />} />
            <Route path="story" element={<Story />} />
            <Route path="work" element={<Work />} />
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
