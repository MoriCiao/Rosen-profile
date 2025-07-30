import { React, Fragment, useContext } from "react";
import { easeInOut, motion } from "framer-motion";
import { AppContext } from "../components/AppProvider";
const skillsImg = [
  {
    name: "HTML",
    img: "/Rosen-profile/icon/HTML.png",
  },
  {
    name: "CSS",
    img: "/Rosen-profile/icon/CSS.png",
  },
  {
    name: "JS",
    img: "/Rosen-profile/icon/JS.svg",
  },
  {
    name: "React",
    img: "/Rosen-profile/icon/React.png",
  },
  {
    name: "Github",
    img: "/Rosen-profile/icon/github.svg",
  },
  {
    name: "Ps",
    img: "/Rosen-profile/icon/Ps.jpg",
  },
  {
    name: "Ai",
    img: "/Rosen-profile/icon/Ai_icon.png",
  },
];
const Skills = () => {
  const { SectionAnimate } = useContext(AppContext);

  return (
    <motion.section
      {...SectionAnimate}
      className="workskill mt-4 overflow-y-overlay scroll-smooth mt-8"
      id="skill"
    >
      <div className="grid xxl:grid-cols-4 xl:grid-cols-3  sm:grid-cols-3 gap-16  ">
        {skillsImg.map((skill, index) => {
          return (
            <Fragment key={index}>
              <div className="skill-item w-[180px] h-[180px] border border-white/50 rounded-2xl p-4 bg-gradient-to-br from-black/10 via-white/20 to-black/10">
                <motion.img
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                  className="w-full h-full object-cover"
                  src={skill.img}
                  alt={skill.name}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;
