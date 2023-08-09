import React, { useState } from "react";
import "./Common.css";

//component
import Project from "../components/Project";
import Navbar from "../components/Navbar";
import FontControlBox from "../components/FontControlBox";
import Skills from "../components/Skills";
import Archiving from "../components/Archiving";
import ProgrammingExperience from "../components/ProgrammingExperience";
import BeforeCareer from "../components/BeforeCareer";
import Footer from "../components/Footer";
import Intruduce from "../components/Intruduce";
import AboutSol from "../components/AboutSol";

const Main = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const contactClose = () => {
    setContactOpen(!contactOpen);
  };

  const [NarBarTitle, NarBarTitleChange] = useState([
    "About Sol",
    "Skills",
    "Projects",
    "Archiving",
    "Programming Experience",
    "Before Career",
  ]);

  return (
    <>
      <Navbar NarBarTitle={NarBarTitle} />

      <main className="main-container">
        <Intruduce />
        <AboutSol
          NarBarTitle={NarBarTitle}
          contactOpen={contactOpen}
          contactClose={contactClose}
        />
        <Skills NarBarTitle={NarBarTitle} />
        <Project NarBarTitle={NarBarTitle} />
        <Archiving NarBarTitle={NarBarTitle} />
        <ProgrammingExperience NarBarTitle={NarBarTitle} />
        <BeforeCareer NarBarTitle={NarBarTitle} />
        <FontControlBox />
      </main>
      <Footer />
    </>
  );
};

export default Main;
