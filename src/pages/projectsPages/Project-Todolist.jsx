import React, { Fragment, useContext } from "react";
import GoBackBtn from "../../components/GoBackBtn";
import { AppContext } from "../../components/AppProvider";
import { motion } from "framer-motion";

const descript_one = [
  {
    title: "專案技術重點：",
    listItem: [
      "使用 React 開發 SPA 頁面",
      "採用 useReduer 管理任務狀態",
      "應用 useContext 跨元件資料共享",
      "結合 Framer Motion 製作動畫，增強 UI 體驗",
      "運用 TailwindCSS 排版，具備 RWD 設計",
      "重新整理後能保留任務(localStorage)",
    ],
  },
];

const descript_two = [
  {
    title: "專案畫面預覽：",
    listItem: [
      "任務完成打勾動畫效果",
      "依照時間排序，升冪、降冪功能",
      "應用 useContext 跨元件資料共享",
      "深淺主題切換",
    ],
  },
];

const descript_three = [
  {
    title: "我學到了什麼：",
    listItem: [
      "使用動畫函式庫 Framer Motion，強化畫面的互動性。整體專案從規劃功能 → 拆分元件 → 狀態設計 → UI 動畫 → 儲存機制",
    ],
  },
];

const todoPictrue = [
  {
    light: {
      homepage: (
        <img
          src="/Rosen-profile/todoPicture/homepage-light.png"
          alt="homepage-light"
          className="w-full"
        />
      ),
      allTasks: (
        <img
          src="/Rosen-profile/todoPicture/allTasks-light.png"
          alt="allTasks-light"
          className="w-full"
        />
      ),
      newTodo: (
        <img
          src="/Rosen-profile/todoPicture/newtodo-light.png"
          alt="newtodo-light"
          className="w-full"
        />
      ),
      setting: (
        <img
          src="/Rosen-profile/todoPicture/setting-light.png"
          alt="setting-light"
          className="w-full"
        />
      ),
    },
  },
  {
    dark: {
      homepage: (
        <img
          src="/Rosen-profile/todoPicture/homepage-dark.png"
          alt="homepage-dark"
          className="w-full"
        />
      ),
      allTasks: (
        <img
          src="/Rosen-profile/todoPicture/allTasks-dark.png"
          alt="allTasks-dark.png"
          className="w-full"
        />
      ),
      newTodo: (
        <img
          src="/Rosen-profile/todoPicture/newtodo-dark.png"
          alt="newtodo-dark"
          className="w-full"
        />
      ),
      setting: (
        <img
          src="/Rosen-profile/todoPicture/setting-dark.png"
          alt="setting-dark"
          className="w-full"
        />
      ),
    },
  },
];

const VisitBtn = () => {
  return (
    <a href="https://github.com/MoriCiao/project-todoList" target="blank">
      <motion.button
        initial={{ scale: 1, boxShadow: "0px 0px 2px rgb(255, 177, 27)" }}
        animate={{
          backgroundColor: [
            "rgb(255, 177, 27)",
            "rgb(182, 151, 92)",
            "rgb(255, 177, 27)",
          ],
          color: [
            "rgb(105, 212, 255)",
            "rgb(15, 37, 64)",
            "rgb(105, 212, 255)",
          ],
          boxShadow: [
            "0px 0px 2px rgb(255, 177, 27)",
            "0px 0px 10px rgb(255, 177, 27)",
            "0px 0px 2px rgb(255, 177, 27)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="bg-[--text-color-2] text-white text-center  rounded-full px-2 py-[0.25rem] absolute top-2 right-2"
      >
        Visits site
      </motion.button>
    </a>
  );
};

/*
✅ TodoList 任務清單
使用技術：
JavaScript, HTML, CSS, LocalStorage

簡介：
TodoList 是一款日常任務管理工具，提供新增、刪除、切換完成狀態與主題風格切換功能。資料儲存於 localStorage，適合練習狀態管理與 UI 操作。

特色功能：

任務新增與切換狀態

主題樣式切換（淺色/深色）

使用者偏好儲存於 localStorage

具備簡潔 UI 介面

*/

const Todolist = () => {
  const { SectionAnimate, textSize } = useContext(AppContext);
  console.log("載入 Todo List 頁面...");
  return (
    <motion.div
      {...SectionAnimate}
      className="todo-introduct mt-4 sm:relative sm:mb-12 h-[90vh] select-none "
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: [0.8, 1] }}
        transition={{ duration: 0.5 }}
        className="fixed z-[-1] xl:top-[-8rem] sm:top-32 left-0  select-none pointer-events-none w-full h-full "
      >
        <img
          src="/Rosen-profile/pictrue/todo-dark.png"
          className="object-fit"
          alt=""
        />
      </motion.div>
      <div>
        <h2 className={`${textSize.title_H1} relative mb-2`}>
          任務清單 – React TodoList
        </h2>
      </div>

      <div className="mt-2">
        <h3 className={`${textSize.title_H1}`}>{descript_one[0].title}</h3>
        <ul className="my-2">
          {descript_one.map((d, index) => {
            return (
              <Fragment key={index}>
                {d.listItem.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className={`${textSize.text} pl-[1rem] pb-1 flex`}
                    >
                      <img
                        src="/Rosen-profile/icon/play.svg"
                        className="pr-2"
                        alt="play.svg"
                      />
                      {item}
                    </li>
                  );
                })}
              </Fragment>
            );
          })}
        </ul>
      </div>

      <div className="mt-2">
        <h3 className={`${textSize.title_H1} mb-2`}>{descript_two[0].title}</h3>
        <ul className="my-2">
          {descript_two.map((d, index) => {
            return (
              <Fragment key={index}>
                {d.listItem.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className={`${textSize.text} pl-[1rem] pb-1 flex`}
                    >
                      <img
                        src="/Rosen-profile/icon/search.svg"
                        className="pr-2"
                        alt="search.svg"
                      />

                      {item}
                    </li>
                  );
                })}
              </Fragment>
            );
          })}
        </ul>
      </div>

      <div className="mt-2">
        <div className="relative">
          <h3 className={`${textSize.title_H1} mb-2 `}>
            {descript_three[0].title}
          </h3>
          <VisitBtn />
        </div>

        <ul className="my-2">
          {descript_three.map((d, index) => {
            return (
              <Fragment key={index}>
                {d.listItem.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className={`${textSize.text} pl-[1rem] indent-[1rem] pb-1`}
                    >
                      {item}
                    </li>
                  );
                })}
              </Fragment>
            );
          })}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="col-start-1 ">
          {todoPictrue.map((items, index) => (
            <section key={index}>
              {items.light &&
                Object.entries(items.light).map(([key, element], i) => (
                  <div
                    key={i}
                    className="mb-4 rounded-md overflow-hidden select-none "
                  >
                    {element}
                  </div>
                ))}
            </section>
          ))}
        </div>
        <div className="col-start-2">
          {todoPictrue.map((items, index) => (
            <section key={index}>
              {items.dark &&
                Object.entries(items.dark).map(([key, element], i) => (
                  <div
                    key={i}
                    className="mb-4 rounded-md overflow-hidden select-none pointer-events-none"
                  >
                    {element}
                  </div>
                ))}
            </section>
          ))}
        </div>
      </div>
      <GoBackBtn />
    </motion.div>
  );
};

export default Todolist;
