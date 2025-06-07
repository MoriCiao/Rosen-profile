import React from "react";
import { easeInOut, motion } from "framer-motion";
const Page404 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: 1.1,
          rotate: 15,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="absolute top-0 right-20 z-[-1]"
        src="/pictrue/icon-404Error.png"
        alt=""
      />
    </motion.div>
  );
};

export default Page404;
