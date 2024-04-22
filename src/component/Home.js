import React from 'react';
import { Link } from 'react-router-dom';
import Products from './Products'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards.tsx";
import { BackgroundBeams } from "./ui/background-beams.tsx";
import testimonials from './testimonials.json'
import Accordian from './Accordian.js';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect.tsx";
import './Home.css';
import About from './About.js'
import '../global.css'

export default function Home() {

  const words = [
    {
      text: "Reach",
    },
    {
      text: "out",
    },
    {
      text: "and",
    },
    {
      text: "say",
    },
    {
      text: "Hello !",
      className: "text-[#F69605] dark:text-[#F69605]",
    },    
  ];

  return (
    <>
      <div className="home-container">
      <div className="h-[55rem] w-full bg-zinc-900 relative flex flex-col items-center justify-center antialiased"s>
          <span id='caption' style={{...(window.innerWidth <= 480 && {fontSize: '3em', lineHeight: '1.2em'})}} className="md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold">
            Empower. Elevate. Excelerate.
          </span>
        <BackgroundBeams />
      </div>
      </div>
      <div className="homes">
      <About />
      <Products />
      </div>
      <div className="testimonials">
        <p>Testimonials</p>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="home-contact">
        <div className="flex flex-col items-center justify-center h-[30rem] ">
          <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10" style={{...(window.innerWidth <= 480 && {fontSize: '1em', marginTop: '-5em'})}}>
            Get in touch. We're eager to hear from you !
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm" style={{...(window.innerWidth <= 480 && {fontSize: '1em', marginBottom: '-30vh'})}}>
              <Link to="/Contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="faq">
        <p>Frequently asked questions</p>
      </div>
      <div className="faq-a"><Accordian /></div>
    </>
  );
}