import React, { useRef } from "react";

import NavBar from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";
import Resume from "../components/resume";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const resumeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const appSections = [
        { section: "HOME", ref: homeRef },
        { section: "ABOUT", ref: aboutRef },
        { section: "RESUME", ref: resumeRef },
        { section: "PROJECTS", ref: projectsRef },
        { section: "CONTACT", ref: contactRef },
    ];
    return (
        <div>
            <section ref={homeRef}><Home /></section>
            <NavBar sections={appSections} />
            <section ref={aboutRef}><About /></section>
            <section ref={resumeRef}><Resume /></section>
            <section ref={projectsRef}><Projects /></section>
            <section ref={contactRef}><Contact /></section>      
        </div>
    )
}
