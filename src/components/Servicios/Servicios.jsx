"use client";

import "./servicios.css";
import { serviciosItems } from "../Somos/somosData";
import { ServiciosItem } from "./ServiciosItem";

export function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="card-container">
        {serviciosItems.map((item, index) => (
          <ServiciosItem
            key={index}
            title={item.title}
            text={item.text}
            img={item.img}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
