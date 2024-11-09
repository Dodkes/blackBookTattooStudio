import { InstagramFill, Envelope, FacebookFill, Phone } from "akar-icons";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <li>
          <a
            href="https://www.instagram.com/black_book_tattoo_studio/"
            target="_blank"
          >
            <InstagramFill size={15} className="navbar-item-icon" />
          </a>
        </li>
        <li>
          <a href="mailto:blackbook@tattoo.studio">
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
      <a className="logo-link" href="">
        <img src={logo} width={200} />
      </a>
    </nav>
  );
}
