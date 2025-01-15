import React from "react";
import '../CSS/nav.css';

function Navbar({ onNavigate }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <span className="text-white">VIC</span>TOR
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                  onClick={() => onNavigate('hero')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#"
                  onClick={() => onNavigate('services')}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#"
                  onClick={() => onNavigate('skills')}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#"
                  onClick={() => onNavigate('educations')}
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#"
                  onClick={() => onNavigate('work')}
                >
                  My Work
                </a>
              </li>
              <li className="nav-item">
              <a
                  className="nav-link text-white"
                  href="#"
                  onClick={() => onNavigate('contact')}
                >
                  Download CV
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#"
                  onClick={() => onNavigate('contact')}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
