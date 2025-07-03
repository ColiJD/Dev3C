import Image from "next/image";
import osman from "@/app/assets/img/osmanTitulo.jpg";
import coli from "@/app/assets/img/coli.jpg";
import edgar from "@/app/assets/img/edgar.jpg";
import alex from "@/app/assets/img/alex.jpg";
import leo from "@/app/assets/img/alex.jpg";

import "./equipo.css";
export function Equipo() {
  return (
    <div className="container-equipo">
      <h2 className="titulo">Equipo de Trabajo</h2>
      <p className="subtitulo">Conozca la comunidad detrás de la iniciativa.</p>
      <div className="card-container">
        <CardEquipo nombre="Osman Colindres" rol="Frontend" imagen={osman} />
        <CardEquipo nombre="Jose Colindres" rol="Backend" imagen={coli} />
        <CardEquipo nombre="David Castellano" rol="Fullstack" imagen={edgar} />
        <CardEquipo nombre="Alex Salinas" rol="Diseñador" imagen={alex} />
      </div>
    </div>
  );
}

export function CardEquipo({ nombre, rol, imagen }) {
  return (
    <div className="card ">
      <Image src={imagen} alt={`Foto de ${nombre}`} />
      <h3>{nombre}</h3>
      <p>{rol}</p>
    </div>
  );
}
