import { useState, useContext, useReducer } from "react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../components/AppProvider";
import { h3 } from "framer-motion/client";
const Hr = () => <hr className="w-full opacity-50 " />;
const h3_style = "text-2xl font-bold";
const p_style = "text-xl flex flex-col gap-4";
const projects = [
  {
    id: 1,
    img: "/Rosen-profile/buyflow/logo_w.svg",
    title: "BuyFlow",
    descript: (
      <>
        BuyFlow
        是一個模擬真實購物體驗的電商平台，支援商品瀏覽、加入購物車、登入/註冊會員、訂單追蹤與結帳功能。
      </>
    ),
    descript_II: (
      <>
        <h3 className={h3_style}>運用技術：</h3>
        <p className={p_style}>
          React, Redux, TailwindCSS, JavaScript, LocalStorage, HTML/CSS
        </p>
        <Hr />
        <h3 className={h3_style}>專案簡介：</h3>
        <ul className={p_style}>
          <li>BuyFlow使用 Redux 處理跨頁面狀態管理</li>
          <li>TailwindCSS 快速建立一致風格的 UI </li>
          <li>並透過 localStorage 實作購物車與使用者資料持久化。</li>
        </ul>

        <Hr />
        <h3 className={h3_style}>技術學習重點：</h3>
        <ol className={p_style}>
          <li>Redux 的使用方式（dispatch、store、action、reducer）</li>
          <li>多頁面架構與路由設計（React Router 的套用）</li>
          <li>localStorage 儲存登入狀態、購物車內容</li>
          <li>Tailwind CSS 快速建立一致化的 UI 設計</li>
          <li>
            使用元件組合打造複雜的頁面（例如：Header、ProductCard、CartModal）
          </li>
          <li>表單驗證與狀態切換（如登入、註冊流程）</li>
        </ol>
        <Hr />
        <h3 className={h3_style}>專案圖片</h3>
        <div className="des-img grid grid-cols-1 gap-4">
          <img src="/Rosen-profile/buyflow/HomePage.png" alt="HomePage.png" />
          <img src="/Rosen-profile/buyflow/LoginPage.png" alt="LoginPage.png" />
          <img
            src="/Rosen-profile/buyflow/MenberProfile.png"
            alt="MenberProfile.png"
          />
          <img
            src="/Rosen-profile/buyflow/OrderTrackingPage.png"
            alt="OrderTrackingPage.png"
          />
          <img
            src="/Rosen-profile/buyflow/ProductsPage.png"
            alt="ProductsPage.png"
          />
          <img
            src="/Rosen-profile/buyflow/ProductDetailPage.png"
            alt="ProductDetailPage.png"
          />
          <img
            src="/Rosen-profile/buyflow/CheckoutPage-1.png"
            alt="CheckoutPage-1.png"
          />
          <img
            src="/Rosen-profile/buyflow/CheckoutPage-2.png"
            alt="CheckoutPage-2.png"
          />

          <img
            src="/Rosen-profile/buyflow/Dashboard-3_OrderList.png"
            alt="Dashboard-3_OrderList.png"
          />
        </div>
      </>
    ),
    gitLink: "https://github.com/MoriCiao/BuyFlow.git",
    webLink: "https://moriciao.github.io/BuyFlow/",
    isToggle: true,
  },
  {
    id: 2,
    img: "/Rosen-profile/pictrue/todo-dark.png",
    title: "TodoList",
    descript: (
      <>
        是一款日常任務管理工具，提供新增、刪除、切換完成狀態與主題風格切換功能。
      </>
    ),
    descript_II: (
      <>
        <h3 className={h3_style}>運用技術：</h3>
        <p className={p_style}>React, JavaScript, HTML, CSS, LocalStorage</p>
        <Hr />
        <h3 className={h3_style}>專案簡介：</h3>
        <ul className="text-xl flex flex-col gap-4 i">
          <li>
            TodoList 使用 useReducer 狀態管理， 以及透過 useContext{" "}
            共享資料與主題切換等功能。 使用 Framer Motion 強化畫面的互動性。
          </li>
          <li>資料儲存於localStorage，適合練習狀態管理與 UI 操作。 </li>
          <li>
            具備簡潔 UI 介面、任務新增與切換狀態、主題樣式切換（淺色/深色）
          </li>
        </ul>
        <Hr />
        <h3 className={h3_style}>技術學習重點：</h3>
        <ul className={p_style}>
          <li>使用 React useReducer 操作任務狀態（新增、刪除、切換完成）</li>
          <li>設計淺色/深色主題切換設定</li>
          <li>localStorage 應用於任務清單持久化</li>
          <li>
            運用 CSS 和 TailwindCSS，使畫面有互動設計（hover、按鈕動態等）
          </li>
        </ul>
        <Hr />
        <h3 className={h3_style}>專案圖片</h3>
        <div className="des-img grid grid-cols-2 gap-4">
          <img
            src="/Rosen-profile/todoPicture/homepage-dark.png"
            alt="homepage-dark.png"
          />
          <img
            src="/Rosen-profile/todoPicture/homepage-light.png"
            alt="homepage-light.png"
          />
          <img
            src="/Rosen-profile/todoPicture/newtodo-dark.png"
            alt="homepage-dark.png"
          />
          <img
            src="/Rosen-profile/todoPicture/newtodo-light.png"
            alt="homepage-light.png"
          />
          <img
            src="/Rosen-profile/todoPicture/setting-dark.png"
            alt="homepage-dark.png"
          />
          <img
            src="/Rosen-profile/todoPicture/setting-light.png"
            alt="homepage-light.png"
          />
          <img
            src="/Rosen-profile/todoPicture/allTasks-dark.png"
            alt="homepage-dark.png"
          />
          <img
            src="/Rosen-profile/todoPicture/allTasks-light.png"
            alt="homepage-light.png"
          />
        </div>
      </>
    ),
    gitLink: "https://github.com/MoriCiao/project-todoList.git",
    webLink: "https://moriciao.github.io/project-todoList/",
    isToggle: false,
  },

  {
    id: 3,
    img: "/Rosen-profile/pictrue/MoriCiao.jpg",
    title: "ImageSearch",
    descript: (
      <>
        這是一個基於 API
        的圖片搜尋工具，使用者可輸入關鍵字，立即取得相關圖片並顯示在畫面上。
      </>
    ),
    descript_II: (
      <>
        <h3 className={h3_style}>運用技術：</h3>
        <p className={p_style}>React, TailwindCSS, JavaScript, HTML/CSS</p>
        <Hr />
        <h3 className={h3_style}>專案簡介：</h3>
        <ul className={p_style}>
          <li>
            ImageSearch 使用 Pexels 提供的 API 金鑰串接圖片資料，並透過
            useReducer 管理收藏圖片（Favorites）的狀態與儲存邏輯。
          </li>
          <li>使用 Tailwind CSS 進行畫面排版與樣式設計。</li>
          <li>透過 framer-motion 製作動畫效果，增強互動性與視覺體驗。</li>
        </ul>

        <Hr />
        <h3 className={h3_style}>技術學習重點：</h3>
        <ol className={p_style}>
          <li>處理 API 非同步請求，實現圖片搜尋功能。</li>
          <li>練習 useState 狀態管理與 Props 資料傳遞。</li>
          <li>應用 useReducer 管理較複雜的狀態變化。</li>
          <li>以 Tailwind CSS 練習網格系統與排版布局。</li>
          <li>使用 framer-motion 製作元件動畫與過渡效果。</li>
          <li>搜尋過程中顯示 Loading 動畫畫面，提升使用者體驗。</li>
        </ol>
        <Hr />
        <h3 className={h3_style}>專案圖片</h3>
        <div className="des-img grid grid-cols-1 gap-4">
          <img
            src="/Rosen-profile/imagesearch/imagesearch-1.png"
            alt="magesearch-1.png"
          />
          <img
            src="/Rosen-profile/imagesearch/imagesearch-2.png"
            alt="magesearch-2.png"
          />
          <img
            src="/Rosen-profile/imagesearch/imagesearch-3.png"
            alt="magesearch-3.png"
          />
        </div>
      </>
    ),
    gitLink: "https://github.com/MoriCiao/project-DataForm.git",
    webLink: "https://moriciao.github.io/project-DataForm/",
    isToggle: false,
  },
  {
    id: 4,
    img: "/Rosen-profile/datafrom/dataform-img.png",
    title: "DataForm",
    descript: (
      <>是一個簡單的資料表單系統，能夠讓使用者輸入、檢查並儲存表單資訊。</>
    ),
    descript_II: (
      <>
        <h3 className={h3_style}>運用技術：</h3>
        <p className={p_style}>
          React, TailwindCSS, JavaScript, LocalStorage, HTML/CSS
        </p>
        <Hr />
        <h3 className={h3_style}>專案簡介：</h3>
        <ul className={p_style}>
          <li>可透過關鍵字、日期範圍或快速篩選選項進行資料搜尋。</li>
          <li>點擊排序按鈕可依欄位進行升冪或降冪排列。</li>
          <li>
            勾選資料可移至垃圾桶，並可在垃圾桶頁面中確認是否永久刪除或還原。
          </li>
          <li>支援隱藏表格內容，提升使用者查找資料的便利性。</li>
          <li>所有資料會自動儲存在 localStorage 中，確保重新整理後仍保留。</li>
        </ul>

        <Hr />
        <h3 className={h3_style}>技術學習重點：</h3>
        <ol className={p_style}>
          <li>實作基本表單操作：input 處理與資料驗證。</li>
          <li>
            使用 useReducer 管理資料狀態，為每個 action 撰寫對應處理函式。
          </li>
          <li>資料透過 localStorage 儲存並於頁面載入時讀取。</li>
          <li>支援資料匯出功能，便於備份或外部使用。</li>
          <li>採用 Tailwind CSS 進行 UI 排版與樣式設計。</li>
        </ol>
        <Hr />
        <h3 className={h3_style}>專案圖片</h3>
        <div className="des-img grid grid-cols-1 gap-4 items-center justify-center">
          <img
            src="/Rosen-profile/datafrom/dataform-1.png"
            alt=""
            className="w-full"
          />
          <img
            src="/Rosen-profile/datafrom/dataform-2.png"
            alt=""
            className="w-full"
          />
          <img
            src="/Rosen-profile/datafrom/dataform-3.png"
            alt=""
            className="w-full"
          />
          <img
            src="/Rosen-profile/datafrom/dataform-4.png"
            alt=""
            className="w-full"
          />
        </div>
      </>
    ),
    gitLink: "https://github.com/MoriCiao/project-search.git",
    webLink: "#",
    isToggle: false,
  },
];

const Projects = () => {
  const { SectionAnimate } = useContext(AppContext);
  const initState = {
    isToggle: false,
  };

  function stateReducer(state, action) {
    switch (action.type) {
      case "IS_TOGGLE": {
        const item = action.payload;

        item.isToggle = !item.isToggle;

        return { ...state };
      }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(stateReducer, initState);

  return (
    <motion.div
      {...SectionAnimate}
      className="projects mt-8 w-full flex flex-col gap-8"
    >
      {/* 這邊要有可以 Routes 導向每個 Projest 然後可以回到首頁 */}
      {projects &&
        projects.map((p) => {
          return (
            <div key={p.id} className={`container`}>
              <div
                className={`p-item p-4 flex flex-col gap-8 cursor-pointer bg-gradient-to-br from-slate-900/50 via-slate-700/50 to-slate-900/50 rounded-xl border-white/50 border transtion duration-1000 ${
                  p.isToggle ? "h-180" : "h-50"
                }`}
              >
                {/* 專案小圖示、簡介 */}
                <div className="grid grid-cols-4 gap-12">
                  <div className="rounded-md w-[10rem] h-[10rem] p-4 overflow-hidden flex items-center justify-center bg-gradient-to-br from-white/10 via-white/10 to-black/10 hover:scale-105 transition duration-500">
                    <img
                      src={p.img}
                      alt="project_img"
                      className="w-full"
                      draggable="false"
                    />
                  </div>
                  <div className="col-start-2 col-span-3 flex flex-col gap-2 tracking-widest  select-none">
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                    <p className="text-xl font-[600]">{p.descript}</p>
                  </div>
                </div>
                {/* 專案介紹 */}
                <div
                  className={`des_II ${
                    p.isToggle ? "opacity-100" : "opacity-0"
                  } relative transtion duration-1000 col-span-4 flex flex-col gap-4 items-start justify-start tracking-wide bg-gradient-to-br from-white/20 via-white/10 to-black/10`}
                >
                  <div className=" absolute top-0 right-0 p-4 flex gap-4">
                    <div className="des_II_link">
                      <a
                        href={p?.gitLink || null}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="a-tag tracking-widest"
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
                        className="a-tag tracking-widest"
                      >
                        <svg>
                          <rect></rect>
                        </svg>
                        Visit Web
                      </a>
                    </div>
                  </div>
                  {p.descript_II}
                </div>

                <button
                  className="p-link rounded-br-xl rounded-tl-xl border-l-2 border-t-1 border-white/50 bg-gradient-to-br from-slate-500/50 to-slate-900/50 select-none hover:font-bold text-center select-none cursor-pointer tracking-widest"
                  onClick={() => dispatch({ type: "IS_TOGGLE", payload: p })}
                >
                  {p.isToggle ? "LESS..." : "MORE..."}
                </button>
              </div>
            </div>
          );
        })}
    </motion.div>
  );
};

export default Projects;
