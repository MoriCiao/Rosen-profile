import { easeInOut, motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const MainArea = () => {
  console.log("MainArea render ...");
  return (
    <main className="Layout">
      {/* 子頁面會在這邊顯示 */}
      <Outlet />
    </main>
  );
};

export default MainArea;
