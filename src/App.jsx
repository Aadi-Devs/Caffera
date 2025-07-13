import "./index.css"
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import MessageSection from './sections/MessageSection'
import FlavorsSection from "./sections/FlavorsSection"
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react"
import NutritionSection from "./sections/NutritionSection"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// once a plugin is registered we can use it anywhere in the app  




const App = () => {

  // for smooth scroll(effect part)
  useGSAP(()=>{
    ScrollSmoother.create({
      smooth: 1, 
      effects: true,
    });
  });



  return (
      <>
        <Navbar />

        {/* smooth scroll, html part, have to contain the section in divs */}


        <div id="smooth-wrapper">
          <div id="smooth-content">
            <HeroSection />
            <MessageSection />
            <FlavorsSection />
            <NutritionSection />
            {/* <div className="h-[10rem] relative"></div> */}
          </div>
        </div>
      </>
  )
}

export default App