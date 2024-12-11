import React from "react";
import '../CSS/nav.css'


function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-black">
                <div class="container-fluid">
                    <a class=" navbar-brand ms-5" href="#"><span className="text-white">VIC</span>TOR</a>
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav  ms-auto me-5">
                            <li class="nav-item ">
                                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Education</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">My Work</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Download Cv</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Contact me</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;