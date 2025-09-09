import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Experience, Hero, 
<<<<<<< HEAD
  Navbar, Tech, Works, ParticleBackground, Bento, MobilePopUp, MobileHero} from './components';

import Footer from "./components/Footer";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
=======
  Navbar, Tech, Works, ParticleBackground, Coursework, MobilePopUp} from './components';

import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

const App = () => {
>>>>>>> origin/main

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary flex justify-center">
        <MobilePopUp />
        <div className="max-w-[1920px] w-full">
<<<<<<< HEAD
          <div className="bg-center">
            <Navbar />
            {isMobile ? <MobileHero /> : <Hero />}
          </div>
          <ParticleBackground />
          <Bento />
          <Tech />
          <Works />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
=======
          <div className="bg-hero-pattern bg-cover 
          bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <div>
            <ParticleBackground />
            <About />
          </div>
          <Tech />
          <Experience />
          <Education />
          <Certificates />
          <Works />
          <Coursework/>
          <Contact />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}
>>>>>>> origin/main

export default App
