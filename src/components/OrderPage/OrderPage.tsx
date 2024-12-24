import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function OrderBody() {
  return <div className="order-body-container">Test</div>;
}

export default function OrderPage() {
  return (
    <div className="order-page-container">
      <Navbar />
      <OrderBody />
      <Footer />
    </div>
  );
}
