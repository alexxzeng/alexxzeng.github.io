import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Feedbacks, Hero, 
  Navbar, Tech, Works, StarsCanvas, ParticleBackground} from './components';

const App = () => {

  return (
    // <BrowserRouter>
    //   <div className="relative z-0 bg-primary">
    //     <div className="bg-hero-pattern bg-cover 
    //     bg-no-repeat bg-center">
    //       <Navbar />
    //       <Hero />
    //     </div>
    //     <About />
    //     <Tech />
    //     <Education />
    //     <Works />
    //     <Feedbacks />
    //     <div className="relative z-0">
    //       <Contact />
    //       <StarsCanvas />
    //     </div>
    //   </div>
    // </BrowserRouter>
    <div>
      <ParticleBackground style={{ position: "fixed", top: 0, left: 0, zIndex: 1000, width: "100vw", height: "100vh" }} />
    </div>
  )
}

export default App
