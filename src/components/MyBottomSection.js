import React from "react";
import Container from "./Container";
import Lottie from "react-lottie-player";
import Reveal from "./animations/Reveal";
import Avatar from "../images/avatar-icon.png";
import lottieJson from "../images/lottie-assets/premier-animation.json";
import google from "../images/google_logo.png";
import video from "../images/video_logo.png";

export default function More() {
  return (
    <div id="more">
      <Container>
        <div className="w-6 h-6">
          <img src={Avatar} alt="Avatar"></img>
        </div>
        <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            <Reveal>
              <Lottie className="w-full" loop animationData={lottieJson} play />
            </Reveal>
          </div>
          <div className="md:7/12 lg:w-1/2">
            <Reveal>
              {" "}
              <h2 className="text-3xl font-bold text-white">
                A bit more about me and the things I love doing.
              </h2>{" "}
            </Reveal>
            <p className="my-8 text-gray-300">
              As a software developer, I immerse myself in the ever-evolving
              tech landscape, driven by insatiable curiosity. Beyond coding, my
              creative pursuits include designing, crafting animations,
              producing videos, and playing piano. I also love experimenting in
              the kitchen sometimes,<br></br> exploring diverse cuisines. Each
              endeavor is a passionate exploration, seamlessly blending
              technology with artistry.
            </p>
            <div className="divide-y space-y-4 divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-900/20">
                  <img
                    src={google}
                    className="w-6 h-6 m-auto"
                    alt="Google"
                  ></img>
                </div>
                <div className="w-5/6">
                  <h3 className="font-semibold text-lg text-indigo-300">
                    Community & Core Team
                  </h3>
                  <p className="text-gray-400">
                    Google Developer Student Club, NIT Rourkela
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-900/20">
                  <img src={video} className="w-6 h-6 m-auto" alt="Take1"></img>
                </div>
                <div className="w-5/6">
                  <h3 className="font-semibold text-lg text-teal-300">
                    Creative Director & Video Editor
                  </h3>
                  <p className="text-gray-400">
                    Various clubs, fests also worked for Soch YouTube Channel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
