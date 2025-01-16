import React from "react";
import vic from "../IMG/vicky2.jpeg"
import "../CSS/educations.css"


function Educations() {
    return (
        <div className="education-section bg-black">
            <h2 className="skills-heading sk text-white">
                My <span className="span-skill">Education</span>
            </h2>
            <div className=" education row">
                <div className="row">
                    <div className="vic2 col-lg-12 col-xl-5 col-md-12 col-sm-12">
                        <img className="vic" src={vic} alt="" />
                    </div>
                    <div className="educations-details col-lg-12  col-xl-5 col-md-12 col-sm-12">
                        <h3 className="education-subheading text-white">Moringa School</h3>
                        <p className="ed text-white">
                        I pursued my software engineering education at Moringa School from February 2024 to September 2024. The program provided an intensive, hands-on learning experience, covering essential areas like full-stack development, algorithms, data structures, web development, and mobile app development. It was designed to equip me with the technical skills and problem-solving abilities needed to succeed in the tech industry.
                        <br/> <br/>

What I appreciated most was the project-based learning approach. I worked on real-world projects that allowed me to collaborate with my peers and receive guidance from experienced mentors. This immersive learning environment not only sharpened my coding abilities but also fueled my passion for technology and equipped me with the practical experience I need to face the challenges in software development today.
                        </p>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Educations;