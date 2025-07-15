import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants/index"
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {

    const sliderRef = useRef();

    const isTablet = useMediaQuery({
        query: "(max-width: 834px)",
    });





    useGSAP(()=>{

        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
        // getting the actual value of element from where we are starting the scroll in pixel, subtracting the width of section from whole width

        if(!isTablet){
            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "2% top",
                end: `+=${scrollAmount}px`,     // giving the initial position of the the div
                scrub: true,
                pin: true,      // very important as it'll keep that section pinned until the scroll animation ends
                // markers: true,
            }
            });

            tl.to(".flavor-section", {
            x: `-${scrollAmount + 1200}px`,     // we are specifying how much we want to scroll in x direction so that all the cards appear while scrolling
            ease: "power1.inOut"
            });
        }


        // we have to specify how much we want to scroll from the intial position
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".flavor-section",
        //         start: "2% top",
        //         end: `+=${scrollAmount}px`,     // giving the initial position of the the div
        //         scrub: true,
        //         pin: true,      // very important as it'll keep that section pinned until the scroll animation ends
        //         // markers: true,
        //     }
        // });

        // tl.to(".flavor-section", {
        //     x: `-${scrollAmount + 1200}px`,     // we are specifying how much we want to scroll in x direction so that all the cards appear while scrolling
        //     ease: "power1.inOut"
        // })



        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top top",
                end: "bottom 80%",
                scrub: true,
            }
        });


        titleTl.to(".first-text-split", {
            xPercent: -30,
            ease: "power1.inOut",
        })
        .to(".flavor-text-scroll", {
            xPercent: -22,
            ease: "power1.inOut",
        }, "<"
        )     // this is used to make this animation play at the same timet of the first one
        .to(".second-text-split", {
            xPercent: -10,
            ease: "power1.inOut",
        }, "<")     // to overlap the animation time





    })    




  return (
    <div ref={sliderRef} className="slider-wrapper flex justify-center items-center">
        <div className="flavors">
            {
                flavorlists.map((flavor)=>{
                    return(
                        <div key={flavor.name} className={`relative 2xl:flex 2xl:items-center z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none 2xl:relative 2xl:bottom-10 ${flavor.rotation}`}>
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