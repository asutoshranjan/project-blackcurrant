import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import Reveal from "./animations/Reveal";
import Typescript from "../images/tech-stack/Typescript.png";
import Javascript from "../images/tech-stack/Javascript.png";
import Dart from "../images/tech-stack/Dart.png";
import Python from "../images/tech-stack/Python.png";
import Java from "../images/tech-stack/Java.png";
import Flutter from "../images/tech-stack/Flutter.png";
import RNative from "../images/tech-stack/RNative.png";
import ReactI from "../images/tech-stack/React.png";
import Gatsby from "../images/tech-stack/Gatsby.png";
import Node from "../images/tech-stack/Node.png";
import express from "../images/tech-stack/Express.png";
import Flask from "../images/tech-stack/Flask.png";
import Graphql from "../images/tech-stack/Graphql.png";
import Firebase from "../images/tech-stack/Firebase.png";
import Aws from "../images/tech-stack/AWS.png";
import Docker from "../images/tech-stack/Docker.png";
import Bloc from "../images/tech-stack/Bloc.png";
import Illustrator from "../images/tech-stack/Illustrator.png";
import AfterEffects from "../images/tech-stack/AfterEffects.png";
import Figma from "../images/tech-stack/Figma.png";
import MongoDB from "../images/tech-stack/MongoDB.png";
// Remove GCP if not used

export default function TechStack() {
  const techStack = [
    { title: "Javascript", iconUrl: Javascript },
    { title: "Typescript", iconUrl: Typescript },
    { title: "Dart", iconUrl: Dart },
    { title: "Python", iconUrl: Python },
    { title: "Java", iconUrl: Java },
    { title: "Flutter", iconUrl: Flutter },
    { title: "React Native", iconUrl: RNative },
    { title: "Bloc", iconUrl: Bloc },
    { title: "React", iconUrl: ReactI },
    { title: "Gatsby", iconUrl: Gatsby },
    { title: "NodeJS", iconUrl: Node },
    { title: "Express", iconUrl: express },
    { title: "Flask", iconUrl: Flask },
    { title: "GraphQL", iconUrl: Graphql },
    { title: "MongoDB", iconUrl: MongoDB },
    { title: "Firebase", iconUrl: Firebase },
    { title: "AWS", iconUrl: Aws },
    { title: "Docker", iconUrl: Docker },
    { title: "Illustrator", iconUrl: Illustrator },
    { title: "After Effects", iconUrl: AfterEffects },
    { title: "Figma", iconUrl: Figma },
  ];

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div id="techstack">
      <Container>
        <div className="mt-16">
          <div className="mb-12 space-y-2 text-center">
            <Reveal>
              <h2 className="mt-5 mb-1 text-3xl font-bold md:text-4xl text-white">
                Tech Stack
              </h2>
            </Reveal>
            <p className="lg:mx-auto lg:w-6/12 text-gray-300">
              The languages, frameworks, libraries, tools and technologies that
              I am proficient in and use to build web and mobile applications.
            </p>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={techVariants}
            className="mx-2 md:mx-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-6"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                <TechStackItem title={tech.title} iconUrl={tech.iconUrl} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

function TechStackItem({ title, iconUrl }) {
  return (
    <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/20 rounded-lg overflow-hidden border border-gray-700">
      <div className="flex flex-col items-center justify-center p-4">
        <img
          src={iconUrl}
          className="w-12 h-12 mb-2"
          width="512"
          height="512"
          alt={`${title} icon`}
        />
        <p style={{ fontFamily: "Roboto" }} className="text-white text-center">
          {title}
        </p>
      </div>
    </div>
  );
}
