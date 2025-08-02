import React from "react";
import { Routes, Route } from "react-router-dom";
import Story from "../pages/Story";
import Skills from "../pages/Skills";
import Projects from "../pages/Projests";
import Page404 from "../pages/Page404";

import MainArea from "../pages/MainArea";
import Header from "../pages/Header";
const AppRoute = () => {
  return (
    <section className="app_route w-full h-full">
      <Routes>
        <Route path="/Rosen-profile" element={<MainArea />} />
        <Route path="/Rosen-profile/homepage" element={<Header />} />

        <Route path="/Rosen-profile/story" element={<Story />} />
        <Route path="/Rosen-profile/skills" element={<Skills />} />
        <Route path="/Rosen-profile/projects/" element={<Projects />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </section>
  );
};

export default AppRoute;
