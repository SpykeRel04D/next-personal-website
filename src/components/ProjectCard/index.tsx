import styles from "./projectcard.module.scss";

type backStructure = {
    title: string,
    description: string,
    year: number,
    techs: string[],
    linked?: {
        link: string,
        icon: string
    }
}

export default function ProjectCard(props: { name: string, thumbnail: string, back: backStructure }) {

    function computeIcons() {
        let icons = [];
        for (var i = 0; i < props.back.techs.length; i++) {
            icons.push(
                <div className={styles.techContainer} key={i}>
                    <img className={styles.icon} src={"/icons/"+props.back.techs[i]+".png"} alt={props.back.techs[i]} />
                    <div className={styles.techName}>{props.back.techs[i]}</div>
                </div>
            
            );
        }   
        return icons;     
    }

    if (props.back.linked) console.log(props.back.linked.link)

    return(
        <div className={styles.projectCardZone}>
            <div className={styles.projectCard}>
                <div className={styles.projectCardFront}>
                    <img className={styles.thumbnail} src={"/thumbnails/"+props.thumbnail} alt={props.name} />
                </div>
                <div className={styles.projectCardBack}>
                    <h2 className={styles.title}>{props.back.title}</h2>
                    <div className={styles.shortDescription}>{props.back.description}</div>
                    <div className={styles.year}>{props.back.year}</div>
                    <div className={styles.techIcons}>{computeIcons()}</div>
                    {props.back.linked && 
                        <a className={styles.linkButton} href={props.back.linked.link} target="_blank">
                            <img alt={props.back.linked.icon} src={"/links/"+props.back.linked.icon+".png"} />
                        </a>
                    }
                </div>
            </div>
            
        </div>
    );
}