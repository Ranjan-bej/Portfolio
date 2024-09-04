import React from "react";
import "./skill.css";
import js from "../images/js.png";
import html from "../images/html.png"
import css from "../images/css.png";
import python from "../images/python.png";
import bootstrap from "../images/bootstrap.png";
import java from "../images/java.png";
import sql from "../images/mysql.png";
import node from "../images/nodejs.png";
import jquery from "../images/jquery.png";
function Skill() {
    return <div id="skill">
        <h2>SKILLS</h2>

        <div class="container text-center">
            <div class="row">
                <div class="skills col-sm"><img style={{"--i":1}}src={js} alt="" /></div>
                <div class="skills col-sm"><img style={{"--i":3}} src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-5645899-4695757.png" alt="" /></div>
                <div class="skills col-sm"><img style={{"--i":10}}src={jquery} alt="" /></div>
                <div class="skills col-sm"><img style={{"--i":11}}src={python} alt="" /></div>
            </div>
            <div class="row">
                <div class="skills col-sm"><img style={{"--i":5}}src={java} alt="" /></div>
                <div class="skills col-sm"><img style={{"--i":6}} src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png" alt="" /></div>
                <div class="skills col-sm"><img style={{"--i":7}}src={sql} alt="" /></div>
                <div class="skills col-sm"><img style={{"--i":8}}src={node} alt="" /></div>
            </div>
            {/* <div class="row">*/}
                {/* <div class="skills col-sm"><img style={{"--i":9}}src="https://pbs.twimg.com/profile_images/2199543684/ejs_400x400.png" alt="" /></div> */}
                {/* <div class="skills col-sm"><img style={{"--i":4}}src={css} alt="" /></div> */}
                {/* <div class="skills col-sm"><img style={{"--i":2}}src={html} alt="" /></div> */}
                {/* <div class="skills col-sm"><img style={{"--i":12}}src={bootstrap} alt="" /></div> */}
           {/* </div> */}
        </div>

    </div>
}
export default Skill;