import React from "react";


function Contact() {
    return (
        
        <div class="contact bg-black">
            <div class="row">
                <div class="contact-letf">
                    <h1 class="sub-title">Contact Me</h1>
                    <p><i class="fa-solid fa-paper-plane"></i>victorwangari65187@gmail.com</p>
                    <p><i class="fa-solid fa-phone"></i>+254115314344</p>
                    <div class="social-icon">
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                        <a href=""><i class="fa-brands fa-square-instagram"></i></a>
                        <a href=""><i class="fa-brands fa-square-whatsapp"></i></a>
                        <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-telegram"></i></a>
                    </div>
                    <a href="./img/file 1.pdf" download class="btn btn2">Download Cv</a>

                </div>
                <div class="contact-right">
                    <form name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your Name " required/>
                        <input type="email" name="Email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn btn2">Submit</button>
                    </form>
                    <span id="msg"></span>
                </div>
            </div>
            <div class="copyright">
            <p>Copyrihgt <i class="fa-regular fa-copyright"></i> 2024 VICTOR. all rights reserved.</p>
        </div>
        </div>
       
   
    )
}

export default Contact;