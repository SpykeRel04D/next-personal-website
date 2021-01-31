import React, { useRef } from "react";

import NavBar from "../components/NavigationBar";
import Home from "../components/views/Home/";
import About from "../components/views/About/";
import Resume from "../components/views/Resume/";
import Projects from "../components/views/Projects/";
import Contact from "../components/views/Contact/";
import Footer from "../components/views/Footer/";

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
