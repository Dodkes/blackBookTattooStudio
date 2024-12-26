import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="order-success-container">
      <Navbar />
      <div className="order-message-container">
        <h1>Objednavka úspěšně odeslána</h1>
        <p>Děkujeme za vaši objednávku !</p>
        <p>V nejbližší době vás budeme kontaktovat ohledně vašeho termínu.</p>
        <button onClick={handleNavigate}>
          Přejít zpátky na <b>WEB</b>
        </button>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
