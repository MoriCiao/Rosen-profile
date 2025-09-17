import { easeInOut, motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const MainArea = () => {
  return (
    <section className="layout h-full w-full">
      {/* 子頁面會在這邊顯示 */}
      <Outlet />
    </section>
  );
};

export default MainArea;
