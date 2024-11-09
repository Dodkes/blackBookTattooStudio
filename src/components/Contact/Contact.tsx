import { Clock, Envelope, Location } from "akar-icons";

export default function Contact() {
  return (
    <div className="contact-container">
      <div>
        <Envelope className="contact-icon" />
        <div>
          <a className="contact-link" href="tel:+420731724709">
            +420 731 724 709
          </a>
        </div>
        <div>
          <a className="contact-link" href="mailto:mrkkakarko@gmail.com">
            mrkkakarko@gmail.com
          </a>
        </div>
      </div>
      <div>
        <Location className="contact-icon" />
        <div>
          <a
            className="contact-link"
            href="https://maps.app.goo.gl/9wA8rsC4XSvdKm1N6"
            target="_blank"
          >
            Husova 114, Kutná Hora <br />
            Česká republika
          </a>
        </div>
      </div>
      <div>
        <Clock className="contact-icon" />
        <p>K objednání</p>
      </div>
    </div>
  );
}
