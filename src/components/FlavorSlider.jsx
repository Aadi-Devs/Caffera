import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants/index"
import gsap from "gsap";
import { useRef } from "react";

const FlavorSlider = () => {

    const sliderRef = useRef();


    useGSAP(()=>{

        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

        // console.log(scrollAmount)



        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "2% top",
                end: `+=${scrollAmount}px`,
                scrub: true,
                pin: true,
                markers: true,
            }
        });

        tl.to(".flavor-section", {
            x: `-${scrollAmount + 1200}px`,
            ease: "power1.inOut"
        })
    })    




  return (
    <div ref={sliderRef} className="slider-wrapper flex justify-center items-center">
        <div className="flavors">
            {
                flavorlists.map((flavor)=>{
                    return(
                        <div key={flavor.name} className={`relative 2xl:flex 2xl:items-center z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>
                            <img src={`/images/${flavor.color}-bg.svg`} alt="" className="absolute bottom-0" />

                            <img src={`/images/${flavor.color}-drink.webp`} alt="" className="drinks" />

                            <img src={`/images/${flavor.color}-elements.webp`} alt="" className="elements" />

                            <h1>{flavor.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FlavorSlider