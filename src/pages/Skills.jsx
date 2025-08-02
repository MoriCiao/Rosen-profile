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
    name: "Photoshop",
    img: "/Rosen-profile/icon/Ps.jpg",
  },
  {
    name: "illustrator",
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
      <div className="grid  xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 sm:pb-0 pb-10 items-center justify-center sm:gap-16  ">
        {skillsImg.map((skill, index) => {
          return (
            <Fragment key={index}>
              <div className="skill-item relative  w-[180px] h-[180px] border border-white/50 rounded-2xl p-8 backdrop-blur-sm bg-gradient-to-br from-black/10 via-white/20 to-black/10 flex flex-col items-center justify-center m-auto">
                <div className="absolute bottom-0 text-xl  text-center font-bold ">
                  <span className="tracking-widest">{skill.name}</span>
                </div>
                <motion.img
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                  className="w-full h-full "
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
