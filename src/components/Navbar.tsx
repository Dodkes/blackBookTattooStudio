import { InstagramFill, Envelope, FacebookFill, Phone } from "akar-icons";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <li>
          <a href="">
            <InstagramFill size={15} className="navbar-item-icon" />
          </a>
        </li>
        <li>
          <a href="">
            <Envelope size={15} className="navbar-item-icon" />
          </a>
        </li>
        <li>
          <a href="">
            <FacebookFill size={15} className="navbar-item-icon" />
          </a>
        </li>
        <li>
          <a href="">
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
