// Navbar.jsx
import Link from "next/link";
import "./navbar.css";

export function Navbar({ items, menuOpen, onLinkClick }) {
  return (
    <nav className={`navbar ${menuOpen ? "open" : "closed"}`}>
      <ul className="nav-items">
        {items.map((item) => (
          <li className="nav-item" key={item.href}>
            <Link href={item.href} onClick={onLinkClick}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
