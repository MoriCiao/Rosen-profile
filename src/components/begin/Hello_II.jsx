import React from "react";
import { motion } from "framer-motion";
import { Bounce } from "react-awesome-reveal";
const Hello_II = () => {
  return (
    <motion.div className="hello_ii relative block flex h-full w-full flex-col gap-2 p-10 md:hidden">
      <Bounce delay={2500}>
        <h1 className="text-end text-[4rem] tracking-wide">Hello</h1>
        <h2 className="text-end text-[2rem] tracking-wide">Stranger !</h2>
        <h3 className="mt-2 text-end text-[1.25rem] tracking-wide">
          Welcome to
        </h3>
        <h3 className="mt-2 text-end text-[1.25rem] tracking-wide">
          My Portfolio
        </h3>
      </Bounce>
    </motion.div>
  );
};

export default Hello_II;
