import React, { useEffect } from "react";
import Nav from "../componentsprentes/nav";
import gsap from "gsap";
import Cards from "../components/Cards";

const Home = () => {
  useEffect(() => {
    gsap.from(".Hometext", {
      y: -40,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
  }, []);
  useEffect(() => {
    gsap.from(".Homecard", {
      y: 40,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
  }, []);
  const cardData = [
    {
      id: 1,
      title: "95%",
      description: "Customer Satisfaction",
      bgColor: "bg-indigo-500/50",
    },
    {
      id: 2,
      title: "2.5x",
      description: "Faster Development",
      bgColor: "bg-amber-500/50",
    },
    {
      id: 3,
      title: "120+",
      description: "Projects Completed",
      bgColor: "bg-emerald-500/50",
    },
  ];
  return (
    <div className="h-screen bg-[url('/Homebg.png')] bg-cover bg-center w-full items-center flex flex-col gap-30 justify-center">
      <div className="flex top-6 justify-center items-center">
        <h1 className="Hometext text-5xl tracking-[20px] text-foreground">
         <span className="">WELCOME </span>ITZFIZZ
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-[15%] ">
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
