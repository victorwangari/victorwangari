import React, { useState } from "react";
import "../CSS/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        // Submit form data
        fetch("https://formsubmit.co/victorwangari65187@gmail.com", {
            method: "POST",
            body: new FormData(form),
        })
            .then(response => {
                if (response.ok) {
                    setIsSubmitted(true);
                    form.reset(); // Clear form fields
                } else {
                    alert("Failed to send message. Please try again.");
                }
            })
            .catch(error => console.error("Error:", error));
    };

    return (
        <div className="bg-black">
            <div className="contacts">
                <div className="contact-details">
                    <div className="em">
                        <h2 className="text-white">CONTACT <span className="span-skill">ME</span></h2>
                        <h4 className="text-white emd fs-5">
                            <img className="email" src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="" />
                            victorwangari65187@gmail.com
                        </h4>
                    </div>
                    <div>
                        <h4 className="text-white">
                            <img className="email" src="https://img.icons8.com/?size=100&id=WV326xpsBMyb&format=png&color=000000" alt="" />
                            +254115314344
                        </h4>
                    </div>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/victor-wangari-263802314/">
                            <img className="ICONS" src="https://img.icons8.com/?size=100&id=114445&format=png&color=000000" alt="" />
                        </a>
                        <a href="https://github.com/victorwangari">
                            <img className="ICONS" src="https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000" alt="" />
                        </a>
                        <a href="https://wa.me/254115314344">
                            <img className="ICONS" src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="" />
                        </a>
                        <a href="https://www.tiktok.com/@dev_vicky?lang=en">
                            <img className="ICONS" src="https://img.icons8.com/?size=100&id=3veRWJpxPPDH&format=png&color=000000" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/Victor_W_Kamau_CV.pdf.pdf" download="/Victor_W_Kamau_CV.pdf.pdf">
                            <button className="btn btncv bg-warning">DOWNLOAD CV</button>
                        </a>
                    </div>
                </div>
                <div className="contact-form">
                    <h4 className="text-white fs-5">LEAVE A MESSAGE</h4>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn2 bg-warning">Submit</button>
                        </form>
                    </div>
                    {isSubmitted && <p className="text-success">Message sent successfully!</p>}
                </div>
            </div>
            <div className="footer">
                <p className="text-white">
                    <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} Victor W Kamau. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Contact;
