import { React, Fragment, useContext } from "react";
import { easeInOut, motion } from "framer-motion";
import { AppContext } from "../components/AppProvider";
const skillsImg = [
  {
    name: "HTML",
    img: "/Rosen-profile/icon/HTML.webp",
  },
  {
    name: "CSS",
    img: "/Rosen-profile/icon/CSS.webp",
  },
  {
    name: "JS",
    img: "/Rosen-profile/icon/JS.svg",
  },
  {
    name: "React",
    img: "/Rosen-profile/icon/React.webp",
  },
  {
    name: "Github",
    img: "/Rosen-profile/icon/github.svg",
  },
  {
    name: "Photoshop",
    img: "/Rosen-profile/icon/Ps.webp",
  },
  {
    name: "illustrator",
    img: "/Rosen-profile/icon/Ai_icon.webp",
  },
];
const Skills = () => {
  const { SectionAnimate } = useContext(AppContext);

  return (
    <motion.section
      {...SectionAnimate}
      className="workskill overflow-y-overlay mt-4 mt-8 scroll-smooth"
      id="skill"
    >
      <div className="grid grid-cols-2 items-center justify-center gap-2 pb-10 sm:grid-cols-3 sm:gap-16 sm:pb-0 xl:grid-cols-4">
        {skillsImg.map((skill, index) => {
          return (
            <Fragment key={index}>
              <div className="skill-item relative m-auto flex w-[120px] flex-col items-center justify-center rounded-2xl border border-white/50 bg-gradient-to-br from-black/10 via-white/20 to-black/10 p-6 backdrop-blur-sm sm:h-[180px] sm:w-[180px] sm:p-8">
                <div className="absolute bottom-0 text-center text-xl font-bold">
                  <span className="tracking-widest">{skill.name}</span>
                </div>
                <motion.img
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                  className="h-full w-full"
                  src={skill.img}
                  alt={skill.name}
                  loading="lazy"
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
