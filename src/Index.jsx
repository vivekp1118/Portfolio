import React, { useEffect } from "react";
import Hero from "./Hero";
import Info from "./Info";
import Skills from "./Skills";
import Projects from "./Projects";
import MiniProjects from "./MiniProjects";
import AboutMe from "./About-Me";
import Contact from "./Contact";
import { Cursor } from "./Utils/Cursor";
import { initializeCursor } from "./Utils/Functions/initializeCursor";
import { PageScroller } from "./Utils/PageScroller";
import { Menu } from "./Utils/Menu";
import { menuModel } from "./Utils/Functions/menu-functions";
import { AnswerBoxProvider } from "./AnswerBoxContext";
import { MobileContext } from "./Utils/Context";
import { useContext } from "react";
import PreLoader from "./PreLoader";

export default function Index() {
  const { isLoading } = useContext(MobileContext);

  useEffect(() => {
    menuModel()
    initializeCursor()
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [])

  return (
    <>
      {isLoading && <PreLoader/>}
      <div className="box">
        <Hero />
      </div>
      <Info />
      <Skills />
      <Projects />
      <MiniProjects />
      <AboutMe />
      <Contact />
      <PageScroller />
      <Cursor />
      <Menu />
    </>
  )

}
