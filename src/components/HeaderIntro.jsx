import { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "./AppProvider";

const HeaderIntro = ({ name }) => {
  const { textSize } = useContext(AppContext);
  return (
    <section className="select-none text-end">
      <h1 className={`title-h1 text-[3rem] tracking-widest`}>
        Hi , I'm <br />
        <strong className="text-[5rem]">Rosen</strong>
      </h1>
    </section>
  );
};
export default HeaderIntro;
