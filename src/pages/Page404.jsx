import React, { useContext } from "react";
import { easeInOut, motion } from "framer-motion";
import { AnimateContext } from "../App";
const Page404 = () => {
  const { BgAnimate, BgWord, SectionAnimate } = useContext(AnimateContext);

  return (
    <motion.div {...SectionAnimate}>
      <div className="absolute z-[-1] overflow-hidden bg-no-select w-full h-full top-0 left-[30rem]">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1.1,
            rotate: -15,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          src="/Rosen-profile/pictrue/icon-404Error.png"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Page404;
