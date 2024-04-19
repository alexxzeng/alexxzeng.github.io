import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Feedbacks, Hero, 
  Navbar, Tech, Works, ParticleBackground, Coursework} from './components';

import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary flex justify-center">
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
