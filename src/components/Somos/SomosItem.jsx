"use client";

import { motion } from "framer-motion";
import { itemVariants } from "./SomosVariants";

export function SomosItem({ title, text }) {
  return (
    <motion.div
      className="somos-item"
      layout
      variants={itemVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="subtitulo">{title}</h3>
      <p className="parrafo">{text}</p>
    </motion.div>
  );
}
