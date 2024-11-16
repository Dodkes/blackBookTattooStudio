import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MapComponent from "./components/Map/MapComponent";
import Faq from "./components/Faq/Faq";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Contact />
      <Gallery />
      <MapComponent />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
