import React from "react";
import Container from "./Container";
import Reveal from "./animations/Reveal";
import LocalEase from "../images/LocalEase-Banner.jpg";
import MM from "../images/MM-Banner.jpg";
import ICS from "../images/ICS-Banner.png";

export default function Projects() {
  return (
    <div id="projects">
      <Container>
        <div className="mb-12 space-y-2 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl text-white">
              Featured Projects
            </h2>
          </Reveal>
          <p className="lg:mx-auto lg:w-6/12 text-gray-300">
            Some of the mobile and web app projects I have worked on in the past
            leveraging my skills in various technologies.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl border border-gray-700 bg-gray-700 bg-opacity-50">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={MM}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-white">
                Monday Morning: News App for Student Media Body.
              </h3>
              <p className="mt-6 mb-8 text-gray-300">
                Moblie app connecting students to campus news, events, and
                discussions, facilitating blog and magazine publishing
              </p>
              <div className="flex-row">
                <a
                  className="inline-block"
                  target="_blank"
                  href="https://github.com/Monday-Morning/project-pegasus"
                >
                  <span className="text-blue-300 hover:text-purple-500">
                    GitHub
                  </span>
                </a>
                <a
                  className="inline-block ml-6"
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=in.ac.nitrkl.mondaymorning"
                >
                  <span className="text-blue-300 hover:text-purple-500">
                    App Store
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl border border-gray-700 bg-gray-700 bg-opacity-50">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={LocalEase}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-white">
                LocalEase: Your Gateway to Nearby Stores Online.
              </h3>
              <p className="mt-6 mb-8 text-gray-300">
                Online marketplace connecting users with shops. Real-time
                updates, personalized notifications, and store management
              </p>
              <div className="flex-row">
                <a
                  className="inline-block"
                  target="_blank"
                  href="https://github.com/asutoshranjan/local-ease"
                >
                  <span className="text-blue-300 hover:text-purple-500">
                    GitHub
                  </span>
                </a>
                <a
                  className="inline-block ml-6"
                  target="_blank"
                  href="https://asutosh.hashnode.dev/building-an-online-store-platform-using-appwrite-and-flutter-localease"
                >
                  <span className="text-blue-300 hover:text-purple-500">
                    Blog
                  </span>
                </a>
                <a
                  className="inline-block ml-6"
                  target="_blank"
                  href="https://youtu.be/APp9dHVvmPg?si=JVoihLSgkY5AK0RE"
                >
                  <span className="text-blue-300 hover:text-purple-500">
                    Video
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl border border-gray-700 bg-gray-700 bg-opacity-50">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={ICS}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-white">
                Institute Counselling Services App, NIT Rourkela.
              </h3>
              <p className="mt-6 mb-8 text-gray-300">
                The mobile application for Counselling Services, NIT Rourkela,
                1000+ active users, top-rated on play store
              </p>
              <div className="flex-row">
                <a
                  className="inline-block"
                  target="_blank"
                  href="https://github.com/dscnitrourkela/project-avocado"
                >
                  <span className="text-blue-300 hover:text-purple-500">
                    GitHub
                  </span>
                </a>
                <a
                  className="inline-block ml-6"
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=in.ac.nitrkl.scp.scp"
                >
                  <span className="text-blue-300 hover:text-purple-500">
                    App Store
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  SwiftLoad: API to Batch Upload Youtube Videos.
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
                </p>
                <a className="inline-block" href="#">
                  <span className="text-info dark:text-blue-300">Read more</span>
                </a>
              </div>
            </div> */}
        </div>
      </Container>
    </div>
  );
}
