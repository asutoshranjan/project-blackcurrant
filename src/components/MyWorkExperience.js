import React from "react";
import Container from "./Container";
import Lottie from "react-lottie-player";
import Reveal from "./animations/Reveal";
import lottieJson from "../images/lottie-assets/computer-loop.json";
import biglynx from "../images/biglynx_logo.png";
import appwrite from "../images/appwrite_logo.png";
import fractal from "../images/fractal_logo1.png";
import freelance from "../images/freelance_logo_1.png";
import { Link } from "gatsby";

export default function WorkExperience() {
  return (
    <div id="work">
      <Container>
        <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-start">
          <div className="md:5/12 lg:w-1/2">
            <Reveal>
              <Lottie
                className="w-full lg:h-72"
                loop
                animationData={lottieJson}
                play
              />
            </Reveal>
          </div>
          <div className="md:w-7/12 lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-secondary"
            >
              <path
                fill-rule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clip-rule="evenodd"
              />
            </svg>

            <Reveal>
              <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
                Previous work experience
              </h2>
            </Reveal>
            <p className="text-gray-300">
              Seasoned developer adept at crafting performant solutions.
              Delivering pixel-perfect designs, managing end-to-end development,
              and engineering tailored solutions for enterprises, I've played a
              key role in building products from inception.
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-4 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img src={biglynx} className="h-12" alt="biglynx" />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Mobile Developer
                </h5>
                <p className="text-gray-300 text-sm">
                  As a React Native app developer, I deliver pixel-perfect
                  designs, manage end-to-end development, handle API
                  integrations, and ensure Play Store releases
                </p>
              </div>
              <a
                href="https://www.biglynx.com/"
                target="_blank"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">biglynx.com</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img src={appwrite} className="h-12" alt="appwrite" />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  DevRel Intern
                </h5>
                <p className="text-gray-300 text-sm">
                  Helped developers use backend services through tech blogs and
                  enhanced docs. Collaborated globally, fostering a vibrant
                  community across 20+ countries
                </p>
              </div>
              <a
                href="https://appwrite.io/"
                target="_blank"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">appwrite.io</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img src={fractal} className="h-12" alt="fractal" />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Project Intern
                </h5>
                <p className="text-gray-300 text-sm">
                  Crafted React component library used in 200+ projects and
                  developed a GCS SDK for seamless file operations. Proficient
                  in Javascript, React, FastAPI, and GCP
                </p>
              </div>
              <a
                href="https://fractal.ai/"
                target="_blank"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">fractal.ai</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-gray-800">
              <img src={freelance} className="h-12" alt="freelance" />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  Software Developer
                </h5>
                <p className="text-gray-300 text-sm">
                  I crafted visually stunning and performant mobile and web apps
                  for VQR Tech and Teamhash Foundation, aligning perfectly with
                  their business needs
                </p>
              </div>
              <Link
                to="/work"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
