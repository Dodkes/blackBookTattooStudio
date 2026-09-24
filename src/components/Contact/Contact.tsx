import { Clock, Envelope, Location, Phone } from "../utils/Icons";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-head">
          <span className="eyebrow reveal">Rezervace</span>
          <h2 className="section-title contact-title reveal">
            Pojďme to <em>vytetovat.</em>
          </h2>
          <p className="reveal">
            Napište nebo zavolejte – domluvíme konzultaci, probereme motiv,
            velikost i umístění a najdeme termín, který vám sedí.
          </p>
          <div className="contact-actions reveal">
            <a className="btn btn--blood" href="tel:+420731724709">
              Zavolat <span className="btn-arrow">→</span>
            </a>
            <Link className="btn" to="/order">
              Online formulář
            </Link>
          </div>
        </div>

        <ul className="contact-cards">
          <li className="reveal">
            <Phone className="contact-icon" size={20} />
            <span className="contact-label">Telefon</span>
            <a className="contact-link" href="tel:+420731724709">
              +420 731 724 709
            </a>
          </li>
          <li className="reveal" style={{ transitionDelay: "80ms" }}>
            <Envelope className="contact-icon" size={20} />
            <span className="contact-label">E-mail</span>
            <a className="contact-link" href="mailto:mrkkakarko@gmail.com">
              mrkkakarko@gmail.com
            </a>
          </li>
          <li className="reveal" style={{ transitionDelay: "160ms" }}>
            <Location className="contact-icon" size={20} />
            <span className="contact-label">Adresa</span>
            <a
              className="contact-link"
              href="https://maps.app.goo.gl/9wA8rsC4XSvdKm1N6"
              target="_blank"
              rel="noreferrer"
            >
              Husova 114, Kutná Hora
              <br />
              Česká republika
            </a>
          </li>
          <li className="reveal" style={{ transitionDelay: "240ms" }}>
            <Clock className="contact-icon" size={20} />
            <span className="contact-label">Otevírací doba</span>
            <span className="contact-link">Na objednávku</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
