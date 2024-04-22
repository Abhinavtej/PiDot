import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './component/Images/logo.png';
import logoy from './component/Images/logo-yellow.png';
import { HoverBorderGradient } from "./component/ui/hover-border-gradient.tsx";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.style.backgroundColor = window.scrollY > 0 ? "#27272A" : "transparent";
        const img = header.querySelector("img");
        img.src = window.scrollY > 0 ? logoy : logo;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const openmenu = () => {
    document.getElementById('sidemenu').style.right = "0";
  };

  const closemenu = () => {
    document.getElementById('sidemenu').style.right = "-20em";
  };

  useEffect(() => {
    const handleClickOutsideMenu = (e) => {
      const menu = document.querySelectorAll('nav > li');
      menu.forEach(function (item) {
        if (!item.contains(e.target)) {
          item.querySelector('.submenu').style.display = 'none';
        }
      });
    };

    document.addEventListener('click', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to={'/'}>
          <img
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>
      <nav>
        <ul id="sidemenu">
          <li className="mobile"><Link onClick={closemenu} to="#"><span className="material-symbols-outlined">close</span></Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About us</Link></li>
          <li><Link to="/Products">Products</Link></li>
        </ul>
        <HoverBorderGradient id='contact-button' containerClassName="rounded-full" as="button" className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2">
            <Link to="/Contact"><span>Contact us</span></Link>
        </HoverBorderGradient>
        
        <Link className="mobile" onClick={openmenu} to="#"><span className="material-symbols-outlined">menu</span></Link>
      </nav>
    </header>
  );
}