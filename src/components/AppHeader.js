import React, { useState } from "react";
import Container from "./Container";
import icon from "../images/icon-white.png";

export default function AppHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeClick = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <header>
        <nav className="z-10 w-full absolute">
          <Container>
            <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
              <input
                aria-hidden="true"
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                className="hidden peer"
                checked={isNavOpen}
                onChange={(e) => setIsNavOpen(e.target.checked)}
              />
              <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                <a
                  href="#home"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    <div className="h-6 w-6 mr-0.5">
                      <img src={icon} alt="logo"/>
                    </div>
                    <div className="h-6 w-1.5 bg-primary"></div>
                  </div>
                  <span className="text-2xl font-bold text-white">Asutosh</span>
                </a>

                <div className="relative flex items-center lg:hidden max-h-10">
                  <label
                    role="button"
                    for="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    className="relative  p-6 -mr-6"
                  >
                    <div
                      aria-hidden="true"
                      id="line"
                      className="m-auto h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="fixed z-10 inset-0 h-screen w-screen backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden bg-gray-900/70"
              ></div>
              <div
                className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none bg-gray-800 border-gray-700"
              >
                <div className="text-gray-200 lg:pr-4 lg:w-auto w-full lg:pt-0">
                  <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                    <li>
                      <a
                        href="#work"
                        className="block md:px-4 transition hover:text-purple-500"
                        onClick={closeClick}
                      >
                        <span>Works</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#projects"
                        className="block md:px-4 transition hover:text-purple-500"
                        onClick={closeClick}
                      >
                        <span>Projects</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#blogs"
                        onClick={closeClick}
                        className="block md:px-4 transition hover:text-purple-500"
                      >
                        <span>Blogs</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about"
                        className="block md:px-4 transition hover:text-purple-500"
                        onClick={closeClick}
                      >
                        <span>About</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 lg:mt-0">
                  <a
                    href="https://drive.google.com/file/d/1ZFYzZf5UTPMeZvH79GIUbXLPA-FL53qB/view?usp=drive_link"
                    target="_blank"
                    className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-sm font-semibold text-white">
                      &nbsp;Resume&nbsp;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </header>
      <style>
        {`
        #toggle_nav:checked ~ div #hamburger #line {
          transform: rotate(-45deg) translateY(5.8px) translateX(0);
        }

        #toggle_nav:checked ~ div #hamburger #line2 {
          transform: rotate(45deg) translateY(-7.2px) translateX(0);
        }
      `}
      </style>
    </>
  );
}
