import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
  const heroRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(carRef.current, {
      x: 650,
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
      <div className="h-1/2"></div>

      <section
        ref={heroRef}
       className="h-screen relative flex items-center"
      >
        <h1
         className="absolute left-20 top-57.5 text-[25px]"
        >
          Ajeetbairwa57@gmail.com
        </h1>

        <img
          ref={carRef}
          src="/CarTopView.png"
          alt="car"
          className="absolute left-0 w-100"
        />
      </section>
      <div className="h-1/2"></div>

    </div>
  );
}

export default Hero;