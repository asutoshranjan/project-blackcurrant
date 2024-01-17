import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function DelayReveal({ children, delay }) {
  const ref = useRef(null);
  const animation = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 35,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={animation}
        transition={{
          delay: delay,
          duration: 0.48,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
