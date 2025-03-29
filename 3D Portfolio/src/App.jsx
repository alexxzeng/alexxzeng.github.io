import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Experience, Hero, 
  Navbar, Tech, Works, ParticleBackground, Coursework, MobilePopUp, MobileHero} from './components';

import Footer from "./components/Footer";
import Certificates from "./components/Certificates";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary flex justify-center">
        <MobilePopUp />
        <div className="max-w-[1920px] w-full">
          <div className="bg-center">
            <Navbar />
            {isMobile ? <MobileHero /> : <Hero />}
          </div>
          <ParticleBackground />
          <About />
          <Tech />
          <Works />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App
