import { useState } from "react";
import Navbar from "./Ui/Navbar";
import MobileMenu from "./Ui/MobileMenu";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import { Contact } from "./sections/Contact";
import RevealOnScroll from "./Ui/RevealOnScroll";
import Footer from "./sections/Footer";
import ChatbotOverlay from "./sections/ChatbotOverlay";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <RevealOnScroll>
        <Home />
      </RevealOnScroll>
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ChatbotOverlay/>
    </>
  );
}

export default App;