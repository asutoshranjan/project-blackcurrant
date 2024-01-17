import React from "react";
import Container from "./Container";
import DP1 from "../images/Asutosh_DP1.png";
import DP2 from "../images/Asutosh_DP2.jpg";
import DP3 from "../images/Asutosh_DP3.jpg";

export default function About() {
  return (
    <div id="about" className="relative pt-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
      </div>
      <Container>
        <div className="relative">
          <div className="flex items-center justify-center -space-x-2">
            <img
              loading="lazy"
              width="200"
              height="200"
              src={DP2}
              alt="Avatar"
              className="h-12 w-12 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src={DP1}
              alt="Avatar"
              className="z-10 h-16 w-16 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src={DP3}
              alt="Avatar"
              className="relative h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-3xl font-bold text-white md:text-4xl">
              Let’s Connect
            </h1>
            <p className="text-center text-xl text-gray-300">
              Just say hello or let's talk about your next project, startup or
              idea I can help you build and scale with design and code.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:asutoshranjan.work@gmail.com"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  Write email
                </span>
              </a>
              <a
                href="#contacts"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 before:border-gray-700 before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Contact me
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
