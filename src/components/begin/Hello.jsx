import React from "react";
import { motion } from "framer-motion";
const Hello = () => {
  return (
    <motion.div
      initial={{
        x: 1000,
        y: 500,
        scale: 0.1,
        rotateX: -50,
        rotateY: 30,
        rotateZ: 45,
      }}
      animate={{ x: 0, y: 0, scale: 1, rotateX: -50, rotateY: 25, rotateZ: 45 }}
      transition={{ duration: 0.8, delay: -1 }}
      className="hello relative hidden h-full w-full p-20 md:block"
    >
      <h1 className="4xl:text-[10rem] text-end text-[3rem] tracking-wide transition duration-500 md:translate-x-40 md:translate-y-20 md:text-[5rem] lg:translate-x-40 lg:translate-y-0 xl:text-[6rem] 2xl:text-[8rem]">
        Hello Stranger !
      </h1>
      <h3 className="4xl:text-[4rem] text-end tracking-wide transition duration-500 md:translate-x-40 md:translate-y-20 md:text-[2rem] lg:translate-x-40 lg:translate-y-0 xl:text-[3rem] 2xl:text-[3.5rem]">
        Welcome to My Portfolio
      </h3>
    </motion.div>
  );
};

export default Hello;
