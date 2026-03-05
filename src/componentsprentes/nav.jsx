import React, { useEffect, useState } from "react";
import Themetoggle from "../components/ThemeToggle";
import gsap from "gsap";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  const Navlinks = [
    { id: "1", name: "Home", link: "#" },
    { id: "2", name: "About", link: "/about" },
    { id: "3", name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    gsap.from(".Navbar", {
      y: -1200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <div
      className={`sticky Navbar z-50 transition-all duration-300 ${
        scrolled ? "top-0 px-0" : "top-6 px-10"
      }`}
    >
      <div
        className={`bg-background/70 shadow-(--shadow) backdrop-blur-xs  flex justify-between items-center text-foreground transition-all duration-300 ${
          scrolled ? "p-5 w-full" : "p-3 rounded-2xl  max-w-4xl mx-auto"
        }`}
      >
        <div>
          <a href="#">Logo</a>
        </div>
        <div className="flex gap-4 items-center cursor-pointer">
          {Navlinks.map((item) => {
            return (
              <div
                key={item.id}
                className="text-base transition-all duration-300 hover:underline"
              >
                <a href={item.link}>{item.name}</a>
              </div>
            );
          })}
        </div>
        <div>
          <Themetoggle />
        </div>
      </div>
    </div>
  );
};

export default Nav;
