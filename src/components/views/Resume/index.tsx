import { useContext } from "react";
import { LanguageContext } from "../../../context/languageContext";
import SkillBar from "../../SkillBar/";
import styles from "./resume.module.scss";

export default function Resume() {
	const { dictionary } = useContext(LanguageContext);
	return (
		<div className={`section ${styles.resume}`}>
			<h2 className="sectionTitle">{dictionary.resume.title}</h2>
			<div className="sectionContentZone">
				<ul className={styles.subSectionsList}>
					<li className={styles.subSectionElement}>{dictionary.resume.subtitles.education}</li>
					<li className={styles.subSectionElement}>{dictionary.resume.subtitles.experience}</li>
					<li className={styles.subSectionElement}>{dictionary.resume.subtitles.languages}</li>
					<li className={styles.subSectionElement}>{dictionary.resume.subtitles.skills}</li>
				</ul>
				<div className={styles.subSectionDiv}>
					<h3 className={styles.title}>{dictionary.resume.education.title}</h3>
					<div className={styles.entry}>
						<b className={styles.etitle}>{dictionary.resume.education.element01.title}</b>
						<b className={styles.eSubTitle}>{dictionary.resume.education.element01.center}</b>
						<p className={styles.edescription}>{dictionary.resume.education.element01.long}</p>
					</div>
					<hr />
					<div className={styles.entry}>
						<b className={styles.etitle}>{dictionary.resume.education.element02.title}</b>
						<b className={styles.eSubTitle}>{dictionary.resume.education.element02.center}</b>
						<p className={styles.edescription}>{dictionary.resume.education.element02.long}</p>
					</div>
				</div>
				<div className={styles.subSectionDiv}>
					<h3 className={styles.title}>{dictionary.resume.experience.title}</h3>
					<div className={styles.entry}>
						<b className={styles.etitle}>{dictionary.resume.experience.element01.title}</b>
						<b className={styles.eSubTitle}>{dictionary.resume.experience.element01.center}</b>
						<ul className={styles.tasks}>
							<li>{dictionary.resume.experience.element01.tasks.t1}</li>
							<li>{dictionary.resume.experience.element01.tasks.t2}</li>
							<li>{dictionary.resume.experience.element01.tasks.t3}</li>
							<li>{dictionary.resume.experience.element01.tasks.t4}</li>
						</ul>
					</div>
					<hr />
					<div className={styles.entry}>
						<b className={styles.etitle}>{dictionary.resume.experience.element02.title}</b>
						<b className={styles.eSubTitle}>{dictionary.resume.experience.element02.center}</b>
						<ul className={styles.tasks}>
							<li>{dictionary.resume.experience.element02.tasks.t1}</li>
							<li>{dictionary.resume.experience.element02.tasks.t2}</li>
							<li>{dictionary.resume.experience.element02.tasks.t3}</li>
							<li>{dictionary.resume.experience.element02.tasks.t4}</li>
						</ul>
					</div>
					<hr />
					<div className={styles.entry}>
						<b className={styles.etitle}>{dictionary.resume.experience.element03.title}</b>
						<b className={styles.eSubTitle}>{dictionary.resume.experience.element03.center}</b>
						<ul className={styles.tasks}>
							<li>{dictionary.resume.experience.element03.tasks.t1}</li>
							<li>{dictionary.resume.experience.element03.tasks.t2}</li>
							<li>{dictionary.resume.experience.element03.tasks.t3}</li>
						</ul>
					</div>
				</div>
				<div className={styles.subSectionDiv}>
					<h3 className={styles.title}>{dictionary.resume.languages.title}</h3>
					<ul className={styles.languageList}>
						<li className={styles.languageCard}>
							<img className={styles.flag} src="/spanish.png" alt="Spanish flag" />
							<b className={styles.language}>{dictionary.resume.languages.card01.title}</b>
							<p className={styles.level}>{dictionary.resume.languages.card01.level}</p>
						</li>
						<li className={styles.languageCard}>
							<img className={styles.flag} src="/catalan.png" alt="Catalan flag" />
							<b className={styles.language}>{dictionary.resume.languages.card02.title}</b>
							<p className={styles.level}>{dictionary.resume.languages.card02.level}</p>
						</li>
						<li className={styles.languageCard}>
							<img className={styles.flag} src="/english.png" alt="English flag" />
							<b className={styles.language}>{dictionary.resume.languages.card03.title}</b>
							<p className={styles.level}>{dictionary.resume.languages.card03.level}</p>
						</li>
						<li className={styles.languageCard}>
							<img className={styles.flag} src="/french.png" alt="French flag" />
							<b className={styles.language}>{dictionary.resume.languages.card04.title}</b>
							<p className={styles.level}>{dictionary.resume.languages.card04.level}</p>
						</li>
					</ul>
				</div>
				<div className={styles.subSectionDiv}>
					<h3 className={styles.title}>{dictionary.resume.skills.title}</h3>
					<p className={styles.skillsIntroduction}>{dictionary.resume.skills.introduction}</p>
					<div className={styles.skillsZone}>
						<SkillBar tag={"C++"} percentage={40} label={"2/5"} type="language" />
						<SkillBar tag={"Corona SDK"} percentage={40} label={"2/5"} type="alternate" />
						<SkillBar tag={"Express JS"} percentage={60} label={"3/5"} type="alternate" />
						<SkillBar tag={"Firebase"} percentage={20} label={"1/5"} type="tools" />
						<SkillBar tag={"Git"} percentage={80} label={"4/5"} type="tools" />
						<SkillBar tag={"GraphQL"} percentage={20} label={"1/5"} type="language" />
						<SkillBar tag={"HTML+CSS/SCSS/SASS"} percentage={60} label={"3/5"} type="language" />
						<SkillBar tag={"JavaScript"} percentage={100} label={"5/5"} type="language" />
						<SkillBar tag={"Jest"} percentage={40} label={"2/5"} type="tools" />
						<SkillBar tag={"jQuery"} percentage={60} label={"3/5"} type="alternate" />
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
						<SkillBar tag={"Webpack"} percentage={40} label={"2/5"} type="tools" />
						<SkillBar tag={"WordPress"} percentage={20} label={"1/5"} type="tools" />
					</div>
					<p className={styles.skillsDisclosure}>{dictionary.resume.skills.disclaimer}</p>
				</div>
			</div>
		</div>
	);
}
