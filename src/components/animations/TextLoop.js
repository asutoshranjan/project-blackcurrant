import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// const texts = ["digital illustrator", "software developer", "product designer" ,"graphic animator"];

// const clrclass = ["text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400", "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200", "text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-200", "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400"];

const texts = ["digital illustrator", "software developer", "graphic animator"];

const clrclass = [
  "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400",
  "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200",
  "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400",
];
const variants = {
  enter: (direction) => {
    return {
      x: -20,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: 20,
      opacity: 0,
    };
  },
};

const TextLoop = () => {
  const [index, setIndex] = useState(0);

  const [screenType, setScreenType] = useState(getScreenType());

  function getScreenType() {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;
      if (innerWidth <= 560 && innerHeight <= 1024) {
        return "mobile";
      } else if (innerWidth >= 1100) {
        return "desktop";
      } else {
        return "other";
      }
    } else return null;
  }

  const updateScreenType = () => {
    setScreenType(getScreenType());
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenType);

    return () => {
      window.removeEventListener("resize", updateScreenType);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);

    return () => clearInterval(intervalId);
  }, [index, setIndex]);

  if (screenType === "mobile") {
    return (
      <div className="mt-7 text-white font-bold py-1 text-3xl md:text-4xl xl:text-5xl text-center">
        a&nbsp;
        <AnimatePresence>
          <motion.span
            style={{
              position: "absolute",
              textAlign: "center",
            }}
            variants={variants}
            key={index}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 240, damping: 50 },
              opacity: { duration: 0.55 },
            }}
          >
            <div className={clrclass[index]}>{texts[index]}</div>
          </motion.span>
        </AnimatePresence>
        &nbsp;&nbsp;
      </div>
    );
  } else if (screenType === "desktop") {
    return (
      <div className="mt-7 text-white font-bold py-1 text-3xl md:text-4xl xl:text-5xl text-center">
        &nbsp;a&nbsp;
        <AnimatePresence>
          <motion.span
            style={{
              position: "absolute",
              textAlign: "center",
            }}
            variants={variants}
            key={index}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 240, damping: 50 },
              opacity: { duration: 0.55 },
            }}
          >
            <div className={clrclass[index]}>{texts[index]}</div>
          </motion.span>
        </AnimatePresence>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default TextLoop;
