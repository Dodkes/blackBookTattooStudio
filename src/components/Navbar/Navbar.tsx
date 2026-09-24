import { useEffect, useState } from "react";
import { InstagramFill, FacebookFill } from "../utils/Icons";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const links = [
  { href: "/#studio", label: "Studio" },
  { href: "/#gallery", label: "Galerie" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`navbar${scrolled ? " is-scrolled" : ""}${
        open ? " is-open" : ""
      }`}
    >
      <nav className="navbar-inner">
        <Link className="logo-link" to="/" onClick={close}>
          <span
            className="logo-mark"
            role="img"
            aria-label="Black Book Tattoo Studio"
            style={{ "--logo": `url(${logo})` } as React.CSSProperties}
          />
        </Link>

        <ul className="navbar-links">
          {links.map((link, index) => (
            <li key={link.href} style={{ transitionDelay: `${index * 60}ms` }}>
              <a href={link.href} onClick={close}>
                <span className="navbar-link-index">0{index + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a
            className="navbar-social"
            href="https://www.instagram.com/black_book_tattoo_studio/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramFill size={16} />
          </a>
          <a
            className="navbar-social"
            href="https://www.facebook.com/profile.php?id=61553848974856"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FacebookFill size={16} />
          </a>
          <a className="navbar-cta" href="/#contact" onClick={close}>
            Rezervace
          </a>
          <button
            className="navbar-burger"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
