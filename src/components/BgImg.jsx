import { animate, motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "./AppProvider";

const img = {
  homepage: ["", "/Rosen-profile/pictrue/Bg-img.jpg"],
  story: [
    "/Rosen-profile/pictrue/icon-point.png",
    "/Rosen-profile/pictrue/icon-Stroy.png",
  ],
  skills: [
    "/Rosen-profile/pictrue/icon-point.png",
    "/Rosen-profile/pictrue/icon-Skills.png",
  ],

  projects: [
    "/Rosen-profile/pictrue/icon-point.png",
    "/Rosen-profile/pictrue/icon-projects.png",
  ],
};

const BgImg = () => {
  const { BgAnimate, BgWord, pathname } = useContext(AppContext);
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-screen
        z-[-1] select-none pointer-events-none bg-gradient-to-bl from-slate-900 via-slate-900 to-slate-900"
    >
      {pathname === "/Rosen-profile/" ? (
        <motion.img
          key={"homepage"}
          initial={{ opacity: 1, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0  md:w-full sm:h-auto md:w-auto sm:h-full sm:object-top object-cover brightness-60 "
          src={img.homepage[1]}
          alt="homepage"
        />
      ) : pathname === "/Rosen-profile/story" ? (
        <AnimatePresence>
          <motion.img
            key={"story-bg"}
            {...BgAnimate}
            className="absolute top-0 left-0  md:w-full sm:h-auto md:w-auto sm:h-full sm:object-top object-cover"
            src={img.story[0]}
            alt="story-bg"
          />
          <motion.img
            key={"story-word"}
            className="absolute top-0 left-0  md:w-full sm:h-auto md:w-auto sm:h-full sm:object-top object-cover"
            {...BgWord}
            src={img.story[1]}
            alt="story"
          />
        </AnimatePresence>
      ) : pathname === "/Rosen-profile/skills" ? (
        <AnimatePresence>
          <motion.img
            key={"skills-bg"}
            {...BgAnimate}
            className="absolute top-0 left-0 md:w-full sm:h-auto md:w-auto sm:h-full sm:object-top object-cover"
            src={img.skills[0]}
            alt="skills-bg"
          />
          <motion.img
            key={"skills-word"}
            {...BgWord}
            className="absolute top-0 left-0 md:w-full sm:h-auto md:w-auto sm:h-full sm:object-top object-cover"
            src={img.skills[1]}
            alt="skills"
          />
        </AnimatePresence>
      ) : pathname === "/Rosen-profile/projects" ? (
        <AnimatePresence>
          <motion.img
            key={"projects-bg"}
            {...BgAnimate}
            className="absolute top-0 left-0 md:w-full sm:h-auto md:w-auto sm:h-full sm:object-top object-cover"
            src={img.projects[0]}
            alt="projects-bg"
          />
          <motion.img
            key={"projects-word"}
            {...BgWord}
            className="absolute top-0 left-0 md:w-full sm:h-auto md:w-auto sm:h-full sm:object-top object-cover"
            src={img.projects[1]}
            alt="projects"
          />
        </AnimatePresence>
      ) : null}
    </motion.div>
  );
};

export default BgImg;
