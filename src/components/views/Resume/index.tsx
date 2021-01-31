import SkillBar from "../../SkillBar/";
import styles from "./resume.module.scss";

export default function Resume() {
    return(
        <div className={`section ${styles.resume}`}>
            <h2 className="sectionTitle">RESUME</h2>
            <div className="sectionContentZone">
                <ul className={styles.subSectionsList}>
                    <li className={styles.subSectionElement}>EDUCATION</li>
                    <li className={styles.subSectionElement}>EXPERIENCE</li>
                    <li className={styles.subSectionElement}>LANGUAGES</li>
                    <li className={styles.subSectionElement}>SKILLS</li>
                </ul>
                <div className={styles.subSectionDiv}>
                    <h4 className={styles.title}>EDUCATION</h4>
                    <div className={styles.entry}>
                        <b className={styles.etitle}>M.S. in Multimedia Applications</b>
                        <b className={styles.eSubTitle}>Universitat Oberta de Catalunya (UOC), 2019-2021</b>
                        <p className={styles.edescription}>University Master's Degree in Multimedia Applications / Master Universitario en Aplicaciones Multimedia.</p>
                    </div>
                    <hr />
                    <div className={styles.entry}>
                        <b className={styles.etitle}>B.E. in Interactive Digital Content, Game and Interactive Media Design</b>
                        <b className={styles.eSubTitle}>Universitat de Barcelona (UB), 2013-2017</b>
                        <p className={styles.edescription}>Bachelor's of Engineering in Interactive Digital Content / Grado Universitario en videojuegos y nuevas tecnologías.</p>
                    </div>
                </div>
                <div className={styles.subSectionDiv}>
                    <h4 className={styles.title}>EXPERIENCE</h4>
                    <div className={styles.entry}>
                        <b className={styles.etitle}>Unity Front-End Developer and iOs Publisher of CQ-Mobile</b>
                        <b className={styles.eSubTitle}>GaiaByte, OCT 2017 - JUL 2020</b>
                        <ul className={styles.tasks}>
                            <li>Co-design the game mechanics and write documents for the publisher</li>
                            <li>Integrate UI assets in the game using Unity3D</li>
                            <li>Prepare the code to deploy and publish the game on the Apple Store</li>
                        </ul>
                    </div>
                    <hr />
                    <div className={styles.entry}>
                        <b className={styles.etitle}>Product Owner and Developer of Cosmos Quest</b>
                        <b className={styles.eSubTitle}>GaiaByte, FEB 2017 - JUL 2020</b>
                        <ul className={styles.tasks}>
                            <li>Organize and decide the upcomming updates</li>
                            <li>Design new events and take monetize decisions</li>
                            <li>Main programmer for the client-side of the game (JavaScript)</li>
                            <li>Co-programmer of the back-end of the game (NodeJS - PlayFab)</li>
                        </ul>
                    </div>
                    <hr />
                    <div className={styles.entry}>
                        <b className={styles.etitle}>QA Assistant</b>
                        <b className={styles.eSubTitle}>SKARA - The Blade Remains, OCT 2016 - JAN 2017</b>
                        <ul className={styles.tasks}>
                            <li>Work with the game-design team in order to improve game mechanics</li>
                            <li>Identify and report bugs of the game</li>
                            <li>Learn to work in a big team using Agile methods</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.subSectionDiv}>
                    <h4 className={styles.title}>LANGUAGES</h4>
                    <ul className={styles.languageList}>
                        <li className={styles.languageCard}>
                            <img className={styles.flag} src="/spanish.png" alt="Spanish flag" />
                            <b className={styles.language}>SPANISH</b>
                            <p className={styles.level}>
                                Native Speaer
                            </p>
                        </li>
                        <li className={styles.languageCard}>
                            <img className={styles.flag} src="/catalan.png" alt="Catalan flag" />
                            <b className={styles.language}>CATALAN</b>
                            <p className={styles.level}>
                                Native Speaker
                            </p>
                        </li>
                        <li className={styles.languageCard}>
                            <img className={styles.flag} src="/english.png" alt="English flag" />
                            <b className={styles.language}>ENGLISH</b>
                            <p className={styles.level}>
                                Business Level
                            </p>
                        </li>
                        <li className={styles.languageCard}>
                            <img className={styles.flag} src="/french.png" alt="French flag" />
                            <b className={styles.language}>FRENCH</b>
                            <p className={styles.level}>
                                Basic Knowledge
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.subSectionDiv}>
                    <h4 className={styles.title}>SKILLS</h4>
                    <p className={styles.skillsIntroduction}>
                        In my opinion, on the developer's industry, the most important thing is the ability to be able to use your knowledge to solve problems by learning and investigating.
                        However, since some people like to have an overview of developer's skills, here is a mostly honest list of mine.
                    </p>
                    <div className={styles.skillsZone}>
                        <SkillBar tag={"C++"} percentage={40} label={"2/5"} type="language" />
                        <SkillBar tag={"Corona SDK"} percentage={40} label={"2/5"} type="alternate" />
                        <SkillBar tag={"Express JS"} percentage={60} label={"3/5"} type="alternate" />
                        <SkillBar tag={"Firebase"} percentage={20} label={"1/5"} type="tools" />
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
                        <SkillBar tag={"WordPress"} percentage={20} label={"1/5"} type="tools" />
                    </div>
                    <p className={styles.skillsDisclosure}>
                        <b>Note:</b> Since I don't believe that is possible to known everything in any of the listed skills, 5 is equal to pretty confident and 1 means that I just tried it once in some personal projects.
                    </p>
                </div>
            </div>
            
        </div>
    );
}