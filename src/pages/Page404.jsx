import React, { useContext } from "react";
import { easeInOut, motion } from "framer-motion";
import { AppContext } from "../components/AppProvider";
const Page404 = () => {
  const { SectionAnimate } = useContext(AppContext);

  return (
    <motion.div {...SectionAnimate}>
      <div className="page404 bg-no-select h-full w-200 w-full overflow-hidden">
        <motion.img
          className="w-[80%] translate-x-40 rotate-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1.1,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          src="/Rosen-profile/pictrue/icon-404Error.webp"
          alt="404Error"
        />
      </div>
    </motion.div>
  );
};

export default Page404;
