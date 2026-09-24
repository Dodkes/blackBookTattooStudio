import profile from "../../assets/profile.jpg";

const services = [
  {
    title: "Černobílé tetování",
    text: "Black & grey, stínování a detailní realismus.",
  },
  {
    title: "Barevné tetování",
    text: "Syté, bezpečné barvy, které vydrží roky.",
  },
  {
    title: "Cover-up & předělávky",
    text: "Staré tetování přetvoříme v něco, na co budete hrdí.",
  },
  {
    title: "Návrh na míru",
    text: "Přineste nápad – motiv nakreslíme přímo pro vás.",
  },
];

export default function About() {
  return (
    <section id="studio" className="about section">
      <div className="container about-grid">
        <div className="about-media reveal">
          <div className="about-frame">
            <img src={profile} alt="Tatér studia Black Book" loading="lazy" />
          </div>
          <span className="about-stamp" aria-hidden="true">
            BB
          </span>
        </div>

        <div className="about-copy">
          <span className="eyebrow reveal">Studio</span>
          <h2 className="section-title reveal">
            Tvůj příběh, <em>naše linka.</em>
          </h2>
          <p className="about-text reveal">
            Black Book je tetovací studio v srdci Kutné Hory. Věnujeme se
            černobílému i barevnému tetování, předělávkám starších tetování a
            návrhům kresleným přímo pro vás. Pracujeme v klidném a čistém
            prostředí, výhradně s kvalitními a bezpečnými barvami.
          </p>

          <ol className="about-services">
            {services.map((service, index) => (
              <li
                key={service.title}
                className="reveal"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="about-service-index">0{index + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
