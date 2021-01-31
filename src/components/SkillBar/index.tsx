import styles from "./skillbar.module.scss";

export default function SkillBar(props: { tag: string, percentage: number, label: string, type: string }) {
    return(
        <div className={`${styles.skillBar} ${props.type === "language" ? styles.SBlanguage : props.type === "tools" ? styles.SBtool : styles.SBalternate}`}>
            <div className={styles.loadBar} style={{width: props.percentage+"%"}}>
                <div className={styles.titleBar}>
                    <span className={styles.titleTag}>{props.tag}</span>
                </div>
            </div>
            <span className={styles.percentage}>{props.label}</span>
        </div>
    );
}