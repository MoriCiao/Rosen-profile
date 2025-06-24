import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimateContext } from "../App";

const projects = [
  {
    id: 1,
    img: "/Rosen-profile/pictrue/MoriCiao.jpg",
    title: "TodoList",
    descript:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sit?",
    link: "todolist",
  },
  {
    id: 2,
    img: "/Rosen-profile/pictrue/MoriCiao.jpg",
    title: "Cart",
    descript:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sit?",
    link: "Cart",
  },
  {
    id: 3,
    img: "/Rosen-profile/pictrue/MoriCiao.jpg",
    title: "ImageSearch",
    descript:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sit?",
    link: "ImageSearch",
  },
  {
    id: 4,
    img: "/Rosen-profile/pictrue/MoriCiao.jpg",
    title: "FormData",
    descript:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sit?",
    link: "FormData",
  },
];

const Line = () => {
  return <hr className="col-span-3 border-1 border-slate-800 rounded " />;
};

const Projects = () => {
  const { BgAnimate, BgWord, SectionAnimate } = useContext(AnimateContext);

  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    console.log("handleClick render ...");
    setIsClick(!isClick);
  };

  return (
    <motion.div {...SectionAnimate} className="Projects h-[850px]">
      {/* 這邊要有可以 Routes 導向每個 Projest 然後可以回到首頁 */}
      <div className="projectBg fixed z-[-1] xl:top-0 sm:top-48 left-0 overflow-hidden select-none pointer-events-none w-full h-full top-0 left-0">
        <motion.img
          {...BgAnimate}
          className="absolute z-[-1]"
          src="/Rosen-profile/pictrue/icon-point.png"
          alt=""
        />
        <motion.img
          {...BgWord}
          className="w-full"
          src="/Rosen-profile/pictrue/icon-projects.png"
          alt=""
        />
      </div>

      <div className="pr-20 grid grid-cols-1 gap-4 ">
        {projects.map((p) => {
          return (
            <motion.div
              key={p.id}
              whileHover={{
                backgroundColor: "rgba(105, 212, 255,.1)",
                x: -2,
                y: -2,
                boxShadow: "5px 5px 15px black",
              }}
              className="relative w-full h-auto mb-4 grid grid-cols-3"
            >
              <div className="w-[12rem] p-4 overflow-hidden col-start-1">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="object-fit rounded-md"
                  src={p.img}
                  alt=""
                />
              </div>
              <div className="w-full col-start-2 col-span-2">
                <h3 onClick={handleClick} className="text-[1.5rem] mt-4">
                  {p.title}
                </h3>
                <p
                  className=" px-2 py-1 my-2 mr-4 rounded"
                  style={{ backgroundColor: "rgba(63, 102, 156, 0.3) " }}
                >
                  {p.descript}
                </p>
                <Link to={p.link} className="absolute right-4 bottom-4">
                  <motion.button
                    whileHover={{
                      backgroundColor: "rgb(255, 177, 27)",
                    }}
                    className="bg-sky-900 px-2 py-1 rounded-md"
                    type="submit"
                  >
                    Visit site
                  </motion.button>
                </Link>
              </div>
              <Line />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
