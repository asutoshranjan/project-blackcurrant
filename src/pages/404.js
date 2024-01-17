import * as React from "react";
import { Link } from "gatsby";
import Container from "../components/Container";
import na from "../images/404.png";
import icon from "../images/icon.png";

const NotFoundPage = () => {
  return (
    <body className="bg-gray-900 w-screen h-screen">
      <main className="py-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
        </div>
        <Container>
          <div className="flex-col mt-20">
            <img src={na} alt="404" className="mx-auto w-3/4 md:w-2/5" />
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center py-10">
              Sorry, Page not found.
            </h2>
            <div className="flex items-center justify-center">
              <Link
                to="/"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Go back home
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </body>
  );
};

export default NotFoundPage;

export const Head = () => (
  <>
    <link rel="icon" type="image/png" href={icon} /> <title>Not found</title>
  </>
);
