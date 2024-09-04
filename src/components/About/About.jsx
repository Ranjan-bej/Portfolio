import React from "react";
import "./About.css";
function About(){
        return <div id="about">
            <span className="skilltitle">What I Do</span>
            <div className="skillbars">
            <div className="skillbar">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/front-end-development-9369042-7666491.png?f=webp" alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>Frontend Development</h2>
                    <p>Design using html,css, js framework react.js.... </p>
                </div>
            </div>
            <div className="skillbar">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/back-end-development-4636838-3840347.png?f=avif&w=256" alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>Backend Development</h2>
                    <p>Design using javascript frameworks node,express.....</p>
                </div>
            </div>
            <div className="skillbar">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/database-8858003-7232734.png?f=webp" alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>Database</h2>
                    <p>Both sql and noSql using Mysql and MongoDb........</p>
                </div>
            </div>
            </div>
        </div>
    
}

export default About;