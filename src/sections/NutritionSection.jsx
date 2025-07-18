import gsap from "gsap";
// import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants/index";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const NutritionSection = () => {


    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });


    const [lists, setLists] = useState(nutrientLists);

    useEffect(()=>{
        if(isMobile){
            setLists(nutrientLists.slice(0,3))
        }else{
            setLists(nutrientLists);
        }
    }, [])


    useGSAP(()=>{

        gsap.to(".nutrition-text-scroll", {
                opacity: 1,
                clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                scrollTrigger: {
                    trigger: ".nutrition-text-scroll",
                    start: "top center",
                    end: "bottom 40%",
                    scrub: true,
                    ease: "circ.inOut",
                    // markers: true,
                }
        })
    })





  return (
    <section className="nutrition-section">
      <img 
        src="/images/slider-dip.png" 
        alt=""
        className="w-full object-cover"
       />

       <img src="/images/big-img.png" alt="" className="big-img" />

       <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">

            <div className="relative inline-block md:translate-y-20">
                <div className="general-title relative flex flex-col justify-center items-center gap-24">
                    <div className="overflow-hidden place-self-start p-2">
                        <h1>It still does</h1>
                    </div>
                    <div style={{
                        clipPath: "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)"
                    }} className="nutrition-text-scroll place-self-start">
                        <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                            <h2 className="text-milk-yellow">Body Good</h2>
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex md:justify-center items-center translate-y-5">
                <div className="md:max-w-xs max-w-md">
                    <p className="text-lg md:text-right text-balance font-paragraph">Milk contains a wide array of nutrients, including vitamins, minerals, and protein, and this is lactose free</p>
                </div>
            </div>



            <div className="nutrition-box z-20">
                <div className="list-wrapper">
                    {
                        lists.map((nutrient, index) => (
                            <div key={index} className="relative flex-1 col-center">
                                <div className="">
                                    <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                                    <p className=" font-paragraph text-sm mt-2">up to</p>
                                    <p className="text-2xl md:text-4xl tracking-tighter font-bold">{nutrient.amount}</p>
                                </div>

                                {
                                    index !== lists.length - 1 && (
                                        <div className="spacer-border" />
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
       </div>
    </section>
  );
};

export default NutritionSection;
