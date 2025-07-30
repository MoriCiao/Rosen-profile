import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../components/AppProvider";
import Contact from "../components/HeaderCotact";
import HeaderIntro from "../components/HeaderIntro";
import HeaderGuided from "../components/HeadeGuided";
import HeaderContact from "../components/HeaderCotact";

const Header = () => {
  // 新增旅客，當Name 被輸入時，上方名稱會自動修正。
  const [name, setName] = useState("");
  const HandleChangeName = (e) => {
    setName(e.target.value);
    console.log(`使用者在input輸入 ${e.target.value}`);
  };

  const inputElement = useRef(null);
  // 第一次載入頁面時，focus在表格內。
  // useEffect(() => {
  //   inputElement.current.focus();
  // }, []);

  return (
    <section className="w-full flex flex-col gap-8">
      <div>
        <HeaderIntro name={name} />
      </div>
      <div className="py-8">
        <HeaderGuided />
      </div>
      {/* <div>
        <HeaderContact
          inputElement={inputElement}
          HandleChangeName={HandleChangeName}
        />
      </div> */}
    </section>
  );
};

export default Header;
