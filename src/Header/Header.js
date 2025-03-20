import React from "react";
import "./Header.css";


export default function Header() {
  return (
    <>
      <div className="AllContainer">
        <div className="Img-container">
          <img src={require("./../Images/hero-bg.jpg")} alt="Hero_Bg" />
        </div>
        <nav className="Navbar-container">
          <div className="navbar-flex">
{/* main navbar */}
            <div className="Nav-items">
              <ul className="Items-container">
                <li className="items">Home</li>
                <li className="items">About</li>
                <li className="items">Services</li>
                <li className="items">Resume</li>
                <li className="items">Team</li>
                <li className="items">Lists</li>
                <li className="items">Contact Us</li>
              </ul>
            </div>
            <div className="Nav-logo">
                <h1>PIROMA</h1>
                <img src={require("./../Images/logo.png")} alt="Logo" />
            </div>
          </div>
        </nav>
        <div className="textOnBg-Container">
            <h1>We Are The Best</h1>
            <span className="Name-span-logo">PIROMA</span>
        </div>
            <div className="logos-buttons-container">
                <div className="button-container text">Text</div>
                <div className="button-container stat">Stattistics</div>
                <div className="button-container pro">Projects</div>
                <div className="button-container rand">Rand</div>
                <div className="button-container DataB">DataB</div>
            </div>
      </div>
    </>
  );
}
