import React from "react";
import { motion } from "framer-motion";
import { Bounce } from "react-awesome-reveal";
const Hello_II = () => {
  return (
    <motion.div className="md:hidden hello_ii block relative w-full h-full p-10 flex flex-col gap-2 ">
      <Bounce delay={2500}>
        <h1 className="text-end text-[4rem] tracking-wide">Hello</h1>
        <h2 className="text-end text-[2rem] tracking-wide">Stranger !</h2>
        <h3 className="text-end text-[1.25rem] tracking-wide mt-2">
          Welcome to
        </h3>
        <h3 className="text-end text-[1.25rem] tracking-wide mt-2">
          My Portfolio
        </h3>
      </Bounce>
    </motion.div>
  );
};

export default Hello_II;
