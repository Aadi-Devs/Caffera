import { useRef } from "react";
import { cards } from "../constants/index"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialsSection = () => {

    const vdRef = useRef([])

    const handlePlay = (index) => {
        const video = vdRef.current[index];
        video.play();
    }
    
    const handlePause = (index) => {
        const video = vdRef.current[index];
        video.pause();
    }



    useGSAP(()=>{
        gsap.set(".testimonials-section", {
            marginTop: "-140vh",
        });
    });




  return (
    <section className="testimonials-section">
        <div className="absolute size-full flex flex-col items-center pt-[5vw]">
            <h1 className="text-black first-title">What's</h1>
            <h1 className="text-light-brown second-title">Everyone</h1>
            <h1 className="text-black third-title">Talking</h1>
        </div>


        <div className="pin-box">
            {
                cards.map((card, index) => (
                    <div
                    key={index} 
                    className={`vd-card ${card.translation} ${card.rotation}`}
                    onMouseEnter={() => handlePlay(index)}
                    onMouseLeave={() => handlePause(index)}
                    >
                        <video
                        ref={(el) => {vdRef.current[index] = el}} 
                        src={card.src} playsInline muted loop className="size-full object-cover" />
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default TestimonialsSection