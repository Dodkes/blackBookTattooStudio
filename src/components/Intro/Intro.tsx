import video from "../../assets/video.mp4";

const marquee = [
  "Černobílé tetování",
  "Barevné tetování",
  "Cover-up",
  "Návrhy na míru",
  "Osobní konzultace",
];

export default function Intro() {
  return (
    <section className="intro-container">
      <video className="intro-video" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
      <div className="intro-overlay" />

      <div className="intro-content container">
        <span className="eyebrow intro-anim" style={{ animationDelay: "0.1s" }}>
          Tetovací studio · Kutná Hora
        </span>
        <h1 className="intro-heading">
          <span className="intro-anim" style={{ animationDelay: "0.25s" }}>
            Inkoust,
          </span>
          <span className="intro-anim" style={{ animationDelay: "0.4s" }}>
            který <em>zůstane.</em>
          </span>
        </h1>
        <p className="intro-lead intro-anim" style={{ animationDelay: "0.6s" }}>
          Profesionální tetovací studio v Čechách. Každý motiv kreslíme na
          míru – od první skici po poslední linku.
        </p>
        <div className="intro-actions intro-anim" style={{ animationDelay: "0.75s" }}>
          <a className="btn btn--blood" href="#contact">
            Objednat si termín <span className="btn-arrow">→</span>
          </a>
          <a className="btn" href="#gallery">
            Naše práce
          </a>
        </div>
      </div>

      <a className="intro-scroll" href="#studio" aria-label="Posunout dolů">
        <span>Scroll</span>
        <i />
      </a>

      <div className="intro-marquee" aria-hidden="true">
        <div className="intro-marquee-track">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((item, i) => (
            <span key={i}>
              {item}
              <b>✦</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
