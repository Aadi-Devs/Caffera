const FooterSection = () => {
  return (
    <section className="footer-section">
        <img src="/images/footer-dip.png" alt="" className="w-full object-cover" />

        <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
            <div className="overflow-hidden z-10">
                <h1 className="general-title text-center text-milk py-5">#CHUGRESPONSIBLY</h1>
            </div>

            <video src="/videos/splash.mp4" className="absolute top-0 object-contain mix-blend-lighten" autoPlay playsInline muted></video>

            <div className="flex-center gap-5 relaive z-10 md:mt-20 mt-5">
                <div className="social-btn">
                    <img src="/images/yt.svg" alt="" />
                </div>
                <div className="social-btn">
                    <img src="/images/insta.svg" alt="" />
                </div>
                <div className="social-btn">
                    <img src="/images/tiktok.svg" alt="" />
                </div>
            </div>

            <div className="mt-40 md:px-10 px-5 gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
                <div className="flex items-center md:gap-16 gap-5">
                    <div>
                        <p>SPYLT Flavors</p>
                    </div>
                    <div>
                        <p>Chug Club</p>
                        <p>Student Marketing</p>
                        <p>Dairy Dealers</p>
                    </div>
                    <div>
                        <p>Company</p>
                        <p>Contracts</p>
                        <p>Tasty Talk</p>
                    </div>
                </div>

                <div className="md:max-w-lg ">
                    <p></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterSection