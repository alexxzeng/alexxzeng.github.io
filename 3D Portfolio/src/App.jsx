import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Feedbacks, Hero, 
  Navbar, Tech, Works, ParticleBackground} from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary pb-16">
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
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
