import React, { useEffect, useState } from "react";
import Themetoggle from "../components/ThemeToggle";
import gsap from "gsap";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [DarkTheme, setDarkTheme] = useState(false);
    let [theme, setTheme] = useState(false);
  
  const Navlinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    gsap.from(".Navbar", {
      y: -200,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });

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
    const CheckTheme = () => {
      const HasDark = document.documentElement.classList.contains("dark");
      setDarkTheme(HasDark);
    };
    CheckTheme()
  }, [theme]);
  return (
    <div
      className={`sticky Navbar z-50 transition-all duration-300 ${
        scrolled ? "top-0 px-0" : "top-6 px-3 md:px-10"
      }`}
    >
      <div
        className={`bg-background/50 shadow-(--shadow) backdrop-blur-xs  flex justify-between items-center text-foreground transition-all duration-700 ${
          scrolled ? "p-5 w-full" : "p-3 rounded-2xl  max-w-4xl mx-auto"
        }`}
      >
        <div>
          <a href="#">
            <img className="size-7" src={theme?"./logo/reminihi.png":"./logo/remini2.png"} alt="" />
          </a>
        </div>
        <div className="flex gap-4 items-center">
          {Navlinks.map((item) => {
            return (
              <div
                key={item.id}
                className="text-xs md:text-base transition-all duration-300 cursor-pointer hover:underline"
              >
                <a href={item.link}>{item.name}</a>
              </div>
            );
          })}
        </div>
        <div>
          <Themetoggle theme={theme} setTheme={setTheme}/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
