import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const VideoPinSection = () => {


    // circle(50% at 50% 50%)
    // useGSAP(()=>{
    //     gsap.to(".vd-pin-section", {
    //         delay: 1,
    //         scrollTrigger: {
    //             trigger: ".vd-pin-section",
    //             clipPath: "circle(50% at 50% 50%)",
    //             scrub: true,
    //             pin: true,
    //             start: "top 60%",
    //             end: "top top",
    //             scrub: 2,
    //         }

    //     })
    // })


    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".vd-pin-section",
                start: "-15% top",
                end: "200% top",
                scrub: 1.5,
                // markers: true,
                pin: true,
            }
        })

        tl.to(".video-box", {
            clipPath: "circle(100% at 50% 50%)",
            ease: "power1.inOut"
        })
    })



  return (
    <section className="vd-pin-section">
        <div
        style={{
            clipPath: "circle(9.6% at 50% 50%)"
        }} 
        className="size-full video-box">
            <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />

            <div className="abs-center md:scale-100 scale-200">
                <img src="/images/circle-text.svg" alt="" className="spin-circle" />
                <div className="play-btn">
                    <img src="/images/play.svg" alt="" className="size-[3vw] ml-[0.5vw]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default VideoPinSection