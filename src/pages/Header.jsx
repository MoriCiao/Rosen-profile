import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../components/AppProvider";

import HeaderIntro from "../components/HeaderIntro";
import HeaderGuided from "../components/HeadeGuided";
import HeaderContact from "../components/HeaderCotact";

const Header = () => {
  const { SectionAnimate } = useContext(AppContext);

  function checkWindowHeight() {
    const target = document.querySelector(".contact");
    if (window.innerWidth < 480) {
      target.classList.add("contact-bg");
    } else {
      target.classList.remove("contact-bg");
    }
  }

  return (
    <motion.section
      {...SectionAnimate}
      className="header-info w-full flex flex-col md:h-auto h-full "
    >
      <div className="header-intro">
        <HeaderIntro />
      </div>

      <div className="contact absolute lg:bottom-0 -bottom-4 right-0 ">
        <HeaderContact />
      </div>
    </motion.section>
  );
};

export default Header;
