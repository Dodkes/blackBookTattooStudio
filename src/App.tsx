import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MapComponent from "./components/Map/MapComponent";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Contact />
      <MapComponent />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
