// Header.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "./Navbar";
import "./header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);

  const menuUno = [
    { href: "/", title: "Inicio" },
    { href: "#servicios", title: "Servicios" },
    { href: "#somos", title: "Sobre Nosotros" },
    { href: "#proyectos", title: "Proyectos" },
    { href: "#contacto", title: "Contacto" },
  ];

  // const menuDos = [
  //   { href: "/nosotros", title: "Nosotros" },
  //   { href: "/servicios", title: "Servicios" },
  //   { href: "/proyectos", title: "Proyectos" },
  // ];

  return (
    <header className="header" id="inicio">
      <div>
        <Link href="/">
          <section className="logo">
            <span>Dev3C</span> <span>Solutions</span>
          </section>
        </Link>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>
      <Navbar
        items={menuUno}
        menuOpen={menuOpen}
        onLinkClick={handleLinkClick}
      />
    </header>
  );
}
