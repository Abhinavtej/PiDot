import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdLocationPin, MdEmail, MdPhoneInTalk } from "react-icons/md";
import { Link } from 'react-router-dom';
import shape from './Images/shape.png'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <div className="space"></div>
      <div className="contact-container">
        <span className="big-circle"></span>
        <img src={shape} width='15%' className="square" alt="" />
        <div className="form bg-gradient-to-br from-zinc-700 to-zinc-900">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <MdLocationPin style={{color: '#F69605'}}/>
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <MdEmail style={{color: '#F69605'}}/>
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <MdPhoneInTalk style={{color: '#F69605'}}/>
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <Link href="#">
                  <FaFacebook />
                </Link>
                <Link href="#">
                  <FaTwitter />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
                <Link href="#">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>
            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" required />
                <label htmlFor="name">Name</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" required />
                <label htmlFor="email">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" required />
                <label htmlFor="phone">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" required></textarea>
                <label htmlFor="message">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
