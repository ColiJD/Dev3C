"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import banner from "@/app/assets/img/l3.jpg";
import "./banner.css";

export function Banner() {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <section className="banner" ref={ref}>
      <div className="banner-container">
        <motion.div
          className="banner-left"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          <h1 className="titulo">Dev3C Solutions</h1>
          <h3>Tecnología que conecta, crea y transforma.</h3>
          <p>
            Te ayudamos a tener presencia real en el mundo digital. Crea tu
            página web profesional o aplicación móvil funcional; somos el equipo
            que puede convertir tu idea en una plataforma lista para crecer.
          </p>
          <p>Tu idea ya no puede esperar. Con Dev3C, la hacemos posible.</p>
          <motion.a
            href="#contacto"
            className="btn"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            Contactanos
          </motion.a>
        </motion.div>

        <motion.div
          className="banner-right"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
        >
          <Image src={banner} alt="Banner" className="banner-image" priority />
        </motion.div>
      </div>

      <div className="wave">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00,49.98 C261.57,-36.00 275.11,227.47 516.64,63.66 L500.00,150.00 L0.00,150.00 Z"
            fill="#f0f0f0"
            stroke="none"
          />
        </svg>
      </div>
    </section>
  );
}
