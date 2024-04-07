import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Feedbacks, Hero, 
  Navbar, Tech, Works, ParticleBackground, Coursework} from './components';

import Footer from "./components/Footer";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
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
        <Works />
        <Coursework/>
        <Contact />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
