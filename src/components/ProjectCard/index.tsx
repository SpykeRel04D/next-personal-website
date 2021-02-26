import styles from "./projectcard.module.scss";

type backStructure = {
	title: string;
	description: string;
	year: number;
	techs: string[];
	linked?: {
		link: string;
		text: string;
	};
};

export default function ProjectCard(props: { name: string; thumbnail: string; back: backStructure }) {
	function computeIcons() {
		let icons = [];
		for (var i = 0; i < props.back.techs.length; i++) {
			icons.push(
				<div className={styles.techContainer} key={i}>
					<img
						className={styles.icon}
						src={"/icons/" + props.back.techs[i] + ".png"}
						alt={props.back.techs[i]}
					/>
					<div className={styles.techName}>{props.back.techs[i]}</div>
				</div>
			);
		}
		return icons;
	}

	return (
		<div className={styles.projectCardZone}>
			<div className={styles.projectCard}>
				<div className={styles.projectCardFront}>
					<img className={styles.thumbnail} src={"/thumbnails/" + props.thumbnail} alt={props.name} />
				</div>
				<div className={styles.projectCardBack}>
					<h2 className={styles.title}>{props.back.title}</h2>
					<div className={styles.shortDescription}>{props.back.description}</div>
					<div className={styles.year}>{props.back.year}</div>
					<div className={styles.techIcons}>{computeIcons()}</div>
					{props.back.linked && (
						<a
							className={styles.button}
							href={props.back.linked.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{props.back.linked.text}
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
