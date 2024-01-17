import React from "react";
import Container from "./Container";
import Reveal from "./animations/Reveal";
import TextLoop from "./animations/TextLoop";
import videobg from "../videos/videobg.mp4";
import DelayReveal from "./animations/DelayReveal";

export default function HeroSection() {
  return (
    <div className="relative" id="home">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover w-full h-full"
        style={{ opacity: 0.18 }}
      >
        <source src={videobg} type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative pt-36 ml-auto h-full xl:h-screen">
          <div className="lg:w-2/3 text-center mx-auto">
            <Reveal>
              <h1 className="text-white font-itcItalic text-5xl md:text-6xl xl:text-7xl">
                Hello it’s me
              </h1>
            </Reveal>
            <DelayReveal delay={0.82}>
              <h1 className="mt-3 text-purple-400 font-bold text-5xl md:text-6xl xl:text-7xl">
                Asutosh.
              </h1>
            </DelayReveal>
            <DelayReveal delay={1.2}>
              <div className="w-2/5 md:w-2/5 lg:w-3/6 xl:w-2/4 text-center">
                <TextLoop />
              </div>
            </DelayReveal>
            <p
              className="mt-20 text-gray-200/90 font-atkinsonHyperlegible"
              style={{ fontSize: "1.12rem", lineHeight: "1.606rem" }}
            >
              I’m a full-stack web and mobile app developer specializing in
              building stunning, responsive, and performant applications.
              Passionate for crafting unique user experiences, I build solutions
              that align perfectly with your product vision.{" "}
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="#about"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Let’s connect
                </span>
              </a>
              <a
                href="https://drive.google.com/file/d/1ZFYzZf5UTPMeZvH79GIUbXLPA-FL53qB/view?usp=drive_link"
                target="_blank"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 before:border-gray-700 before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  View resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
