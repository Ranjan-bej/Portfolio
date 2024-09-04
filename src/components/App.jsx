import Nav from "./Navbar/Navbar";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Skill from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Project from "./Projects/Projects";
import React from "react";
function App(){
    return <div className="App">
        <Nav/>
        <Intro/>
        <About/>
        <Skill/>
        <Project/>
        {/* <Contact/> */}
    </div>
}
export default App;