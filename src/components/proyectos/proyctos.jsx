"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { proyectosItems } from "./dataProyect";
import { ProyectosItem } from "./proyectoItem";
import "./proyect.css";

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export function Proyectos() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

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
      className="proyectos"
      id="proyectos"
    >
      <h2 className="titulo">Proyectos</h2>
      <motion.div className="cards-proyectos" layout variants={containerVariants}>
        {proyectosItems.map((item, index) => (
          <ProyectosItem
            key={index}
            title={item.title}
            text={item.text}
            img={item.img}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
