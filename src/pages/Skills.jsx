import { React, Fragment, useContext } from "react";
import { easeInOut, motion } from "framer-motion";
import { AnimateContext } from "../App";
const Skills = () => {
  console.log("Skill render ...");

  const { BgAnimate, BgWord, SectionAnimate } = useContext(AnimateContext);
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

  return (
    <motion.section
      {...SectionAnimate}
      className="overflow-y-overlay scroll-smooth"
      id="skill"
    >
      <div className="skillBg absolute z-[-1] overflow-hidden w-full h-full top-0 left-0 ">
        <motion.img
          {...BgAnimate}
          className="absolute z-[-1]"
          src="/Rosen-profile/pictrue/icon-point.png"
          alt="point.png"
        />
        <motion.img
          {...BgWord}
          className="object-cover"
          src="/Rosen-profile/pictrue/icon-Skills.png"
          alt="Skills.png"
        />
      </div>

      <div className="workskill mt-4">
        <div className="grid grid-cols-4 gap-16  ">
          {skillsImg.map((skill, index) => {
            return (
              <Fragment key={index}>
                <div className="w-[150px] h-[150px]">
                  <motion.img
                    whileHover={{
                      scale: 1.2,
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
      </div>
    </motion.section>
  );
};

export default Skills;
