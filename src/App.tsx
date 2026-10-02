import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./components/About";
import Journey from "./components/Journey";
import Leadership from "./components/Leadership";
import CommunityImpact from "./components/CommunityImpact";
import Fellowships from "./components/Fellowships";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        
        <About />
        <Journey />
        <Leadership />
        <CommunityImpact />
        <Fellowships />
        <Education />
        <Achievements />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}

export default App;