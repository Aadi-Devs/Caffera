import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const FlavorTitle = () => {


    useGSAP(()=>{

        const firstMsgSplit = SplitText.create(".first-text-split h1", {
            type: "chars, words"
        })

        const secondMsgSplit = SplitText.create(".second-text-split h1", {
            type: "chars, words"
        })

        gsap.from(firstMsgSplit.chars, {
            yPercent: 100,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section h1",     // the main section which contains the title
                start: "top center",
                end: "bottom center",
                // scrub: true,
                // markers: true,
            }
        })

        gsap.from(secondMsgSplit.chars, {
            yPercent: 100,
            ease: "power1.inOut",
            stagger: 0.02,
            scrollTrigger: {
                trigger: ".second-text-split h1",
                start: "top center",
                end: "bottom center",
                // scrub: true,
                // markers: true,
            }
        })




        gsap.to(".flavor-text-scroll", {
            opacity: 1,
            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-text-scroll",
                start: "top center",
                end: "bottom center",
                scrub: true,     //! if we uncomment this then thwe banner will appear or dissappear with scroll
                // markers: true,
            }
        })
    })




  return (
    <div className="general-title col-center h-full xl:gap-2 gap-12">
        <div className="overflow-hidden 2xl:py-0 py-0 first-text-split">
            <h1 className="">WE HAVE 6</h1>
        </div>
        
        <div
        style={{clipPath: "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)"}} 
        className="flavor-text-scroll 2xl:mt-10">
            <div className="bg-mid-brown pb-2 2xl:pt-0 py-0">
                <h2 className="text-milk">Freaking</h2>
            </div>
        </div>

        <div className="overflow-hidden w-full 2xl:pt-20 py-0 pb-2 second-text-split">
            <h1 className="">delicious flavours</h1>
        </div>
    </div>
  )
}

export default FlavorTitle