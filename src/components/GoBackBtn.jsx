import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const GoBackBtn = () => {
  const GobackBtn = useNavigate();

  return (
    <>
      <button
        className="mt-8 sm:bottom-[2rem]"
        onClick={() => GobackBtn("/Rosen-profile/projects")}
      >
        <motion.img
          initial={{ scale: 1, x: 10 }}
          whileHover={{
            scale: 1.1,
            x: 10,
            filter: "brightness(1.3)",
          }}
          transition={{ duration: 0.3 }}
          className="rounded-full border-2 border-[--text-color]"
          src="/Rosen-profile/icon/back-arrow.svg"
          alt=""
        />
      </button>
    </>
  );
};

export default GoBackBtn;
