import React from "react";
import '../CSS/contact.css'


function Contact() {
    return(
        <div className="bg-black">
            <div className="contact">
                <h2 className="text-white">CONTACT <span className="span-skill">ME</span></h2> 
            </div>
            <div className=" contact-details">
                <div>
                    <h4 className="text-white fs-5"><img className="email" src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="" /> victorwangari65187@gmail.com</h4>
                </div>
                <div>
                    <h4 className="text-white"><img className="email"  src="https://img.icons8.com/?size=100&id=WV326xpsBMyb&format=png&color=000000" alt="" />+254115314344</h4>
                </div>
                <div className="social-media">
                    <a href=""><img className="ICONS" src="https://img.icons8.com/?size=100&id=114445&format=png&color=000000" alt="" /></a>
                    <a href=""><img className="ICONS" src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="" /></a>
                    <a href=""><img className="ICONS" src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000" alt="" /></a>
                    <a href=""><img className="ICONS" src="https://img.icons8.com/?size=100&id=3veRWJpxPPDH&format=png&color=000000" alt="" /></a>
                
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact;