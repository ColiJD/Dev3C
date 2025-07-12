"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./servicios.css";

export function ServiciosItem({ title, text, img, reverse }) {
  return (
    <div className={`servicios-item ${reverse ? "reverse" : ""}`}>
      <div className="servicios-img-wrapper">
        <Image
          src={img}
          alt={title}
          width={300}
          height={300}
          className="servicios-img"
        />
      </div>
      <div className="servicios-texto">
        <h3 className="subtitulo">{title}</h3>
        <p className="parrafo">{text}</p>
      </div>
    </div>
  );
}
