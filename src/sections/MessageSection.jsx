import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {

    // now animation
    useGSAP(()=>{
        // first we want ot split the text to apply animation to them
        // for the first message
        const firstMsgSplit = SplitText.create(".first-message", {
            type: "words",
        });
        // for the secondmessage
        const secondMsgSplit = SplitText.create(".second-message", {
            type: "words",
        });
        // for para
        const paragraphSplit = SplitText.create(".message-content p", {
            type: "words, lines, chars",   // so that the para is animated word by word and line by line
            linesClass: "paragraph-line"
        });

        // lets animate these
        // for first msg
        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            // now we have to make animate by scrolling so define a scrollTrigger with a trigger and when to start and when to end
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "30% center",
                // markers: true,
                scrub: true,
            }
        })

        // for second msg
        gsap.to(secondMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            // now we have to make animate by scrolling so define a scrollTrigger with a trigger and when to start and when to end
            scrollTrigger: {
                trigger: ".second-message",
                start: "top center",    // this tells the position that from which point animation starts
                end: "bottom center",  // this tells the position that from which point animation ends
                // markers: true,  //very important for debugging
                scrub: true,    // this make the animation along the scroll
            }
        })

        // now we'll make a reveal message animation for the middle word
        // for that we'll create a timeline (no need to create timeline if animating only one thing)

        // const revealTl = gsap.timeline({
        //     delay: 1,
        // });

        gsap.to(".msg-text-scroll", {
            opacity: 1,
            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
            scrollTrigger: {
                trigger: ".msg-text-scroll",
                start: "top center",
                end: "bottom center",
                scrub: true,
                ease: "circ.inOut",
            }
        })

        // for lines to appear one by one
        gsap.from(paragraphSplit.lines, {
              delay: 10,
              opacity: 1,
              yPercent: 300,
              stagger: 0.5,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: ".message-content p",
                start: "top center",
                end: "bottom center",
                // markers: true, 
                scrub: true,
              }
            },
        "-=0.5"
        )


        // for words to appear one by one(can switch between chars and words, passed both in the SplitText function)
        gsap.from(paragraphSplit.words, {
                yPercent: 150,
                stagger: 0.05,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".message-content p",
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                }
            }
        )

    })



  return (
    <section className="message-content">
        {/* flex center is basically flex items-center justify-center written in index.css */}
        <div className="container mx-auto flex-center py-28 relative">
            <div className="w-full h-full">
                <div className="msg-wrapper">
                    <h1 className="first-message">Strip up your fearless past and</h1>

                    <div 
                        style={{
                            clipPath: "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)",
                        }} 
                        className="msg-text-scroll opacity-0">
                            <div className="bg-light-brown md:pb-5 pb-3 px-5">
                                <h2 className="text-red-brown">Fuel Up</h2>
                            </div>
                    </div>

                    <h1 className="second-message">
                        your future with every gulp of Perfect Protein
                    </h1>
                </div>

                <div className="flex-center md:mt-20 mt-10">
                    <div className="max-w-md px-10 flex-center overflow-hidden">
                        <p className="">
                            Rev up your rebel spirit and feed the adventure of life with SPYLT, where you're one chug away from epic nostalgia and fearless fun.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MessageSection