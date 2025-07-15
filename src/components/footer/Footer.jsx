"use client";
import "./footer.css";
import Image from "next/image";
import Logo from "../../app/assets/img/DEV.webp";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";

const linkVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  whileHover: { scale: 1.05, color: "#00bcd4" },
  whileTap: { scale: 0.95 },
};

export function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Dev3C</h2>
          <p>Impulsando soluciones digitales para tu negocio.</p>
        </div>

        <nav className="footer-links" aria-label="Enlaces principales">
          <h4>Enlaces</h4>
          <ul>
            <li>
              <motion.a
                href="#inicio"
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                Inicio <FaArrowUpRightFromSquare />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#servicios"
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                Servicios <FaArrowUpRightFromSquare />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#somos"
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                Sobre Nosotros <FaArrowUpRightFromSquare />
              </motion.a>
            </li>
          </ul>
        </nav>

        <address className="footer-contact">
          <h4>Contacto</h4>
          <p>
            <motion.a
              href="mailto:developers3c@gmail.com"
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              developers3c@gmail.com <FaArrowUpRightFromSquare />
            </motion.a>
          </p>
          <p>
            <motion.a
              href="tel:+50488716380"
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              +504 8871-6380 <FaArrowUpRightFromSquare />
            </motion.a>
          </p>
        </address>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Dev3C. Todos los derechos reservados.</p>
        <motion.div
          className="footer-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src={Logo} alt="Dev3C Logo" className="logo-image" priority />
        </motion.div>
      </div>
    </footer>
  );
}
