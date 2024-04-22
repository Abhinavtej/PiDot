import React from 'react';
import logo from './component/Images/logo.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className="footer">
      <hr />
      <div className="row">
        <div className="col">
        <Link to="/"><img src={logo} alt="Logo" width="75px" height="75px"/></Link>
          <ul class="list-unstyled small">
            <br />
            <li>Place</li>
            <li>Balanagar</li>
            <li>Hyderabad, Telangana - 500100</li>
          </ul>
        </div>
        <div className="col-1">
          <ul className="list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Product">Products</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;