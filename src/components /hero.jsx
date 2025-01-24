import React from "react";
import VickyImage from "../IMG/vicky.png"
import "../CSS/hero.css"
import nexus from "../IMG/OPTI-NEXUS-removebg-preview.png"


function Hero() {
    return(
        <div className="hero-section  bg-black">
            <div className="hero">
                <img className="nexus" src={nexus} alt="nexus" />
                <h1 className="hero-heading text-white">Hi, Its <span className="dev">VIC</span>TOR</h1>
                <h2 className="text-white hero-h2">
                    I'm a Web <span className="dev">Developer</span>
                </h2>
                <p className="hero-text text-white">I'm a passionate software engineer with a strong foundation in building user-centric applications. I graduated from Moringa School, where I honed my skills in modern web technologies and best practices. With a focus on creating clean, efficient code and seamless user experiences, I'm always eager to tackle new challenges and continue growing in the tech industry.</p>
                <div>
                {/* <button  type="button" class="btn btn-warning">Hire Me</button> */}
                </div>
            </div>
            <div className="hero-image">
                <img className="vicky" src={VickyImage} alt="vicky" />
            </div>
           
        </div>

    )
}

export default Hero;