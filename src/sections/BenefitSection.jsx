import ClipPathTitle from "../components/ClipPathTitle"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const BenefitSection = () => {


    useGSAP(()=>{

        const revealBanners =  gsap.timeline({
                // opacity: 1,
                delay: 1,
                scrollTrigger: {
                    trigger: ".benefit-section",
                    start: "top 60%",
                    end: "top top",
                    scrub: 2,
                    // markers: true,
                }
            }).to(".benefit-section .first-title", {
                duration: 10,
                opacity: 1,
                clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.inOut",
            }, "+=2" ).to(".benefit-section .second-title", {
                duration: 10,
                opacity: 1,
                clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.inOut",
            }, "+=2").to(".benefit-section .third-title", {
                duration: 10,
                opacity: 1,
                clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.inOut",
            }, "+=2").to(".benefit-section .fourth-title", {
                duration: 10,
                opacity: 1,
                clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.inOut",
            }, "+=2")
            
    })



  return (
    <>
        <section className="benefit-section">
            <div className="container mx-auto pt-20">
                <div className="col-center">
                    <p>Unlock the advantages:   <br />
                        Explore the key benefits of Choosing Spylt
                    </p>

                    <div className="mt-20 col-center">
                        <ClipPathTitle title={"Shelf Stable"} color={"#faeade"} bg={"#c88e64"} className={"first-title"} borderColor={"#222123"} />
                        <ClipPathTitle title={"Protein + Caffeine"} color={"#222123"} bg={"#faeade"} className={"second-title"} borderColor={"#222123"} />
                        <ClipPathTitle title={"Infinitely Recyclable"} color={"#faeade"} bg={"#7F3B2D"} className={"third-title"} borderColor={"#222123"} />
                        <ClipPathTitle title={"Lactose free"} color={"#2E2D2F"} bg={"#FED775"} className={"fourth-title"} borderColor={"#222123"} />
                    </div>

                    <div className="md:mt-0 mt-10">
                        <p>And much more...</p>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default BenefitSection