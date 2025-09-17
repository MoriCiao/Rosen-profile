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
    <section className="group flex h-120 flex-col items-end overflow-y-auto text-end select-none sm:h-auto lg:gap-4">
      <h1 className={`title-h1 text-[1.5rem] tracking-widest md:text-[2.5rem]`}>
        Hi , I'm <br />
        <strong className="text-[4rem] md:text-[5rem]">
          Rosen
          <span className="hidden text-[1.5rem] md:text-[2.5rem]">
            羅森
          </span>{" "}
        </strong>
      </h1>
      <div className="flex max-h-[40vh] flex-col items-end gap-2 overflow-auto sm:h-auto">
        <h3 className="text-[1.25rem] md:text-[1.5rem]">
          持續努力，增進自我
          <br /> 接觸更廣闊的新知識
        </h3>

        <table className="rounded- max-w-120 table-auto border-transparent text-center transition duration-500 group-hover:border-1 group-hover:border-[#69d4ffff]/10 group-hover:bg-gradient-to-br group-hover:from-white/10 group-hover:via-black/10 group-hover:to-white/20 group-hover:backdrop-blur-sm lg:text-[1.25rem]">
          <tr className="max-w-50 border-b border-[#69d4ffff]/20">
            <th className="px-2 py-2">技術運用：</th>
            <td className="px-2 py-2">HTML、CSS、JS、React、Github</td>
          </tr>
          <tr className="max-w-50">
            <th className="px-2 py-2">額外技能：</th>
            <td className="px-2 py-2">Photoshop、illustrator</td>
          </tr>
        </table>

        <div className="flex flex-col gap-2">
          <p className="2xl:text-[1.25rem]">
            目前以前端工程師目標方向自我提升及成長，因此待業學習中。
          </p>
          <p className="2xl:text-[1.25rem]">
            期望未來有機會成為獨立開發完整前端畫面，
            並能與團隊協作完成專案的工程師。
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeaderIntro;
