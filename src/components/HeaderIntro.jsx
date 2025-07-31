import { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "./AppProvider";

const HeaderIntro = ({ name }) => {
  const { textSize } = useContext(AppContext);
  return (
    <section className="select-none ">
      <h1 className={`title-h1 text-[3rem] tracking-widest`}>
        Hi
        <motion.span
          animate={{
            color: [
              "#f43f5e",
              "#f59e0b",
              "#10b981",
              "#3b82f6",
              "#8b5cf6",
              "#f43f5e",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
          className="useState-area px-4"
        >
          Tourist
        </motion.span>
        , I'm <br />
        <strong className="text-[5rem]">Rosen</strong>
      </h1>
    </section>
  );
};
export default HeaderIntro;
