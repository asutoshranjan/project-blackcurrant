import React from "react";
import "../styles/global.css";
import icon from "../images/icon.png";

export default function about() {
  return (
    <body className="bg-gray-900 w-screen h-screen">
      <main>
        <div className="text-white text-center text-xl pt-6">About.</div>
      </main>
    </body>
  );
}

export const Head = () => (
  <>
    <link rel="icon" type="image/png" href={icon} /> <title>About</title>
  </>
);
