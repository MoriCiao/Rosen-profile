import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../components/AppProvider";

import HeaderIntro from "../components/HeaderIntro";
import HeaderGuided from "../components/HeadeGuided";
import HeaderContact from "../components/HeaderCotact";

const Header = () => {
  const { SectionAnimate } = useContext(AppContext);
  return (
    <motion.section
      {...SectionAnimate}
      className="header-info w-full flex flex-col h-full relative "
    >
      <div>
        <HeaderIntro />
      </div>

      <div className="absolute bottom-0 right-0">
        <HeaderContact />
      </div>
    </motion.section>
  );
};

export default Header;
