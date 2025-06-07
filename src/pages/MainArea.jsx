import { easeInOut, motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const MainArea = () => {
  console.log("MainArea render ...");
  return (
    <motion.main
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="MiaiArea mt-10"
    >
      {/* 子頁面會在這邊顯示 */}
      <Outlet />
    </motion.main>
  );
};

export default MainArea;
