import { animate } from "framer-motion";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [closeView, setCloseView] = useState(false);
  const { pathname } = useLocation();
  const BgAnimate = {
    initial: { opacity: 0, scale: 0.2 },
    animate: {
      opacity: 0.5,
      scale: 0.8,
      rotate: 10,
      x: [-10],
      y: [0],
    },
    exit: { opacity: 0, transition: { duration: 0.1 } },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const BgWord = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: 0.5,
      scale: 0.8,
      rotate: -15,
      x: [0],
      y: [0],
    },
    exit: { opacity: 0 },
    // viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const SectionAnimate = {
    // whileInView: { opacity: 1 },

    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0.6, rotateY: 50 },
    transition: { duration: 1 },
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const textSize = {
    title_H1: "text-[2rem]",
    title_H3: "text-[1.5rem]",
    text: "text-[1.25rem]",
  };

  return (
    <AppContext.Provider
      value={{
        closeView,
        setCloseView,
        pathname,
        BgAnimate,
        BgWord,
        SectionAnimate,
        handleScroll,
        textSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
