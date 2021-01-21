import SkillBar from "../skillbar";

export default function Resume() {
    return(
        <div id="Resume" className="section">
            <h2 className="sectionTitle">RESUME</h2>
            <div className="sectionContentZone">
                <ul className="subSectionsList">
                    <li className="subSectionElement">EDUCATION</li>
                    <li className="subSectionElement">EXPERIENCE</li>
                    <li className="subSectionElement">LANGUAGES</li>
                    <li className="subSectionElement">SKILLS</li>
                </ul>
                <div className="subSectionDiv">
                    <h4 className="title">EDUCATION</h4>
                    <div className="entry">
                        <b className="etitle">M.S. in Multimedia Applications</b>
                        <b className="eSubTitle">Universitat Oberta de Catalunya (UOC), 2019-2021</b>
                        <p className="edescription">University Master's Degree in Multimedia Applications / Master Universitario en Aplicaciones Multimedia.</p>
                    </div>
                    <hr />
                    <div className="entry">
                        <b className="etitle">B.E. in Interactive Digital Content, Game and Interactive Media Design</b>
                        <b className="eSubTitle">Universitat de Barcelona (UB), 2013-2017</b>
                        <p className="edescription">Bachelor's of Engineering in Interactive Digital Content / Grado Universitario en videojuegos y nuevas tecnologías.</p>
                    </div>
                </div>
                <div className="subSectionDiv">
                    <h4 className="title">EXPERIENCE</h4>
                    <div className="entry">
                        <b className="etitle">Unity Front-End Developer and iOs Publisher of CQ-Mobile</b>
                        <b className="eSubTitle">GaiaByte, OCT 2017 - JUL 2020</b>
                        <p className="edescription">TODO</p>
                    </div>
                    <hr />
                    <div className="entry">
                        <b className="etitle">Product Owner and Developer of Cosmos Quest</b>
                        <b className="eSubTitle">GaiaByte, FEB 2017 - JUL 2020</b>
                        <p className="edescription">TODO</p>
                    </div>
                    <hr />
                    <div className="entry">
                        <b className="etitle">QA Assistant</b>
                        <b className="eSubTitle">SKARA - The Blade Remains, OCT 2016 - JAN 2017</b>
                        <p className="edescription">TODO</p>
                    </div>
                </div>
                <div className="subSectionDiv">
                    <h4 className="title">LANGUAGES</h4>
                    <ul className="languageList">
                        <li className="languageCard">
                            <img className="flag" src="/spanish.png" alt="Spanish flag" />
                            <b className="language">SPANISH</b>
                            <p className="level">
                                Native Speaer
                            </p>
                        </li>
                        <li className="languageCard">
                            <img className="flag" src="/catalan.png" alt="Catalan flag" />
                            <b className="language">CATALAN</b>
                            <p className="level">
                                Native Speaker
                            </p>
                        </li>
                        <li className="languageCard">
                            <img className="flag" src="/english.png" alt="English flag" />
                            <b className="language">ENGLISH</b>
                            <p className="level">
                                Business Level
                            </p>
                        </li>
                        <li className="languageCard">
                            <img className="flag" src="/french.png" alt="French flag" />
                            <b className="language">FRENCH</b>
                            <p className="level">
                                Basic Knowledge
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="subSectionDiv">
                    <h4 className="title">SKILLS</h4>
                    <p className="skillsIntroduction">
                        In my opinion, on the developer's industry, the most important thing is the ability to be able to use your knowledge to solve problems by learning and investigating.
                        However, since some people likes to have an overview of developer's skills, here is a mostly honest list of mine.
                    </p>
                    <div className="skillsZone">
                        <SkillBar tag={"C++"} percentage={40} label={"2/5"} type="language" />
                        <SkillBar tag={"Corona SDK"} percentage={40} label={"2/5"} type="alternate" />
                        <SkillBar tag={"Express JS"} percentage={60} label={"3/5"} type="alternate" />
                        <SkillBar tag={"Git"} percentage={80} label={"4/5"} type="tools"/>
                        <SkillBar tag={"GraphQL"} percentage={20} label={"1/5"} type="language" />
                        <SkillBar tag={"HTML+CSS/SCSS/SASS"} percentage={60} label={"3/5"} type="language"/>
                        <SkillBar tag={"JavaScript"} percentage={100} label={"5/5"} type="language" />
                        <SkillBar tag={"Laravel"} percentage={20} label={"1/5"} type="tools" />
                        <SkillBar tag={"Lua"} percentage={40} label={"2/5"} type="language" />
                        <SkillBar tag={"Next.JS"} percentage={40} label={"2/5"} type="alternate" />
                        <SkillBar tag={"Node JS"} percentage={60} label={"3/5"} type="language" />
                        <SkillBar tag={"Photoshop"} percentage={60} label={"3/5"} type="tools" />
                        <SkillBar tag={"PHP"} percentage={20} label={"1/5"} type="language" />
                        <SkillBar tag={"Python"} percentage={40} label={"2/5"} type="language" />
                        <SkillBar tag={"React.JS"} percentage={60} label={"3/5"} type="alternate" />
                        <SkillBar tag={"SQL"} percentage={40} label={"2/5"} type="language" />
                        <SkillBar tag={"TypeScript"} percentage={40} label={"2/5"} type="language" />
                        <SkillBar tag={"Unity 3D"} percentage={60} label={"3/5"} type="tools" />
                        <SkillBar tag={"Unreal Engine"} percentage={60} label={"3/5"} type="tools" />
                        <SkillBar tag={"WordPress"} percentage={40} label={"2/5"} type="tools" />
                    </div>
                    <p className="skillsDisclosure">
                        <b>Note:</b> Since I don't believe that is possible to known everything in any of the listed skills, 5 is equal to pretty confident and 1 means that I just tried it in some personal projects.
                    </p>
                </div>
            </div>
            
        </div>
    );
}