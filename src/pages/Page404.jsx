import React, { useContext } from "react";
import { easeInOut, motion } from "framer-motion";
import { AppContext } from "../components/AppProvider";
const Page404 = () => {
  const { SectionAnimate } = useContext(AppContext);

  return (
    <motion.div {...SectionAnimate}>
      <div className="page404 w-full h-full overflow-hidden bg-no-select w-200 h-full">
        <motion.img
          className="w-[80%] rotate-20 translate-x-40"
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
