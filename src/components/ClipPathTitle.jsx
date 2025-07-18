import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ClipPathTitle = ({title, color, bg, className, borderColor}) => {



    // useGSAP(()=>{

    //     gsap.to(className, {
    //             opacity: 1,
    //             clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
    //             scrollTrigger: {
    //                 trigger: className,
    //                 start: "top center",
    //                 end: "bottom 40%",
    //                 scrub: true,
    //                 ease: "circ.inOut",
    //                 // markers: true,
    //             }
    //     })

    // })









  return (
    <>
        <div className="general-title">
            <div
            style={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                borderColor: borderColor,
            }} 
            className={`${className} border-[0.5vw] text-nowrap opacity-0`}>

                <div
                style={{
                        backgroundColor: bg,
                }} 
                className="md:px-14 pb-5 px-3 md:pt-0 pt-3">

                    <h2 
                    style={{
                        color: color,
                    }}
                    className="">{title}</h2>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default ClipPathTitle