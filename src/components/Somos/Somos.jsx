"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
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
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4, // más rápido
            ease: "easeOut", // entrada suave pero firme
          },
        },
      }}
      className="somos"
      id="somos"
    >
      <h2 className="titulo">
        ¡Estamos aquí para construir el futuro junto a ti!
      </h2>
      <div className="somos-container">
        <div className="somos-item">
          <h3 className="subtitulo">Misión</h3>
          <p className="parrafo">
            Transformar ideas en soluciones digitales efectivas y funcionales...
          </p>
        </div>
        <div className="somos-item">
          <h3 className="subtitulo">Visión</h3>
          <p className="parrafo">
            Ser una startup referente en el desarrollo de soluciones digitales
            innovadoras en Latinoamérica, reconocida por crear experiencias web
            y móviles que potencien negocios, emprendedores y comunidades... .
          </p>
        </div>
      </div>
    </motion.section>
  );
}
