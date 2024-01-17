import React from "react";
import "../styles/global.css";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import HeroSection from "../components/HeroSection";
import WorkExperience from "../components/MyWorkExperience";
import Projects from "../components/MyProjects";
import Blogs from "../components/MyBlogs";
import About from "../components/MyAbout";
import More from "../components/MyBottomSection";
import icon from "../images/icon.png";
import TechStack from "../components/MyTechStack";

export default function Index() {
  return (
    <body className="bg-gray-900">
      <AppHeader />
      <main class="space-y-40 mb-40">
        <HeroSection />
        <WorkExperience />
        <TechStack />
        <Projects />
        <Blogs />
        <About />
        <More />
      </main>
      <AppFooter />
    </body>
  );
}

export const Head = () => (
  <>
    <link rel="icon" type="image/png" href={icon} />{" "}
    <title>Asutosh Ranjan</title>
  </>
);
