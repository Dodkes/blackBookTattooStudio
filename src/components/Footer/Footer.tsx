export default function Footer() {
  return (
    <div className="footer-container">
      © {new Date().getFullYear()}
      <strong> Black Book Tattoo Studio</strong> | Vytvořil{" "}
      <strong>
        <a href="mailto:dodo.zitt@gmail.com">Dodkes</a>
      </strong>
    </div>
  );
}
