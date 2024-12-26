import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type FaqProps = {
  question: string;
  answer: string;
}[];

export default function Faq() {
  const accordionStyle = {
    backgroundColor: "black",
    color: "white",
    borderBottom: "1px solid #686464",
    fontSize: "15px",
    textAlign: "left",
  };

  const servicesFaq: FaqProps = [
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
  ];

  const paymentFaq: FaqProps = [
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
      answer: "Ano, přijímáme platby online přes platební bránu.",
    },
    {
      question: "Můžu platit v eurech?",
      answer: "Ano, přijímáme platby v eurech.",
    },
  ];

  const practicalFaq: FaqProps = [
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
  ];

  return (
    <div className="faq-container">
      <div className="faq-content-container">
        <h1 className="faq-heading">Často kladené otázky - FAQ</h1>
        <div className="grid-container">
          <div className="grid-item">
            <h2 className="faq-section-heading">Služby</h2>
            {servicesFaq.map((faqItem, index) => (
              <Accordion
                disableGutters
                key={index}
                {...(index !== paymentFaq.length - 1
                  ? { sx: accordionStyle }
                  : { sx: { ...accordionStyle, borderBottom: "none" } })}
                className="faq-accordion"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#686464" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {faqItem.question}
                </AccordionSummary>
                <AccordionDetails>{faqItem.answer}</AccordionDetails>
              </Accordion>
            ))}
          </div>
          <div className="grid-item">
            <h2 className="faq-section-heading">Platby</h2>
            {paymentFaq.map((faqItem, index) => (
              <Accordion
                disableGutters
                {...(index !== paymentFaq.length - 1
                  ? { sx: accordionStyle }
                  : { sx: { ...accordionStyle, borderBottom: "none" } })}
                key={index}
                className="faq-accordion"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#686464" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {faqItem.question}
                </AccordionSummary>
                <AccordionDetails>{faqItem.answer}</AccordionDetails>
              </Accordion>
            ))}
          </div>
          <div className="grid-item">
            <h2 className="faq-section-heading">Praktické dotazy</h2>
            {practicalFaq.map((faqItem, index) => (
              <Accordion
                disableGutters
                {...(index !== paymentFaq.length - 1
                  ? { sx: accordionStyle }
                  : { sx: { ...accordionStyle, borderBottom: "none" } })}
                key={index}
                className="faq-accordion"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#686464" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {faqItem.question}
                </AccordionSummary>
                <AccordionDetails>{faqItem.answer}</AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
