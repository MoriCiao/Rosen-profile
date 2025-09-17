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
    <section className="select-none text-end flex flex-col items-end lg:gap-4 group sm:h-auto h-120 overflow-y-auto">
      <h1 className={`title-h1 md:text-[2.5rem] text-[1.5rem] tracking-widest`}>
        Hi , I'm <br />
        <strong className="md:text-[5rem] text-[4rem]">
          Rosen
          <span className="md:text-[2.5rem] text-[1.5rem] hidden">
            羅森
          </span>{" "}
        </strong>
      </h1>
      <div className="sm:h-auto max-h-[40vh]  overflow-auto flex flex-col gap-2 items-end">
        <h3 className="md:text-[1.5rem] text-[1.25rem]">
          持續努力，增進自我
          <br /> 接觸更廣闊的新知識
        </h3>

        <table className=" table-auto max-w-120 lg:text-[1.25rem]  border-transparent group-hover:border-1 text-center group-hover:border-[#69d4ffff]/10 rounded- group-hover:bg-gradient-to-br group-hover:from-white/10 group-hover:via-black/10 group-hover:to-white/20 group-hover:backdrop-blur-sm transition duration-500">
          <tr className="border-b border-[#69d4ffff]/20  max-w-50">
            <th className="px-2 py-2">技術運用：</th>
            <td className="px-2 py-2">HTML、CSS、JS、React、Github</td>
          </tr>
          <tr className=" max-w-50">
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
