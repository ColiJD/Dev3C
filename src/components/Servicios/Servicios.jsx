"use client";

import "./servicios.css";
import { motion } from "framer-motion";
import { serviciosItems } from "../Somos/somosData";
import { ServiciosItem } from "./ServiciosItem";
import { useInView } from "react-intersection-observer";

export function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="card-container">
        {serviciosItems.map((item, index) => (
          <FadeInOnScroll key={index}>
            <ServiciosItem
              title={item.title}
              text={item.text}
              img={item.img}
              reverse={index % 2 !== 0}
            />
          </FadeInOnScroll>
        ))}
      </div>
      
    </section>
  );
}

// 👇 Componente auxiliar para animación con scroll
function FadeInOnScroll({ children }) {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
