import "./index.css"
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import MessageSection from './sections/MessageSection'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
// once a plugin is registered we can use it anywhere in the app  

const App = () => {
  return (
      <>
        <Navbar />
        <HeroSection />
        <MessageSection />
        <div className="h-[100rem] relative z-20"></div>
      </>
  )
}

export default App