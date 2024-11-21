import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Experience, Hero, 
  Navbar, Tech, Works, ParticleBackground, Coursework, MobilePopUp} from './components';

import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary flex justify-center">
        <MobilePopUp />
        <div className="max-w-[1920px] w-full">
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

export default App
