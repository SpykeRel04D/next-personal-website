import React, { useRef } from "react";

import NavBar from "../components/navbar";
import Home from "../components/views/home";
import About from "../components/views/about";
import Resume from "../components/views/resume";
import Projects from "../components/views/projects";
import Contact from "../components/views/contact";
import Footer from "../components/views/footer";

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
            <section ref={homeRef}><Home about={aboutRef} /></section>
            <NavBar sections={appSections} />
            <section ref={aboutRef}><About /></section>
            <section ref={resumeRef}><Resume /></section>
            <section ref={projectsRef}><Projects /></section>
            <section ref={contactRef}><Contact /></section>   
            <Footer home={homeRef} />
        </div>
    )
}
