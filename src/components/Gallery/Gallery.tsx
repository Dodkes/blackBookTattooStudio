import { useEffect, useRef, useState } from "react";
import { InstagramFill } from "../utils/Icons";
import IMG_1 from "../../assets/gallery/IMG_1.jpeg";
import IMG_2 from "../../assets/gallery/IMG_2.jpeg";
import IMG_3 from "../../assets/gallery/IMG_3.jpeg";
import IMG_4 from "../../assets/gallery/IMG_4.jpeg";
import IMG_5 from "../../assets/gallery/IMG_5.jpeg";
import IMG_6 from "../../assets/gallery/IMG_6.jpeg";

const images = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  const step = (dir: number) =>
    setActive((i) =>
      i === null ? i : (i + dir + images.length) % images.length
    );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow reveal">Portfolio</span>
            <h2 className="section-title reveal">
              Z naší <em>knihy.</em>
            </h2>
          </div>
          <p className="reveal">
            Výběr z posledních prací. Každé tetování je originál – kreslený
            pro jednoho člověka a jedno místo na těle.
          </p>
        </div>

        <ul className="gallery-grid">
          {images.map((src, index) => (
            <li key={src} className="gallery-item reveal">
              <button
                onClick={() => setActive(index)}
                aria-label={`Zobrazit tetování ${index + 1}`}
              >
                <img src={src} alt={`Tetování ${index + 1}`} loading="lazy" />
                <span className="gallery-item-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="gallery-item-view">Zobrazit</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="gallery-more reveal">
          <a
            className="btn"
            href="https://www.instagram.com/black_book_tattoo_studio/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramFill size={16} /> Více na Instagramu
          </a>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="gallery-lightbox"
        onClose={() => setActive(null)}
        onKeyDown={onKeyDown}
        onClick={(e) => e.target === e.currentTarget && setActive(null)}
      >
        {active !== null && (
          <>
            <img src={images[active]} alt={`Tetování ${active + 1}`} />
            <button
              className="lightbox-btn lightbox-close"
              onClick={() => setActive(null)}
              aria-label="Zavřít"
            >
              ✕
            </button>
            <button
              className="lightbox-btn lightbox-prev"
              onClick={() => step(-1)}
              aria-label="Předchozí"
            >
              ←
            </button>
            <button
              className="lightbox-btn lightbox-next"
              onClick={() => step(1)}
              aria-label="Další"
            >
              →
            </button>
            <span className="lightbox-counter">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
          </>
        )}
      </dialog>
    </section>
  );
}
