import React, { useEffect, useRef, useState } from "react";
import "../CSS/skills.css";

function Skills() {
    const [animateBars, setAnimateBars] = useState(false); // Trigger for animations
    const skillsSectionRef = useRef(null); // Reference for the skills section

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimateBars(true); // Trigger animation when in view
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (skillsSectionRef.current) {
            observer.observe(skillsSectionRef.current);
        }

        return () => {
            if (skillsSectionRef.current) {
                observer.unobserve(skillsSectionRef.current);
            }
        };
    }, []);

    const calculateStrokeOffset = (percentage) => {
        const radius = 45; 
        const circumference = 2 * Math.PI * radius;
        return circumference - (percentage / 100) * circumference;
    };

    const technicalSkills = [
        { skill: "HTML & CSS", percentage: 95 },
        { skill: "JavaScript", percentage: 75 },
        { skill: "React", percentage: 80 },
        { skill: "Node.js", percentage: 65 },
        { skill: "Redux", percentage: 60 },
        { skill: "Python", percentage: 75 },
        { skill: "Flask", percentage: 75 },
    ];

    const professionalSkills = [
        { skill: "Creativity", percentage: 90 },
        { skill: "Communication", percentage: 65 },
        { skill: "Problem Solving", percentage: 75 },
        { skill: "Teamwork", percentage: 85 },
        { skill: "Time Management", percentage: 80 },
        { skill: "Leadership", percentage: 70 },
    ];

    return (
        <div ref={skillsSectionRef} className="skills-section bg-black">
            <h2 className="skills-heading text-white">
                My <span className="span-skill">Skills</span>
            </h2>
            <div className="skills row">
                {/* Technical Skills */}
                <div className="technical col-lg-6 col-xl-6 col-md-12 col-sm-12">
                    <h3 className="technical-heading text-white">
                        Technical <span className="span-skill">Skills</span>
                    </h3>
                    {technicalSkills.map((item, index) => (
                        <div className="progress-items" key={index}>
                            <p className="text-white">{item.skill}</p>
                            <div className="progress">
                                <div
                                    className={`progress-bar bg-warning ${animateBars ? "animate" : ""}`}
                                    style={{ width: `${item.percentage}%`, transition: "stroke-dashoffset 1.5s ease-in-out", }}
                                    strokeDasharray={2 * Math.PI * 45}
                                    strokeDashoffset={
                                        animateBars ? calculateStrokeOffset(item.percentage) : 2 * Math.PI * 45
                                    }
                        
                                    
                                >
                                    {item.percentage}%
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Professional Skills */}
                <div className="profession col-lg-6 col-xl-6 col-md-12 col-sm-12 row">
                    <h3 className="profession-heading text-white">
                        Professional <span className="span-skill">Skills</span>
                    </h3>
                    {professionalSkills.map((item, index) => (
                        <div key={index} className="col-4 text-center mb-4">
                            <svg width="100" height="100" className="circle-svg">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    stroke="#e0e0e0"
                                    strokeWidth="5"
                                    fill="none"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    stroke="#ffc107"
                                    strokeWidth="5"
                                    fill="none"
                                    strokeDasharray={2 * Math.PI * 45}
                                    strokeDashoffset={
                                        animateBars ? calculateStrokeOffset(item.percentage) : 2 * Math.PI * 45
                                    }
                                    style={{
                                        transition: "stroke-dashoffset 1.5s ease-in-out",
                                    }}
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    fill="#fff"
                                    dy=".3em"
                                    fontSize="14px"
                                    fontWeight="bold"
                                >
                                    {item.percentage}%
                                </text>
                            </svg>
                            <h5 className="text-white mt-2">{item.skill}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
