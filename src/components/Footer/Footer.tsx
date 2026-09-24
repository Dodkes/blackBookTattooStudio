import { InstagramFill, Envelope, FacebookFill, Phone } from "../utils/Icons";
import logo from "../../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span
            className="logo-mark"
            role="img"
            aria-label="Black Book Tattoo Studio"
            style={{ "--logo": `url(${logo})` } as React.CSSProperties}
          />
          <p>Profesionální tetovací studio v Kutné Hoře.</p>
          <ul className="footer-socials">
            <li>
              <a
                href="https://www.instagram.com/black_book_tattoo_studio/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramFill size={16} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61553848974856"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookFill size={16} />
              </a>
            </li>
            <li>
              <a href="mailto:mrkkakarko@gmail.com" aria-label="E-mail">
                <Envelope size={16} />
              </a>
            </li>
            <li>
              <a href="tel:+420731724709" aria-label="Telefon">
                <Phone size={16} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Menu</h3>
          <a href="/#studio">Studio</a>
          <a href="/#gallery">Galerie</a>
          <a href="/#faq">FAQ</a>
          <a href="/#contact">Kontakt</a>
        </div>

        <div className="footer-col">
          <h3>Kontakt</h3>
          <a href="tel:+420731724709">+420 731 724 709</a>
          <a href="mailto:mrkkakarko@gmail.com">mrkkakarko@gmail.com</a>
          <a
            href="https://maps.app.goo.gl/9wA8rsC4XSvdKm1N6"
            target="_blank"
            rel="noreferrer"
          >
            Husova 114, Kutná Hora
          </a>
        </div>

        <div className="footer-col">
          <h3>Otevírací hodiny</h3>
          <span>Na objednávku</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>
            © {new Date().getFullYear()} Black Book Tattoo Studio
          </span>
          <span>
            Vytvořil <a href="mailto:dodo.zitt@gmail.com">Dodkes</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
