import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

export default App;
