import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function OrderFailure() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/order");
  };

  return (
    <div className="order-failure-container">
      <Navbar />
      <div className="order-message-container">
        <h1>Něco se pokazilo :(</h1>
        <p>
          Zkuste to prosím znovu nebo nás kontaktujte na nekterém z níže
          uvedených kontaktů.
        </p>
        <p>Děkujeme za pochopení.</p>
        <button onClick={handleNavigate}>
          Přejít zpátky na <b>formulár</b>
        </button>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
