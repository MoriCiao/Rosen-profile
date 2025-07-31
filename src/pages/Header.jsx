import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../components/AppProvider";

import HeaderIntro from "../components/HeaderIntro";
import HeaderGuided from "../components/HeadeGuided";
import HeaderContact from "../components/HeaderCotact";

const Header = () => {
  return (
    <section className="w-full flex flex-col gap-8 h-full relative">
      <div>
        <HeaderIntro />
      </div>
      <div className="py-8">
        <HeaderGuided />
      </div>
      <div className="absolute bottom-0 left-0">
        <HeaderContact />
      </div>
    </section>
  );
};

export default Header;
