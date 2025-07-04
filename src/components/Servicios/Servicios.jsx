import "./servicios.css";
import Image from "next/image";
import movil from "@/app/assets/img/appMovil.webp";
import web from "@/app/assets/img/pageWeb.webp";
export function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <h2 className="titulo">Servicios</h2>
      <p className="subtitulo">
        En Dev3C ofrecemos una amplia gama de servicios para satisfacer las
        necesidades de nuestros clientes. Desde desarrollo web hasta soluciones
        móviles, nuestro equipo está listo para llevar tu proyecto al siguiente
        nivel.
      </p>
      <div className="card-container">
        <ServiciosCard
          title="Desarrollo Web"
          description="Creamos sitios web modernos y responsivos."
          imagen={web}
        />
        <ServiciosCard
          title="Soluciones Móviles"
          description="Desarrollamos aplicaciones móviles para iOS y Android."
          imagen={movil}
        />
      </div>
    </section>
  );
}

export function ServiciosCard({ title, description, imagen }) {
  return (
    <div className="servicios-card">
      <h3>{title}</h3>
      <p className="subtitulo">{description}</p>
      <Image src={imagen} alt={title} />
    </div>
  );
}
