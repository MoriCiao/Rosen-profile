import React, { useContext } from "react";
import { easeInOut, motion } from "framer-motion";
import { AppContext } from "../components/AppProvider";

const Hr = () => {
  return <hr className="my-2 w-full opacity-50" />;
};

const Story = () => {
  const { SectionAnimate } = useContext(AppContext);
  const h3_style = "text-2xl font-bold pb-4 ";

  return (
    <motion.section
      {...SectionAnimate}
      id="story"
      className="story overflow-y-overlay my-4 scroll-smooth p-4 tracking-widest backdrop-blur-sm"
    >
      <svg>
        <rect></rect>
      </svg>
      <div className="story-container">
        <div className="story-item">
          <h2 className="mb-4 font-bold md:text-3xl">前端轉職旅程</h2>
          <p className="mb-4">
            過去在零售業擔任部門擔當，處理部門內各種大小事。但隨著時間推移，發現公司發展趨緩甚至退步，這讓我開始思考未來的方向。
          </p>
          <p className="mb-4">
            覺得能親手展示自己技能是一件很酷的事，萌生了打造{" "}
            <strong>「個人網站 + 作品網站」</strong>的想法，於是我開始從 HTML
            學起，深入 CSS、JavaScript，到 React 等技術，過程中也深刻感受到{" "}
            <strong>「自我成長」</strong>
            的價值。
          </p>
          <p className="mb-4">
            轉職後，希望成為一位能獨立開發完整前端畫面，並能與團隊協作完成專案的工程師。
          </p>
          <Hr />
        </div>

        <div className="story-item">
          <h3 className={h3_style}>學習方式與內容</h3>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>學習方式：透過 Udemy、YouTube 與 ChatGPT 自學</li>
            <li>每日投入時間：約 4-5 小時專注於前端開發</li>
            <li>
              問題解決方式：先自行 <strong>思考與實作</strong>，再詢問 ChatGPT
              協助釐清方向
            </li>
            <li>學習內容：HTML、CSS、JavaScript、React、Tailwind CSS、Redux</li>
          </ul>
          <Hr />
        </div>

        <div className="story-item">
          <h3 className={h3_style}>實作經驗</h3>
          <p className="mb-2">目前完成的專案包含：</p>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>
              <strong>TodoList</strong>{" "}
            </li>
            <li>
              <strong>Fetch API</strong>{" "}
            </li>
            <li>
              <strong>DataForm</strong>{" "}
            </li>
            <li>
              <strong>BuyFlow（電商平台）</strong>{" "}
            </li>
          </ul>
          <p className="mb-4">
            所有專案皆已上傳至 GitHub 並成功部署於 GitHub Pages。
          </p>
          <Hr />
        </div>

        <div className="story-item">
          <h3 className={h3_style}>技術突破與心得</h3>
          <ul className="mb-4 list-inside list-disc space-y-2">
            <li>
              <strong>CSS：</strong>從最初只能寫單一 CSS 檔，到後來能整合 SCSS
              檔案管理樣式，也學會 Bootstrap、Tailwind CSS、Framer
              Motion。個人偏好 Tailwind CSS 搭配動畫效果進行開發。
            </li>
            <li>
              <strong>JavaScript & React 學習之路：</strong>
              從一開始對框架一無所知，到能使用 <code>useState</code>、
              <code>useEffect</code> 等基礎， 再深入學習 <code>useContext</code>{" "}
              與 <code>useReducer</code>，最終接觸 <strong>Redux</strong>{" "}
              等大型應用的狀態管理策略。
            </li>
          </ul>
          <Hr />
        </div>

        <div className="story-item">
          <h3 className={h3_style}>未來學習計畫</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>動畫進階（SVG / Framer Motion）</li>
            <li>進階 JavaScript 技巧與設計模式</li>
          </ul>
          <Hr />
        </div>
      </div>
    </motion.section>
  );
};

export default Story;
