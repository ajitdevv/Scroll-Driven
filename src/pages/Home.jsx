import React, { useEffect } from "react";
import Nav from "../componentsprentes/nav";
import gsap from "gsap";
import Cards from "../components/Cards";

const Home = () => {
  useEffect(() => {
    gsap.from(".Hometext", {
      y: -40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
      gsap.from(".Homecard1", {
      y: 300,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
      gsap.from(".Homecard2", {
      y: 300,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
      gsap.from(".Homecard3", {
      y: 300,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);
  const cardData = [
    {
      id: 1,
      title: "95%",
      description: "Customer Satisfaction",
      bgColor: "bg-indigo-500/30 Homecard1",
    },
    {
      id: 2,
      title: "2.5x",
      description: "Faster Development",
      bgColor: "bg-amber-500/30 Homecard2",
    },
    {
      id: 3,
      title: "120+",
      description: "Projects Completed",
      bgColor: "bg-emerald-500/30 Homecard3",
    },
  ];
  return (
    <div className="h-screen bg-[url('/Homebg.png')] bg-cover bg-center w-full items-center flex flex-col gap-30 justify-center">
      <div className="flex top-6 justify-center items-center">
        <h1 className="Hometext text-xl md:text-5xl tracking-[10px] md:tracking-[20px] text-foreground">
         <span className="">WELCOME </span>ITZFIZZ
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[15%] ">
        {cardData.map((item) => {
          return (
            <Cards
              key={item.id}
              title={item.title}
              description={item.description}
              bg={item.bgColor }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
