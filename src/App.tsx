import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MapComponent from "./components/Map/MapComponent";
import Faq from "./components/Faq/Faq";
import Gallery from "./components/Gallery/Gallery";
import { Routes, Route } from "react-router-dom";
import OrderPage from "./components/OrderPage/OrderPage";
import OrderSuccess from "./components/OrderPage/OrderSuccess/OrderSuccess";
import OrderFailure from "./components/OrderPage/OrderFailure/OrderFailure";
import ScrollToTop from "./components/utils/ScrollToTop";
import useReveal from "./hooks/useReveal";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <About />
        <Gallery />
        <Faq />
        <Contact />
        <MapComponent />
      </main>
      <Footer />
    </>
  );
}

function App() {
  useReveal();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route path="/order/failure" element={<OrderFailure />} />
      </Routes>
    </>
  );
}

export default App;
