import { useState, useContext, useReducer } from "react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../components/AppProvider";

const Hr = () => <hr className="w-full opacity-50  mt-4 mb-2" />;
const h3_style = "md:text-2xl sm:text-xl text-[1rem] font-bold pb-4 ";
const content_style =
  "md:text-xl sm-text-lg flex gap-2 text-[0.8rem] before:content-['📌']";

const desII_style = "des_II_content w-full";

const projects = [
  {
    id: 1,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="svg-item feather feather-shopping-cart"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    title: "BuyFlow",
    descript: (
      <>
        是一個模擬真實購物體驗的電商平台，支援商品瀏覽、加入購物車、登入/註冊會員、訂單追蹤與結帳功能。
      </>
    ),
    descript_II: (
      <>
        <div className="des_II_content w-full">
          <h3 className={h3_style}>運用技術：</h3>
          <p className={content_style}>
            React, Redux, TailwindCSS, JavaScript, LocalStorage, HTML/CSS
          </p>
          <Hr />
        </div>
        <div className="des_II_content w-full">
          <h3 className={h3_style}>專案簡介：</h3>
          <ul className={`flex flex-col gap-4`}>
            <li className={content_style}>
              BuyFlow使用 Redux 處理跨頁面狀態管理
            </li>
            <li className={content_style}>
              TailwindCSS 快速建立一致風格的 UI{" "}
            </li>
            <li className={content_style}>
              並透過 localStorage 實作購物車與使用者資料持久化。
            </li>
          </ul>

          <Hr />
        </div>
        <div className="des_II_content w-full">
          <h3 className={h3_style}>技術學習重點：</h3>
          <ul className={`flex flex-col gap-4`}>
            <li className={content_style}>
              Redux 的使用方式（dispatch、store、action、reducer）
            </li>
            <li className={content_style}>
              多頁面架構與路由設計（React Router 的套用）
            </li>
            <li className={content_style}>
              localStorage 儲存登入狀態、購物車內容
            </li>
            <li className={content_style}>
              Tailwind CSS 快速建立一致化的 UI 設計
            </li>
            <li className={content_style}>
              使用元件組合打造複雜的頁面（例如：Header、ProductCard、CartModal）
            </li>
            <li className={content_style}>
              表單驗證與狀態切換（如登入、註冊流程）
            </li>
          </ul>
          <Hr />
        </div>
        <div className="des_II_content">
          <h3 className={h3_style}>專案圖片</h3>
          <div className="des-img grid grid-cols-1 items-center justify-center w-full gap-4">
            <img
              src="/Rosen-profile/buyflow/HomePage.webp"
              alt="HomePage.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/buyflow/LoginPage.webp"
              alt="LoginPage.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/buyflow/MenberProfile.webp"
              alt="MenberProfile.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/buyflow/OrderTrackingPage.webp"
              alt="OrderTrackingPage.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/buyflow/ProductsPage.webp"
              alt="ProductsPage.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/buyflow/ProductDetailPage.webp"
              alt="ProductDetailPage.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/buyflow/CheckoutPage-1.webp"
              alt="CheckoutPage-1.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/buyflow/CheckoutPage-2.webp"
              alt="CheckoutPage-2.webp"
              loading="lazy"
            />

            <img
              src="/Rosen-profile/buyflow/Dashboard-3_OrderList.webp"
              alt="Dashboard-3_OrderList.webp"
              loading="lazy"
            />
          </div>
        </div>
      </>
    ),
    gitLink: "https://github.com/MoriCiao/BuyFlow.git",
    webLink: "https://moriciao.github.io/BuyFlow/",
    isToggle: false,
  },
  {
    id: 2,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="svg-item feather feather-check-square"
      >
        <polyline points="9 11 12 14 22 4"></polyline>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
    title: "TodoList",
    descript: (
      <>
        是一款日常任務管理工具，提供新增、刪除、切換完成狀態與主題風格切換功能。
      </>
    ),
    descript_II: (
      <>
        <div className="des_II_content ">
          <h3 className={h3_style}>運用技術：</h3>
          <p className={content_style}>
            React, JavaScript, HTML, CSS, LocalStorage
          </p>
          <Hr />
        </div>
        <div className="des_II_content ">
          <h3 className={h3_style}>專案簡介：</h3>
          <ul className="text-xl flex flex-col gap-4">
            <li className={content_style}>
              TodoList 使用 useReducer 狀態管理， 以及透過 useContext{" "}
              共享資料與主題切換等功能。 使用 Framer Motion 強化畫面的互動性。
            </li>
            <li className={content_style}>
              資料儲存於localStorage，適合練習狀態管理與 UI 操作。{" "}
            </li>
            <li className={content_style}>
              具備簡潔 UI 介面、任務新增與切換狀態、主題樣式切換（淺色/深色）
            </li>
          </ul>
          <Hr />
        </div>
        <div className="des_II_content ">
          <h3 className={h3_style}>技術學習重點：</h3>
          <ul className="text-xl flex flex-col gap-4">
            <li className={content_style}>
              使用 React useReducer 操作任務狀態（新增、刪除、切換完成）
            </li>
            <li className={content_style}>設計淺色/深色主題切換設定</li>
            <li className={content_style}>localStorage 應用於任務清單持久化</li>
            <li className={content_style}>
              運用 CSS 和 TailwindCSS，使畫面有互動設計（hover、按鈕動態等）
            </li>
          </ul>
          <Hr />
        </div>
        <div className="des_II_content ">
          <h3 className={h3_style}>專案圖片</h3>
          <div className="des-img grid grid-cols-2 gap-4">
            <img
              src="/Rosen-profile/todoPicture/homepage-dark.webp"
              alt="homepage-dark.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/todoPicture/homepage-light.webp"
              alt="homepage-light.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/todoPicture/newtodo-dark.webp"
              alt="homepage-dark.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/todoPicture/newtodo-light.webp"
              alt="homepage-light.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/todoPicture/setting-dark.webp"
              alt="homepage-dark.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/todoPicture/setting-light.webp"
              alt="homepage-light.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/todoPicture/allTasks-dark.webp"
              alt="homepage-dark.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/todoPicture/allTasks-light.webp"
              alt="homepage-light.webp"
              loading="lazy"
            />
          </div>
        </div>
      </>
    ),
    gitLink: "https://github.com/MoriCiao/project-todoList.git",
    webLink: "https://moriciao.github.io/project-todoList/",
    isToggle: false,
  },
  {
    id: 3,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        viewBox="0 0 24 24"
        fill="none"
        className="svg-item feather feather-search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    title: "Fetch API",
    descript: (
      <>
        Search Image 功能需要 Pexels API Key 才能進行圖片搜尋與下載。
        <br />
        Other API 則提供兩個免 API Key 的資料來源，可直接使用。
      </>
    ),
    descript_II: (
      <>
        <div className="des_II_content ">
          <h3 className={h3_style}>運用技術：</h3>
          <p className={content_style}>
            React, TypeScript, JavaScript, TailwindCSS, HTML/CSS
          </p>
          <Hr />
        </div>
        <div className="des_II_content ">
          <h3 className={h3_style}>專案簡介：</h3>
          <ul className="text-xl flex flex-col gap-4">
            <li className={content_style}>
              Search Image 有圖片搜尋、加入收藏、圖片下載等功能。
            </li>
            <li className={content_style}>
              Other API 整合兩個免 API Key 的開放資料，使用者可依需求自由切換。
            </li>
            <li className={content_style}>
              使用 Tailwind CSS 進行畫面排版與樣式設計。
            </li>
          </ul>
          <Hr />
        </div>
        <div className="des_II_content ">
          <h3 className={h3_style}>技術學習重點：</h3>
          <ol className="text-xl flex flex-col gap-4">
            <li className={content_style}>
              熟悉 API 非同步請求與資料渲染，將即時資訊呈現在網頁上。
            </li>
            <li className={content_style}>
              使用 useState 管理狀態，並透過 Props
              傳遞資料，提升元件間的可重用性。
            </li>
            <li className={content_style}>
              引入 Redux 進行狀態管理，為專案未來擴充提供彈性。
            </li>
            <li className={content_style}>
              運用 TailwindCSS 的 Grid 與 Flex 佈局，強化 RWD 響應式設計能力。
            </li>
            <li className={content_style}>
              搜尋及下載過程中顯示 Loading、Download 遮罩，提升使用者體驗。
            </li>
          </ol>
          <Hr />
        </div>
        <div className="des_II_content ">
          <h3 className={h3_style}>專案圖片</h3>
          <div className="des-img flex flex-col items-center justify-center gap-4">
            <img
              src="/Rosen-profile/fetchApi/fetchApi-1.webp"
              alt="fetchApi-1.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/fetchApi/fetchApi-2.webp"
              alt="fetchApi-2.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/fetchApi/fetchApi-3.webp"
              alt="fetchApi-3.webp"
              loading="lazy"
            />
            <img
              src="/Rosen-profile/fetchApi/fetchApi-4.webp"
              alt="fetchApi-4.webp"
              loading="lazy"
            />
          </div>
        </div>
      </>
    ),
    gitLink: "https://github.com/MoriCiao/project-FetchApi",
    webLink: "https://moriciao.github.io/project-FetchApi/",
    isToggle: false,
  },
  {
    id: 4,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="svg-item feather feather-database"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    title: "DataForm",
    descript: (
      <>是一個簡單的資料表單系統，能夠讓使用者輸入、檢查並儲存表單資訊。</>
    ),
    descript_II: (
      <>
        <div className="des_II_content ">
          <h3 className={h3_style}>運用技術：</h3>
          <p className={content_style}>
            React, TailwindCSS, JavaScript, LocalStorage, HTML/CSS
          </p>
          <Hr />
        </div>
        <div className="des_II_content ">
          <h3 className={h3_style}>專案簡介：</h3>
          <ul className="text-xl flex flex-col gap-4">
            <li className={content_style}>
              可透過關鍵字、日期範圍或快速篩選選項進行資料搜尋。
            </li>
            <li className={content_style}>
              點擊排序按鈕可依欄位進行升冪或降冪排列。
            </li>
            <li className={content_style}>
              勾選資料可移至垃圾桶，並可在垃圾桶頁面中確認是否永久刪除或還原。
            </li>
            <li className={content_style}>
              支援隱藏表格內容，提升使用者查找資料的便利性。
            </li>
            <li className={content_style}>
              所有資料會自動儲存在 localStorage 中，確保重新整理後仍保留。
            </li>
          </ul>

          <Hr />
        </div>
        <div className="des_II_content ">
          <h3 className={h3_style}>技術學習重點：</h3>
          <ul className="text-xl flex flex-col gap-4">
            <li className={content_style}>
              實作基本表單操作：input 處理與資料驗證。
            </li>
            <li className={content_style}>
              使用 useReducer 管理資料狀態，為每個 action 撰寫對應處理函式。
            </li>
            <li className={content_style}>
              資料透過 localStorage 儲存並於頁面載入時讀取。
            </li>
            <li className={content_style}>
              支援資料匯出功能，便於備份或外部使用。
            </li>
            <li className={content_style}>
              採用 Tailwind CSS 進行 UI 排版與樣式設計。
            </li>
          </ul>
          <Hr />
        </div>
        <div className="des_II_content flex flex-col items-center justify-center">
          <h3 className={h3_style}>專案圖片</h3>
          <div className="des-img flex flex-col items-center justify-center">
            <img
              src="/Rosen-profile/datafrom/dataform-1.webp"
              alt=""
              className=""
              loading="lazy"
            />
            <img
              src="/Rosen-profile/datafrom/dataform-2.webp"
              alt=""
              className=""
              loading="lazy"
            />
            <img
              src="/Rosen-profile/datafrom/dataform-3.webp"
              alt=""
              className=""
              loading="lazy"
            />
            <img
              src="/Rosen-profile/datafrom/dataform-4.webp"
              alt=""
              className=""
              loading="lazy"
            />
          </div>
        </div>
      </>
    ),
    gitLink: "https://github.com/MoriCiao/project-DataForm.git",
    webLink: "https://moriciao.github.io/project-DataForm/",
    isToggle: false,
  },
  {
    id: 5,
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="svg-item feather feather-camera"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
      </svg>
    ),
    title: "Photography",
    descript: (
      <>此專案是以攝影教學為主題的形象網站，採用 React + TailwindCSS 開發。</>
    ),
    descript_II: (
      <>
        <div className="des_II_content ">
          <h3 className={h3_style}>運用技術：</h3>
          <p className={content_style}>
            React, TailwindCSS, JavaScript, HTML/CSS
          </p>
          <Hr />
        </div>
        <div className="des_II_content ">
          <h3 className={h3_style}>專案簡介：</h3>
          <ul className="text-xl flex flex-col gap-4">
            <li className={content_style}>
              內容涵蓋攝影基礎知識，包括曝光三元素、白平衡、對焦模式、拍攝模式及焦段與鏡頭視角等
            </li>
            <li className={content_style}>具備 RWD 響應式設計</li>
          </ul>

          <Hr />
        </div>
        <div className="des_II_content ">
          <h3 className={h3_style}>技術學習重點：</h3>
          <ul className="text-xl flex flex-col gap-4">
            <li className={content_style}>
              善用 props 與 children 傳遞內容，提升可重用性。
            </li>
            <li className={content_style}>RWD 響應式設計。</li>
            <li className={content_style}>
              SCSS 區塊化管理樣式，讓主題頁獨立維護。
            </li>
          </ul>
          <Hr />
        </div>
        <div className="des_II_content flex flex-col items-center justify-center">
          <h3 className={h3_style}>專案圖片</h3>
          <div className="des-img flex flex-col items-center justify-center">
            <img
              src="/Rosen-profile/photography/photography-1.webp"
              alt=""
              className=""
              loading="lazy"
            />
            <img
              src="/Rosen-profile/photography/photography-2.webp"
              alt=""
              className=""
              loading="lazy"
            />
            <img
              src="/Rosen-profile/photography/photography-3.webp"
              alt=""
              className=""
              loading="lazy"
            />
          </div>
        </div>
      </>
    ),
    gitLink: "https://github.com/MoriCiao/project-photography.git",
    webLink: "https://moriciao.github.io/project-photography/",
    isToggle: false,
  },
];

const Projects = () => {
  const { SectionAnimate } = useContext(AppContext);
  const initState = {};

  function stateReducer(state, action) {
    switch (action.type) {
      case "IS_TOGGLE": {
        const item = action.payload;

        item.isToggle = !item.isToggle;

        return { ...state };
      }
      case "IS_TOGGLE_FALSE": {
        const item = action.payload;

        item.isToggle = false;

        return { ...state };
      }
      case "IS_TOGGLE_TRUE": {
        const item = action.payload;

        item.isToggle = true;

        return { ...state };
      }

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(stateReducer, initState);

  return (
    <motion.section
      {...SectionAnimate}
      className="projects mt-8 w-full flex flex-col items-center gap-8 "
    >
      {/* 這邊要有可以 Routes 導向每個 Projest 然後可以回到首頁 */}
      {projects &&
        projects.map((p) => {
          return (
            <div key={p.id} className={`container relative w-full`}>
              {/* 闔上按鈕 */}
              <div
                className="absolute top-0 right-2 w-10 h-10 z-1 cursor-pointer -rotate-90 scale-120"
                onClick={() =>
                  dispatch({ type: "IS_TOGGLE_FALSE", payload: p })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-log-in"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
              </div>

              {/* 內容本文 */}
              <div
                className={`p-item p-4 flex flex-col gap-2 cursor-pointer backdrop-blur-sm bg-gradient-to-br from-slate-900/50 via-slate-700/50 to-slate-900/50 rounded-xl border-white/50 border transtion duration-1000 ${
                  p.isToggle ? "sm:h-300 h-250" : "sm:h-50 h-80"
                }`}
                onClick={() => dispatch({ type: "IS_TOGGLE_TRUE", payload: p })}
              >
                {/* 專案小圖示、簡介 */}
                <div className="grid md:grid-cols-5 sm:grid-cols-4  grid-cols-1 sm:gap-4 gap-0 items-center">
                  <div className="rounded-md sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] p-2 overflow-hidden flex items-center justify-center m-auto hover:scale-115 transition duration-500">
                    <div className="img-svg w-full h-full flex sm:pr-4 items-center sm:justify-center justify-start">
                      {p.img}
                    </div>
                  </div>
                  <div className="project-info col-start-1 md:col-span-4 sm:col-span-3 col-span-2 flex flex-col gap-2 tracking-widest  select-none">
                    <h3 className="sm:text-2xl font-bold md:mt-4 sm:mt-2">
                      {p.title}
                    </h3>
                    <p className="sm:text-xl font-[500] md:mt-4 sm:mt-0">
                      {p.descript}
                    </p>
                  </div>
                </div>
                {/* 專案介紹 */}
                <div
                  className={`des_II ${
                    p.isToggle ? "opacity-100" : "opacity-0"
                  } relative transtion duration-1000 col-span-4 flex flex-col gap-4 items-start justify-start tracking-wide bg-gradient-to-br from-white/20 via-white/10 to-black/10`}
                >
                  <div className=" absolute sm:top-0 sm:right-0 sm:-translate-x-0 sm:w-auto w-full -right-1/2 -translate-x-1/2 p-4 sm:flex gap-4">
                    <div className="des_II_link flex sm:flex-row flex-col">
                      <a
                        href={p?.gitLink || null}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="a-tag tracking-widest "
                      >
                        <svg>
                          <rect></rect>
                        </svg>
                        GitHub
                      </a>
                      <a
                        href={p?.webLink || null}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="a-tag tracking-widest "
                      >
                        <svg>
                          <rect></rect>
                        </svg>
                        Visit Web
                      </a>
                    </div>
                  </div>
                  <div className="sm:mt-0 mt-28 w-full ">{p.descript_II}</div>
                </div>
              </div>

              <button
                className="p-link rounded-br-xl rounded-tl-xl border-l-2 border-t-1 border-white/50 bg-gradient-to-br from-slate-500/50 to-slate-900/50 select-none hover:font-bold text-center select-none cursor-pointer tracking-widest"
                onClick={() => dispatch({ type: "IS_TOGGLE", payload: p })}
              >
                {p.isToggle ? "LESS..." : "MORE..."}
              </button>
            </div>
          );
        })}
    </motion.section>
  );
};

export default Projects;
