import { easeInOut, motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const MainArea = () => {
  console.log("MainArea render ...");
  return (
    <motion.main
      // whileInView={{ opacity: 1 }}
      // initial={{ opacity: 0, y: 0 }}
      // transition={{ duration: 0.5 }}
      className="MiaiArea md:pt-5 xl:px-10 md:px-20 select-none md:mb-8 sm:mb-4"
    >
      {/* 子頁面會在這邊顯示 */}
      <Outlet />
    </motion.main>
  );
};

export default MainArea;
