import React from "react";
import '../CSS/services.css';


function Services(){
    return(
        <div className="bg-black">
            <div>
            <h2 className="skills-heading text-white">
                My <span className="span-skill">Services</span>
            </h2>
            </div>
            <div className="services-list">
                <div>
                    
                    <h2 className="text-white">Web Developement</h2>
                    <p className="text-white">I bring my passion for creativity and expertise in web development to help you build a bold and
                        impactful online presence. As a skilled web developer, I am committed to creating visually
                        appealing, user-friendly, and high-performing websites tailored to your specific needs and
                        objectives.</p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    
                    <h2 className="text-white">Web Design</h2>
                    <p className="text-white">I bring my passion for creativity and expertise in web design to help you make a bold and
                        impactful online presence. As a seasoned web designer, I am committed to crafting visually
                        stunning, user-friendly, and functional websites that cater to your specific needs and goals.
                    </p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i class="fa-solid fa-crop-simple"></i>
                    <h2 className="text-white">UI/UX Design</h2>
                    <p className="text-white">I bring my passion for creativity and expertise in UI/UX design to help you make a bold and
                        impactful online presence. As a seasoned UI/UX designer, I am committed to crafting visually
                        stunning, user-friendly, and functional UI/UX that cater to your specific needs and goals.</p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i class="fa-solid fa-crop-simple"></i>
                    <h2 className="text-white">Poter & Logo design</h2>
                    <p className="text-white">
                        I bring my passion for creativity and expertise in poster and logo design to help you establish
                        a bold and memorable visual identity. As an experienced designer, I am dedicated to creating
                        eye-catching, impactful posters and logos that perfectly align with your unique vision and goals
                    </p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default Services;