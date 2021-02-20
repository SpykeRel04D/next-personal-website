import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaAngleDoubleUp } from "react-icons/fa";
import Tools from "../../../helpers/tools";
import styles from "./footer.module.scss";

export default function Footer(props: { home: any }) {
	return (
		<footer className={styles.footer}>
			<button
				className={styles.top}
				type="button"
				onClick={() => Tools.scrollTo(props.home.current)}
				aria-label="Return to Top"
			>
				<FaAngleDoubleUp className={styles.icon} />
			</button>
			<div className={styles.socialNetwork}>
				<a
					aria-label="Visit my Linkedin"
					href="https://www.linkedin.com/in/roger-vidal-lloveras-979786143/"
					rel="noopener noreferrer"
				>
					<div className={styles.iconSquare}>
						<FaLinkedin className={styles.icon} />
					</div>
				</a>
				<a aria-label="Visit my Twitter" href="https://twitter.com/SpykeRel04D" rel="noopener noreferrer">
					<div className={styles.iconSquare}>
						<FaTwitterSquare className={styles.icon} />
					</div>
				</a>
				<a aria-label="Visit my Github" href="https://github.com/SpykeRel04D" rel="noopener noreferrer">
					<div className={styles.iconSquare}>
						<FaGithubSquare className={styles.icon} />
					</div>
				</a>
			</div>
			<div className={styles.credit}>
				ROGER VIDAL LLOVERAS - SpykeRel04D <span className={styles.highlight}>©2021</span>
			</div>
		</footer>
	);
}
