import React from 'react'
import About from './Images/about.png'
import Our_Why from './Images/our_why.png'
import Our_What from './Images/our_what.png'
import Our_Who from './Images/our_who.png'
import Our_How from './Images/our_how.png'
import Our_Values from './Images/our_values.png'
import Our_Identity from './Images/our_identity.png'
import { Tabs } from "./ui/tabs.tsx";
import '../global.css'

export default function Aboutus() {
  
  return (
    <>
    <div className="carousel">
      <div className="space"></div>
      <div className="faq"><p>About us</p></div>
      <div id="carouselExampleFade" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={About} className="d-block w-100" style={{padding: '2em'}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Our_Why} className="d-block w-100" style={{padding: '2em'}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Our_Who} className="d-block w-100" style={{padding: '2em'}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Our_How} className="d-block w-100" style={{padding: '2em'}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Our_What} className="d-block w-100" style={{padding: '2em'}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Our_Values} className="d-block w-100" style={{padding: '2em'}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Our_Identity} className="d-block w-100" style={{padding: '2em'}} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <section id='aboutus'>
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40" style={{...(window.innerWidth <= 480 && {width: '90%', height: '250px', marginTop: '0'})}}>
          <Tabs tabs={tabs} />
        </div>
    </section>
    </>
  )
}

const tabs = [
  {
    title: "About Us",
    value: "about",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
        <p>About Us</p>
        <img style={{ marginTop: '3em',...(window.innerWidth <= 480 && {marginTop: '1em'})}} src={About} alt="" />
      </div>
    ),
  },
  {
    title: "Our Why",
    value: "our_why",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
        <img style={{ marginTop: '4em',...(window.innerWidth <= 480 && {marginTop: '1em'})}}src={Our_Why} alt="" />
      </div>
    ),
  },
  {
    title: "Our Who",
    value: "our_who",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
        <img style={{ marginTop: '4em',...(window.innerWidth <= 480 && {marginTop: '1em'})}} src={Our_Who} alt="" />
      </div>
    ),
  },
  {
    title: "Our How",
    value: "our_how",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
        <img style={{ marginTop: '4em',...(window.innerWidth <= 480 && {marginTop: '1em'})}} src={Our_How} alt="" />
      </div>
    ),
  },
  {
    title: "Our What",
    value: "our_what",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
        <img style={{ marginTop: '4em',...(window.innerWidth <= 480 && {marginTop: '1em'})}} src={Our_What} alt="" />
      </div>
    ),
  },
  {
    title: "Our Values",
    value: "our_values",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
        <img style={{ marginTop: '3em',...(window.innerWidth <= 480 && {marginTop: '1em'})}} src={Our_Values} alt="" />
      </div>
    ),
  },
  {
    title: "Our Identity",
    value: "our_identity",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
        <img style={{ marginTop: '2em'}} src={Our_Identity} alt="" />
      </div>
    ),
  },
];