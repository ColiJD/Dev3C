import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./servicios.css";

export function ServiciosItem({ title, text, img, reverse }) {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      className={`servicios-item ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="servicios-img-wrapper">
        <Image src={img} alt={title} className="servicios-img" />
      </div>
      <div className="servicios-texto">
        <h3 className="subtitulo">{title}</h3>
        <p className="parrafo" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </motion.div>
  );
}
