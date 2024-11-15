import { InstagramFill, Envelope, FacebookFill, Phone } from "akar-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contact-container">
        <div className="footer-contact-line">
          <div className="footer-contact-item">
            <p>
              TEL: <a href="tel:+420777777777">+420 731 724 709</a>
            </p>
            <p>
              MAIL:
              <a href="mailto:mrkkakarko@gmail.com"> mrkkakarko@gmail.com</a>
            </p>
          </div>
          <div className="footer-contact-item">
            <p>
              <a
                href="https://maps.app.goo.gl/9wA8rsC4XSvdKm1N6"
                target="_blank"
              >
                Husova 114, Kutná Hora <br />
                Česká republika
              </a>
            </p>
          </div>
          <div className="footer-contact-item">
            <p>Otevírací hodiny</p>
            <p>Na objednávku</p>
          </div>
          <div className="footer-contact-item">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/black_book_tattoo_studio/"
                  target="_blank"
                >
                  <InstagramFill size={15} className="navbar-item-icon" />
                </a>
              </li>
              <li>
                <a href="mailto:mrkkakarko@gmail.com">
                  <Envelope size={15} className="navbar-item-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61553848974856"
                  target="_blank"
                >
                  <FacebookFill size={15} className="navbar-item-icon" />
                </a>
              </li>
              <li>
                <a href="tel:+420731724709">
                  <Phone size={15} className="navbar-item-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom-inline">
        © {new Date().getFullYear()}
        <strong> Black Book Tattoo Studio</strong> | Vytvořil
        <strong>
          <a href="mailto:dodo.zitt@gmail.com"> Dodkes</a>
        </strong>
      </div>
    </div>
  );
}
