import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../../context/languageContext";
import styles from "./about.module.scss";

export default function About() {
	const { dictionary } = useContext(LanguageContext);

	return (
		<div className={`section ${styles.about}`}>
			<h2 className="sectionTitle">{dictionary.about.title}</h2>
			<div className="sectionContentZone">
				<div className={styles.portrait}>
					<Image
						src={"/hex_portrait.png"}
						alt={"Portrait of the author"}
						layout={"responsive"}
						width={400}
						height={453}
					/>
				</div>

				<div className={styles.textZone}>
					<p dangerouslySetInnerHTML={{ __html: dictionary.about.description.p1 }} />
					<p>{dictionary.about.description.p2}</p>
					<p>{dictionary.about.description.p3}</p>
					<p>{dictionary.about.description.p4}</p>
					<p>{dictionary.about.description.p5}</p>
					<p>{dictionary.about.description.p6}</p>
				</div>
			</div>
		</div>
	);
}
