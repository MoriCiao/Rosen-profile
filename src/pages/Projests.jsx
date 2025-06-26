import { useState, useContext, useReducer } from "react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimateContext } from "../App";
import Line from "../components/Line";
const projects = [
  {
    id: 1,
    img: "/Rosen-profile/pictrue/todo-dark.png",
    title: "TodoList",
    descript: (
      <>
        使用 <span className="text-[--text-color-2]">useReducer</span>{" "}
        狀態管理， 以及透過{" "}
        <span className="text-[--text-color-2]">useContext</span>{" "}
        共享資料與主題切換等功能。 使用{" "}
        <span className="text-[--text-color-2]">Framer Motion</span>
        強化畫面的互動性。
      </>
    ),
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

const Projects = () => {
  const { BgAnimate, BgWord, SectionAnimate } = useContext(AnimateContext);
  const initState = {
    isToggle: true,
  };

  function stateReducer(state, action) {
    switch (action.type) {
      case "IS_TOGGLE": {
        console.log(state.isToggle);
        const id = action.payload;
        console.log(id);
        const curret = state.isToggle[id] || false;

        return { ...state, isToggle: { ...state.isToggle, [id]: !curret } };
      }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(stateReducer, initState);

  // const [isClick, setIsClick] = useState(true);
  // const handleClick = () => {
  //   console.log("handleClick render ...");
  //   setIsClick(!isClick);
  // };

  return (
    <motion.div {...SectionAnimate} className="Projects h-[850px] mt-8">
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

      <div className="project-items md:pr-5 grid grid-cols-1 gap-4  md:grid-cols-1">
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
              className="relative w-full h-auto mb-4 grid grid-cols-3 xl:grid-cols-6"
            >
              {/* 專案圖片區塊 */}
              <div className="w-[12rem] md:w-[10rem] sm:w-[8rem] sm:m-auto xl:p-4 md:p-[0]  rounded-md overflow-hidden col-start-1 xl:col-span-2">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="object-fit rounded-md md:w-full sm:w-[8rem]"
                  src={p.img}
                  alt=""
                />
              </div>

              {/* 專案文字區塊 */}
              <div
                onClick={() => dispatch({ type: "IS_TOGGLE", payload: p.id })}
                className="w-full col-start-2 col-span-2 xl:col-start-3 xl:col-span-4 xl:pl-2"
              >
                <div className="flex items-center mt-4 relative">
                  <h3 className="text-[1.5rem]">{p.title}</h3>
                  {/* 連結導入個專案的介紹 */}
                  <Link to={p.link} className="absolute right-4">
                    <motion.button
                      whileHover={{
                        backgroundColor: "rgb(255, 177, 27)",
                      }}
                      className="bg-sky-900 px-2 py-1 rounded-md"
                      type="submit"
                    >
                      Go Project
                    </motion.button>
                  </Link>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={state.isToggle[p.id]}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`project-Ptext px-2 py-1 my-2 mr-4 rounded  ${
                      state.isToggle[p.id] ? "" : "truncate"
                    }`}
                    style={{ backgroundColor: "rgba(63, 102, 156, 0.3) " }}
                  >
                    {p.descript}
                  </motion.p>
                </AnimatePresence>
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
