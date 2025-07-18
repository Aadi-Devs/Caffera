import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";


const HeroSection = () => {

    gsap.registerPlugin(SplitText);

    useGSAP(() => {

        // use to split big txt into chars or words and then animate them without animating them one by one
        const titleSplit = SplitText.create(".hero-title", {
            type: "chars",
        });

        // now we'll create a timeline for the tasks
        const tl = gsap.timeline({
            delay: 1,
        });
        

        // the elements of the chosen class will show animation
        tl.to(".hero-content", {
            opacity: 1,          //! fixing the opacity from 0(defined in tag) to 1
            y: 0,
            ease: "powerl.inOut",            //! ease in and out animation
        })
          .to(".hero-text-scroll", {         //! to make the banner appear like it's openeing from between
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",              //! from initial position(defined in tag) to this position
            ease: "circ.out"                 //! to make it open smoothly

        }, "-=0.5") //! to make banner open with the main text, so they start at the same time
                  .from(titleSplit.chars, {
                      yPercent: 100,
                      stagger: 0.02,
                      ease: "power2.out",
                    },
                    "-=0.5");             
        
        //! 2) making the scroll rotate, for that we have to create a new timeline, that works on scroll (for using this scrollTrigger plugin we have to register it in the main file, in App.jsx)

        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-container",     //? Specifies the element that will trigger the scroll-based animation.
                start: "1% top",            //? Animation starts when 1% of .hero-container hits the top of the viewport.(It compares two positions: "trigger position" vs "viewport position")
                end: "bottom top",      //? tells when the animation should end(when the bottom of the container reaches the top)
                scrub: true,        //?  With scrub: true, your animation smoothly follows the scroll in real time.
                // markers: true,      //? Displays visual markers in the browser (for debugging)
            },
        });
        //? 2) now making the animation, (inside the timeline we'll rotate the container)
        heroTl.to(".hero-container", {
            rotate: 7,
            scale: 0.9,
            yPercent: 30,
            ease: "power1.inOut",
        });

    });

//! 1) Animating each text using the splittext into chars to animate each letter, giving it a stagger so that letters appear one after another - (line 36)
//! 2) next thing is to make the homepage scale down a little bit and rotate to a degree when we scroll down
//! 3) making the next section after homepage


  return (
    <section className="bg-main-bg">
      <div className="hero-container overflow-hidden">
        {/* <img
          src="/images/hero-img.png"
          alt=""
          className="absolute top-100 object-cover z-1 left-1/2 -translate-x-1/2 object-auto lg:scale-100 md:scale-150"
        /> */}


        {/* Mobile: Show Image */}
        <img
          src="/images/hero-img.png"
          alt="Hero"
          className="block lg:hidden absolute top-100 object-cover z-1 left-1/2 -translate-x-1/2 object-auto md:scale-150"
        />

        {/* Large devices: Show Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden lg:block absolute w-full top-0 object-cover z-1 left-1/2 -translate-x-1/2 object-auto lg:scale-130"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>






        <div className="hero-content opacity-0 z-10">
            <div className="overflow-hidden">
                <h1 className="hero-title">Freaking Delicious</h1>
            </div>
            <div 
            style={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }} 
            className="hero-text-scroll">
                <div className="hero-subtitle">
                    <h1>Protein + Caffeine</h1>
                </div>
            </div>

            <h2 className="">Live life to the fullest, with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</h2>

            <div className="hero-button">
                <p>Chug A  SPYLT</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
