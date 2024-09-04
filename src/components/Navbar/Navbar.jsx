import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Nav.css"
function Navbar() {

    const [showmenu,setmenu]=useState(false);
    return <div className="navbar">
        <div id="menu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={100} className="menuItems" style={{ "--i": 1 }}>HOME</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={100} className="menuItems" style={{ "--i": 2 }}>ABOUT</Link>
            <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-100} duration={100} className="menuItems" style={{ "--i": 3 }}>SKILLS</Link>
            <Link activeClass="active" to="project" spy={true} smooth={true} offset={-30} duration={100} className="menuItems" style={{ "--i": 4 }}>Project</Link>
        </div>
        {/* <Link id="menubtn" activeClass="active" to="contact" spy={true} smooth={true} offset={-30} duration={100}><button>Contact Me</button></Link> */}
        <span id="mobileicon" onClick={()=>{setmenu(!showmenu)}}><i className="bi bi-list h1"></i></span>
        <div id="Mobilemenu" style={{display:showmenu?"flex":"none"}}>
            <Link activeClass="activemenu" onClick={()=>{setmenu(false)}}to="intro" spy={true} smooth={true} offset={-100} duration={100} className="mobilemenuItems" >HOME</Link>
            <Link activeClass="activemenu" onClick={()=>{setmenu(false)}}to="about" spy={true} smooth={true} offset={-100} duration={100} className="mobilemenuItems" >ABOUT</Link>
            <Link activeClass="activemenu" onClick={()=>{setmenu(false)}}to="skill" spy={true} smooth={true} offset={-100} duration={100} className="mobilemenuItems" >SKILLS</Link>
            <Link activeClass="activemenu" onClick={()=>{setmenu(false)}}to="project" spy={true} smooth={true} offset={-30} duration={100} className="mobilemenuItems" >Projects</Link>
            {/* <Link activeClass="activemenu" onClick={()=>{setmenu(false)}}to="contact" spy={true} smooth={true} offset={-10} duration={100} className="mobilemenuItems">Contact</Link> */}
        </div>
    </div>
}

export default Navbar;