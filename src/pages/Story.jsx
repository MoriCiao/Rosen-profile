import React, { useContext } from "react";
import { easeInOut, motion } from "framer-motion";
import { AnimateContext } from "../App";
const Story = () => {
  const { BgAnimate, BgWord, SectionAnimate } = useContext(AnimateContext);

  console.log("Story render ...");
  return (
    <motion.section
      {...SectionAnimate}
      id="story"
      className="story overflow-y-overlay scroll-smooth"
    >
      <div className="storyBg fixed z-[-1] xl:top-0 sm:top-48 left-0 overflow-hidden select-none pointer-events-none w-full h-full">
        <motion.img
          {...BgAnimate}
          className="absolute z-[-1]"
          src="/Rosen-profile/pictrue/icon-point.png"
          alt="point.png"
        />
        <motion.img
          {...BgWord}
          className="object-cover"
          src="/Rosen-profile/pictrue/icon-Stroy.png"
          alt="Stroy.png"
        />
      </div>
      {/* <h1 className="text-[2rem] mb-2">Story</h1> */}

      <p className="mb-2">
        學習前端的初衷是在目前公司，經常使用
        <strong style={{ color: "rgb(255, 177, 27)" }}> Excel </strong>
        但沒有效率的方式去處理各種工作，導致完成時間拉長。
      </p>
      <p className="mb-2">
        因此，我花幾個月在家研究 Excel如何提高效率， 把需要 30 - 60 分鐘的事情，
        <strong style={{ color: "rgb(255, 177, 27)" }}>
          提高效率變成 10 - 20 分鐘
        </strong>{" "}
      </p>
      <p className="mb-2">
        從 Excel 的啟發，開始買線上課程自學 HTML、CSS、SCSS、JavaScript
        、React。非本科系的我學會新技能加以運用，感受到
        <strong style={{ color: "rgb(255, 177, 27)" }}>自我成長的重要性</strong>
        。
      </p>
    </motion.section>
  );
};

export default Story;
