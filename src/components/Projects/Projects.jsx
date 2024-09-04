import React from "react";
import "./project.css";

function Project() {
    return <div id="project">
        <h2>Projects</h2>

        <div className="projects">
            <div class="card" style={{ width: "18rem" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ef9JwDSBW4k44me5tPOuwAYJGoyi8utNYA&s" className="card-img-top" alt="" />
                <div className="layer">
                    <h5>QR Generator</h5>
                    <p className="card-text">A web app to generate qr code for any text , links , etc..</p>
                </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIxxqhT-LO9lTGlpbmb8IxfZvsQSHVeKaFA&s" className="card-img-top" alt="" />
                <div className="layer">
                    <h5>Chat App</h5>
                    <p className="card-text">A web app to send messages in real time .</p>
                </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcumHK2XcYm6idGx9vSUxX3TBVX90G_Mq1g&s" className="card-img-top" alt="" />
                <div className="layer">
                    <h5>ShareEditor</h5>
                    <p className="card-text">A web app where many people can join a room to share the same code editor to work on.</p>
                </div>
            </div>
        </div>
    </div>
}
export default Project;
