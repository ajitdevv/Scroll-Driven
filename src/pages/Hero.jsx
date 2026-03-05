import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
  const heroRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(carRef.current, {
      x: 720,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
      }
    });
  }, []);

  return (
    <div className="bg-background text-foreground">
      <section
        ref={heroRef}
       className="h-screen relative flex items-center">
        <h1 className="absolute left-5 items-center text-[11px] md:text-[25px]">
          Ajeetbairwa57@gmail.com
        </h1>
        {/* left-5  md:left-20 md:top-65.5 */}
        <img
          ref={carRef}
          src="/CarTopView.png"
          alt="car"
          className="absolute items-center w-40 md:w-100" />
          {/* left-0  */}
      </section>
    </div>
  );
}

export default Hero;