import "./intro.css";
import React from "react";
import avatar from "../images/avatar.png";
function Intro() {
    return <section id='intro'>
        <div id="innerContent">
            <span id="h3">Hello , It's Me</span>
            <span id="h1">RANJAN BEJ</span>
            <p id="introtext">Passionate about Web Development currently pursuing my studies. With a strong foundation in building dynamic and responsive web applications, I enjoy turning ideas into reality through clean, efficient code. Eager to apply my skills in real-world projects and grow as a software engineer. 
            </p>
            <div>
            <a className="social-link" style={{"--i":0.1}}href="https://www.linkedin.com/in/ranjan-bej/"><i class="bi bi-linkedin"></i></a>
            <a className="social-link" style={{"--i":0.2}}href="https://github.com/Ranjan-bej"><i class="bi bi-github"></i></a>
            </div>
        </div>
        <img id="avatar" src={avatar} alt="avatar.img" />
    </section>
}

export default Intro;