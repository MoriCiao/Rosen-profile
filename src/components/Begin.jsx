import React, { useContext } from "react";
import { AppContext } from "./AppProvider";
import { motion, AnimatePresence } from "framer-motion";
const Begin = () => {
  const { closeView, setCloseView } = useContext(AppContext);
  return (
    <section
      className={`begin w-[100vw] h-[100vh] absolute z-1000 top-0 left-0 bg-gradient-to-br from-sky-700 via-blue-900 to-sky-900 flex items-center justify-center overflow-hidden select-none tracking-widest ${
        closeView ? "hidden" : null
      }`}
    >
      <h1 className="scale-150">
        <span>H</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>O</span>
        <span>!</span>
      </h1>
      <button
        type="button"
        className="absolute bottom-48 text-[2rem]
            px-8 py-2
            border border-white/30
            rounded-xl
            bg-gradient-to-br from-white/10 via-white/10 to-white/20
            backdrop-blur-md
            font-bold
            text-sky-900
            shadow-lg 
            hover:text-white
            hover:-translate-y-2
            hover:shadow-2xl
            hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] 
            transition duration-300
            cursor-pointer"
        onClick={() => setCloseView(true)}
      >
        Enter
      </button>
    </section>
  );
};

export default Begin;
