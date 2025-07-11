"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { containerVariants } from "./SomosVariants";
import { SomosItem } from "./SomosItem";
import { somosItems } from "./somosData";
import "./Somos.css";

export function Somos() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="somos"
      id="somos"
    >
      <h2 className="titulo">
        ¡Estamos aquí para construir el futuro junto a ti!
      </h2>
      <motion.div
        className="somos-container"
        layout
        variants={containerVariants}
      >
        {somosItems.map((item, index) => (
          <SomosItem key={index} title={item.title} text={item.text} />
        ))}
      </motion.div>
    </motion.section>
  );
}
