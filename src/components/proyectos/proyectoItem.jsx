import "./proyect.css";
export function ProyectosItem({ title, text, img }) {
  return (
    <div className="proyectos-item">
      <div className="proyectos-image">
        <img src={img} alt={title} className="proyectos-img" />
      </div>
      <div className="proyectos-content">
        <h3 className="proyectos-title">{title}</h3>
        <p className="proyectos-text">{text}</p>
      </div>
    </div>
  );
}
