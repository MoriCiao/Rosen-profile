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
      className="hello hidden md:block relative w-full h-full p-20"
    >
      <h1 className="text-end 4xl:text-[10rem] 2xl:text-[8rem] xl:text-[6rem] md:text-[5rem] text-[3rem] tracking-wide lg:translate-x-40 lg:translate-y-0 md:translate-x-40 md:translate-y-20 transition duration-500">
        Hello Stranger !
      </h1>
      <h3 className="text-end 4xl:text-[4rem] 2xl:text-[3.5rem] xl:text-[3rem] md:text-[2rem]  tracking-wide lg:translate-x-40 lg:translate-y-0 md:translate-x-40 md:translate-y-20 transition duration-500">
        Welcome to My Portfolio
      </h3>
    </motion.div>
  );
};

export default Hello;
