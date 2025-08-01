import { easeInOut, motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const MainArea = () => {
  return (
    <main className="Layout w-full h-full">
      {/* 子頁面會在這邊顯示 */}
      <Outlet />
    </main>
  );
};

export default MainArea;
