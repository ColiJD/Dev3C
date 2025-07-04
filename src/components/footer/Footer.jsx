import "./footer.css";
import Image from "next/image";
import Logo from "../../app/assets/img/DEV.webp";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-container">
        <div>
          <h2>Dev3C</h2>
          <p>Impulsando soluciones digitales para tu negocio.</p>
        </div>

        <div className="footer-links">
          <h4>Enlaces</h4>
          <ul>
            <li>
              <a href="#inicio">
                Inicio <FaArrowUpRightFromSquare />
              </a>
            </li>
            <li>
              <a href="#servicios">
                Servicios <FaArrowUpRightFromSquare />
              </a>
            </li>
            <li>
              <a href="#somos">
                Sobre Nosotros <FaArrowUpRightFromSquare />
              </a>
            </li>
            <li>
              <a href="#equipo">
                Comunidad <FaArrowUpRightFromSquare />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>
            <a href="mailto:developers3c@gmail.com">
              developers3c@gmail.com <FaArrowUpRightFromSquare />
            </a>
          </p>
          <p>
            <a href="tel:+50488716380">
              +504 8871-6380 <FaArrowUpRightFromSquare />
            </a>
          </p>
        </div>

        {/* Redes sociales (descomentable) */}
        {/* 
        <div className="footer-social">
          <h4>Síguenos</h4>
          <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
          <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
        </div> 
        */}
      </div>

      <div className="footer-bottom">
        <p>© 2025 Dev3C. Todos los derechos reservados.</p>
      </div>

      <div className="footer-logo">
        <Image src={Logo} alt="Dev3C Logo" className="logo-image" />
      </div>
    </footer>
  );
}
