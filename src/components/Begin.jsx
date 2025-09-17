import React, { useContext } from "react";
import { AppContext } from "./AppProvider";
import { useNavigate } from "react-router-dom";
const Begin = () => {
  const { closeView, setCloseView } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <>
      {!closeView && (
        <section
          className={`begin absolute top-0 left-0 z-1000 flex h-[100vh] w-[100vw] items-center justify-center overflow-hidden bg-gradient-to-br from-sky-700 via-blue-900 to-sky-900 tracking-widest select-none`}
        >
          <h1 className="">
            <span>H</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span>O</span>
            <span>!</span>
          </h1>
          <button
            type="button"
            className="absolute cursor-pointer rounded-xl border border-white/30 bg-gradient-to-br from-white/10 via-white/10 to-white/20 px-8 py-2 text-[2rem] font-bold text-sky-900 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:text-white hover:shadow-2xl hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
            onClick={() => {
              setCloseView(true);
              navigate("/homepage");
            }}
          >
            Enter
          </button>
        </section>
      )}
    </>
  );
};

export default Begin;
