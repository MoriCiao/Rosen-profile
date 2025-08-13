import { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "./AppProvider";
import { p } from "framer-motion/client";

const skills = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Github",
  "Photoshop",
  "illustrator",
];
const skillsText = skills.join("、");
const HeaderIntro = () => {
  return (
    <section className="select-none text-end flex flex-col items-end gap-4 group">
      <h1 className={`title-h1 text-[3rem] tracking-widest`}>
        Hi , I'm <br />
        <strong className="text-[5rem]">
          Rosen <span className="text-[3rem]">羅森</span>{" "}
        </strong>
      </h1>
      <h3 className="text-[2rem]">
        持續努力，增進自我。
        <br /> 幫未來鋪路，接觸更廣闊的新知識。
      </h3>
      <div className="text-[1.5rem] w-auto text-end border-1 border-transparent group-hover:border-1 group-hover:border-[#69d4ffff]/10 rounded-xl py-2 px-4 group-hover:bg-gradient-to-br group-hover:from-white/10 group-hover:via-black/10 group-hover:to-white/20 group-hover:backdrop-blur-sm transition duration-500">
        <p>技術運用：</p>
        <p>HTML、CSS、JS、React、Github、</p>
        <p>額外技能：</p>
        <p>Photoshop、illustrator</p>
      </div>
      <p className="text-[1.5rem]">
        目前以前端工程師目標方向自我提升及成長，因此待業學習中。
      </p>
      <p className="text-[1.5rem]">
        期望未來有機會成為獨立開發完整前端畫面，並能與團隊協作完成專案的工程師。
      </p>
    </section>
  );
};
export default HeaderIntro;
