import { React, Fragment } from "react";
import { easeInOut, motion } from "framer-motion";

const Skills = () => {
  console.log("Skill render ...");
  const skillsImg = [
    {
      name: "HTML",
      img: "./icon/HTML.png",
    },
    {
      name: "CSS",
      img: "./icon/CSS.png",
    },
    {
      name: "JS",
      img: "./icon/JS.svg",
    },
    {
      name: "React",
      img: "./icon/React.png",
    },
    {
      name: "Github",
      img: "./icon/github.svg",
    },
    {
      name: "Ps",
      img: "./icon/Ps.jpg",
    },
    {
      name: "Ai",
      img: "./icon/Ai_icon.png",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: easeInOut }}
      className="overflow-y-overlay scroll-smooth"
      id="skill"
    >
      <div className="skillBg absolute z-[-1] ">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 0.5,
            scale: 1.0,
            rotate: -25,
            x: [-600],
            y: [-50],
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="absolute z-[-1]"
          src="./pictrue/icon-point.png"
          alt="point.png"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 0.7,
            scale: 1.5,
            rotate: -15,
            x: [-500],
            y: [200],
          }}
          viewport={{ once: true, amount: 0.5 }}
          className=""
          src="./pictrue/icon-Skills.png"
          alt="Skills.png"
        />
      </div>

      <div className="workskill mt-4">
        {/* <h1 className="text-[2rem] mb-2">Skills</h1> */}
        <div className="grid grid-cols-4 gap-8 ">
          {skillsImg.map((skill, index) => {
            return (
              <Fragment key={index}>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                  className="w-[100px] h-[100px]"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={skill.img}
                    alt={skill.name}
                  />
                </motion.div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
