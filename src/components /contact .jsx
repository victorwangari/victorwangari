import React from "react";
import '../CSS/contact.css'


function Contact() {
    return(
       <>
        <div id="contact" className="bg-black">
        <div className="contact">
            <div className="row">
                <div className="contact-left col-4">
                    <h1 className="sub-title text-white">Contact <span className="span-skill">Me</span></h1>
                    <p className="text-white fs-5"><img className="phone" src="https://img.icons8.com/?size=100&id=9rAH3aJTe5Vu&format=png&color=000000" alt="G-mail" /> victorwangari65187@gmail.com</p>
                    <p className="text-white"><img className="phone" src="https://img.icons8.com/?size=100&id=WV326xpsBMyb&format=png&color=000000" alt="Phone" />  +254115314344</p>
                    <div className="social-icon">
                        <a href=""><img className="icon" src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="Lineked In" /></a>
                        <a href=""><img className="icon" src="https://img.icons8.com/?size=100&id=A1JUR9NRH7sC&format=png&color=000000" alt="WhatsApp" /></a>
                        <a href=""><img className="icon" src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000" alt="Instagram" /></a>
                        <a href=""><img className="icon" src="https://img.icons8.com/?size=100&id=3veRWJpxPPDH&format=png&color=000000" alt="TikTok" /></a>
                    </div>
                    <a href="./img/file 1.pdf" download className="btn btn2 bg-warning">Download Cv</a>

                </div>
                <div className="contact-right col-6 ">
                    <form name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your Name " required/>
                        <input type="email" name="Email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" className="btn btn2 bg-warning">Submit</button>
                    </form>
                    <span id="msg"></span>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p className="text-white">Copyrihgt <img className="text-white" src="https://img.icons8.com/?size=100&id=cBtsUdDPCDm3&format=png&color=000000" alt="" /> 2024 VICTOR. all rights reserved.</p>
        </div>
    </div>
       </>
    
    )
}

export default Contact;