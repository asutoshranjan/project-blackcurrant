import React from "react";
import "../styles/global.css";
import AppHeader from "../components/AppHeader";
import icon from "../images/icon.png";
import MyFullWorkExperience from "../components/MyFullWorkExperience";

export default function work() {
  return (
    <body className="bg-gray-900 w-screen h-screen">
      <main>
        <MyFullWorkExperience />
      </main>
    </body>
  );
}

export const Head = () => (
  <>
    <link rel="icon" type="image/png" href={icon} /> <title>Works</title>
  </>
);
