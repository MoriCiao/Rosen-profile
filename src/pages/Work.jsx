import { React, Fragment } from "react";
import { easeInOut, motion } from "framer-motion";
const Work = () => {
  console.log("Work render ...");
  const worksList = [
    { id: 1, work: "海龜舊傷助理", duration: "2017/ 02 ~ 2017/ 08" },
    {
      id: 2,
      work: "穩發遠洋漁船",
      duration: "2017/ 12 ~ 2018/ 09",
    },
    { id: 3, work: "露易莎咖啡廳", duration: "2020/ 03 ~ 2021/ 08" },
    { id: 4, work: "Musashi 職人的店", duration: "2022/ 03 ~ 今日" },
  ];

  return (
    <motion.section
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-y-overlay scroll-smooth"
      id="work"
    >
      <div className="storyBg absolute z-[-1]">
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
          src="Rosen-profile/pictrue/icon-point.png"
          alt="point.png"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 0.7,
            scale: 1.5,
            rotate: -15,
            x: [-500],
            y: [250],
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="object-cover"
          src="Rosen-profile/pictrue/icon-works.png"
          alt="works.png"
        />
      </div>
      <div className="work">
        <h1 className="text-[2rem] mb-2">Work Experience</h1>
        {worksList.map((work, id) => {
          return (
            <Fragment key={id}>
              <motion.p
                whileHover={{
                  color: "rgb(255, 177, 27)",
                  x: "-5px",
                  y: "-5px",
                  boxShadow: "3px 3px 2px rgb(0,0,0,.3)",
                }}
                transition={{ duration: 0.5, ease: easeInOut }}
                className="text-[1.15rem] rounded-md flex mb-2 max-w-[400px]"
              >
                <span className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                {work.work}：{work.duration}
              </motion.p>
            </Fragment>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Work;
