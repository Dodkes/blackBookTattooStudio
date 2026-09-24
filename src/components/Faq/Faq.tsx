import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const categories: { name: string; items: FaqItem[] }[] = [
  {
    name: "Služby",
    items: [
      {
        question: "Předěláváte tetování?",
        answer:
          "Ano, předělávame tetování, v takovém případě doporučujeme osobní konzultaci ve studiu.",
      },
      {
        question: "Jak se připravit na tetování?",
        answer:
          "Před tetováním je důležité dobře se vyspat, nekonzumovat alkohol a kávu, a přijít na tetování s plným žaludkem.",
      },
      {
        question: "Můžu si vybrat motiv tetování?",
        answer:
          "Ano, můžete si vybrat motiv tetování, nebo si nechat poradit od našich tetovacích umělců.",
      },
      {
        question: "Jaké barvy používáte?",
        answer:
          "Používáme kvalitní barvy, které jsou bezpečné a neobsahují škodlivé látky.",
      },
    ],
  },
  {
    name: "Platby",
    items: [
      {
        question: "Jaké platební metody přijímáte?",
        answer: "Přijímáme platby v hotovosti a platební kartou.",
      },
      {
        question: "Můžu platit kartou?",
        answer: "Ano, přijímáme platby platební kartou.",
      },
      {
        question: "Můžu platit online?",
        answer: "Platit online nelze, přijímáme platby pouze na míste.",
      },
      {
        question: "Můžu platit v eurech?",
        answer: "Ano, přijímáme platby v eurech.",
      },
    ],
  },
  {
    name: "Praktické dotazy",
    items: [
      {
        question: "Jak dlouho trvá tetování?",
        answer:
          "Délka tetování závisí na složitosti motivu, jeho velikosti a umístění na těle. Pro přesnější informace nás kontaktujte.",
      },
      {
        question: "Od kolika let se můžu dát tetovat?",
        answer:
          "Tetovat se může po dosažení 18 let. V případě nezletilosti vám může být tetování provedeno pouze za přítomnosti rodiče nebo zákonného zástupce.",
      },
      {
        question: "Jak dlouho trvá hojení tetování?",
        answer:
          "Hojení tetování trvá zhruba 2 týdny, během této doby je důležité dodržovat pokyny tetovacího studia.",
      },
      {
        question: "Mohu pít kávu / alkohol před tetováním?",
        answer:
          "Před tetováním je důležité nekonzumovat alkohol a kávu, a přijít na tetování s plným žaludkem.",
      },
    ],
  },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="faq" className="faq section">
      <div className="container faq-grid">
        <div className="faq-intro">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="section-title reveal">
            Často kladené <em>otázky.</em>
          </h2>
          <div className="faq-tabs reveal" role="tablist">
            {categories.map((category, index) => (
              <button
                key={category.name}
                role="tab"
                aria-selected={index === activeCategory}
                className={index === activeCategory ? "is-active" : ""}
                onClick={() => setActiveCategory(index)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="faq-list" key={activeCategory}>
          {categories[activeCategory].items.map((item, index) => (
            <details key={item.question} className="faq-item">
              <summary>
                <span className="faq-item-index">0{index + 1}</span>
                <span className="faq-item-question">{item.question}</span>
                <span className="faq-item-toggle" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
