import React, { useRef, useContext } from "react";

import NavBar from "../components/NavigationBar";
import Home from "../components/views/Home/";
import About from "../components/views/About/";
import Resume from "../components/views/Resume/";
import Projects from "../components/views/Projects/";
import Contact from "../components/views/Contact/";
import Footer from "../components/views/Footer/";

import { LanguageContext } from "./../context/languageContext";

export default function App() {
	const { dictionary } = useContext(LanguageContext);
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const resumeRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	const appSections = [
		{ section: dictionary.navbar.home, ref: homeRef },
		{ section: dictionary.navbar.about, ref: aboutRef },
		{ section: dictionary.navbar.resume, ref: resumeRef },
		{ section: dictionary.navbar.projects, ref: projectsRef },
		{ section: dictionary.navbar.contact, ref: contactRef },
	];

	return (
		<div lang={dictionary.lang}>
			<section ref={homeRef}>
				<Home about={aboutRef} />
			</section>
			<NavBar sections={appSections} />
			<section ref={aboutRef}>
				<About />
			</section>
			<section ref={resumeRef}>
				<Resume />
			</section>
			<section ref={projectsRef}>
				<Projects />
			</section>
			<section ref={contactRef}>
				<Contact />
			</section>
			<Footer home={homeRef} />
		</div>
	);
}
