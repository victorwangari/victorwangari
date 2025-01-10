import React from "react";
import '../CSS/work.css'


function Work(){
    return(
        <div className="work-section bg-black">
            <h2 className="skills-heading text-white">
                My <span className="span-skill">Projects</span>
            </h2>
            <div class="work-list">
                <div class="work">
                    <img
                        src="https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    <div class="layer">
                        <h3 className="text-white">Resume-Generator-App</h3>
                        <p className="text-white">A collaborative app designed to quickly create professional, customizable resumes, helping
                            users stand out and achieve career success!
                        </p>
                        <a href="https://kayliewambui.github.io/Group-3-Resume-Generator-App/"><img className="icon" src="https://img.icons8.com/?size=100&id=43738&format=png&color=000000" alt="" /></a>
                    </div>
                </div>
                <div class="work">
                    <img src="https://images.pexels.com/photos/6770521/pexels-photo-6770521.jpeg?auto=compress&cs=tinysrgb&w=600
                    "/>
                    <div class="layer">
                        <h3 className="text-white">Forex trainig app</h3>
                        <p className="text-white">A user-friendly app offering comprehensive Forex training, from basics to advanced
                            strategies, to help users master trading and succeed in the Forex market!
                        </p>
                        <a href="https://forex-trading-alpha.vercel.app/"><img className="icon" src="https://img.icons8.com/?size=100&id=43738&format=png&color=000000" alt="" /></a>
                    </div>
                </div>
                <div class="work">
                    <img height="94%"
                        src="https://images.pexels.com/photos/133021/pexels-photo-133021.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    <div class="layer">
                        <h3 className="text-white">Job seeking app</h3>
                        <p className="text-white">A smart and efficient app connecting job seekers with opportunities, offering personalized
                            matches, and tools to land the perfect job!
                        </p>
                        <a href="https://pulse-programmer.github.io/Main-Project-Frontend/"><img className="icon" src="https://img.icons8.com/?size=100&id=43738&format=png&color=000000" alt="" /></a>
                    </div>
                </div>
            </div>
            <a href="#" class="btn2  btn-warning">See More</a>
        </div>
    )
}

export default Work;