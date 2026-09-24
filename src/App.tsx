import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Faq from "./components/Faq/Faq";
import Gallery from "./components/Gallery/Gallery";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import useReveal from "./hooks/useReveal";

// Heavy parts (OpenLayers, Formik/Yup/reCAPTCHA) load in their own chunks
const MapComponent = lazy(() => import("./components/Map/MapComponent"));
const OrderPage = lazy(() => import("./components/OrderPage/OrderPage"));
const OrderSuccess = lazy(
  () => import("./components/OrderPage/OrderSuccess/OrderSuccess")
);
const OrderFailure = lazy(
  () => import("./components/OrderPage/OrderFailure/OrderFailure")
);

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
        <Suspense fallback={<div className="map-placeholder" />}>
          <MapComponent />
        </Suspense>
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
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/order/success" element={<OrderSuccess />} />
          <Route path="/order/failure" element={<OrderFailure />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
