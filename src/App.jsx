import "./index.css"
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import MessageSection from './sections/MessageSection'
import FlavorsSection from "./sections/FlavorsSection"
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react"
import NutritionSection from "./sections/NutritionSection"
import BenefitSection from "./sections/BenefitSection"
import TestimonialsSection from "./sections/TestimonialsSection"
import FooterSection from "./sections/FooterSection"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// once a plugin is registered we can use it anywhere in the app  




const App = () => {

  // for smooth scroll(effect part)
  useGSAP(()=>{
    ScrollSmoother.create({
      smooth: 3, 
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

            <div>
              <BenefitSection />
              <TestimonialsSection />
            </div>

            <FooterSection />
            {/* <div className="h-[50rem]"></div> */}
          </div>
        </div>
      </>
  )
}

export default App