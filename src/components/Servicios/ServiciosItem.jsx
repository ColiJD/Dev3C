import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./servicios.css";
import { useEffect } from "react";

export function ServiciosItem({ title, text, img, reverse }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // solo se anima una vez
    threshold: 0.2, // se activa cuando el 20% está visible
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      ref={ref}
      className={`servicios-item ${reverse ? "reverse" : ""}`}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
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
