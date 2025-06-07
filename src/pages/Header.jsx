import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeaderIntro = ({ name }) => {
  return (
    <div className="">
      <h1 className="text-[2rem]">
        Hi{" "}
        <motion.span
          animate={{
            color: [
              "#f43f5e",
              "#f59e0b",
              "#10b981",
              "#3b82f6",
              "#8b5cf6",
              "#f43f5e",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
          className="useState-area"
        >
          {name || "Stranger"}
        </motion.span>
        ， I'm <br />
        <strong>Rosen</strong>
      </h1>
      <p className="py-4">
        目前對於網頁前端開發持續學習中，由於是處於轉行當中的我，對HTML、CSS、JavaScript、React較為熟悉。現代科技一直在進步，個人的技能也需要向未來持續增進。
      </p>
    </div>
  );
};

const HeaderGuided = () => {
  const guidedItems = [
    { link: "/Rosen-profile/", name: "#HomePage", span: "首頁" },
    { link: "/Rosen-profile/story", name: "#story", span: "個人經歷" },
    { link: "/Rosen-profile/work", name: "#work", span: "工作經驗" },
    { link: "/Rosen-profile/skills", name: "#skill", span: "技能專長" },
    {
      link: "/Rosen-profile/projects",
      name: "#projects",
      span: "專案製作",
    },
  ];

  return (
    <div className="text-[1.5rem]">
      <ul>
        {guidedItems.map((item, index) => {
          return (
            <motion.li
              style={{ fontWeight: "400" }}
              whileHover={{
                textShadow: "0px 0px 10px  rgb(105, 212, 255)",
                color: "#A5DEE4",
              }}
              transition={{ duration: 0.3 }}
              className={`guided-li pb-2 w-[15rem]`}
              key={index}
            >
              <Link to={item.link} className="guided-item flex items-center">
                <div className="guided-line w-[15px] h-[2px] flex-none mr-2"></div>
                <span className="flex-1">{item.span}</span>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

const HeaderForm = ({ inputElement, HandleChangeName }) => {
  return (
    <div className="HeaderForm">
      <form
        action="https://formsubmit.co/bboynoice@Gmail.com"
        method="POST"
        className="w-80 p-0"
      >
        <label htmlFor="">Name</label>
        <input
          className="indent-[2.5%] rounded-md mb-4"
          name="name"
          type="text"
          placeholder="Your name or Business units"
          ref={inputElement}
          // 對應
          onChange={HandleChangeName}
        />
        <label htmlFor="">Email</label>
        <input
          className="indent-[2.5%]  rounded-md mb-4"
          name="email"
          type="email"
          placeholder="Email Address"
        />
        <label htmlFor="">Message</label>
        <textarea
          className="indent-[2.5%] resize-none  rounded-md mb-4"
          name="message"
          id=""
          placeholder="Your Message ..."
          required
        ></textarea>
        <div className="">
          <motion.button
            whileTap={{
              backgroundColor: "rgb(255, 177, 27)",
            }}
            className="bg-sky-900 px-2 py-1  rounded-md"
            type="submit"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

const Header = () => {
  console.log("Header render ....");
  // 新增旅客，當Name 被輸入時，上方名稱會自動修正。
  const [name, setName] = useState("");
  const HandleChangeName = (e) => {
    console.log("HandleChangeName render ...");

    setName(e.target.value);
    console.log(`使用者在input輸入 ${e.target.value}`);
  };

  const inputElement = useRef(null);
  // 第一次載入頁面時，focus在表格內。
  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <header className="header">
      <div>
        <section className="grid grid-rows-3 items-start mt-10">
          <HeaderIntro name={name} />
          <HeaderGuided />

          <HeaderForm
            inputElement={inputElement}
            HandleChangeName={HandleChangeName}
          />
        </section>
      </div>
    </header>
  );
};

export default Header;
