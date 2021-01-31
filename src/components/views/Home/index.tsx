import TypeWritter from "../../TypeWritter";
import Tools from "../../../helpers/tools";
import styles from "./home.module.scss";

export default function Home(props: { about: any }) {
    return(
        <div className={styles.home}>
            <div className={styles.mainZone}>
                <div className={styles.presentation}>
                    Hello, I'm <span className={styles.highlight}>Roger Vidal</span>.<br/>
                    I'm a <TypeWritter 
                        input={["full-stack web developer.", "software developer.", "code enthusiast."]} 
                        typingSpeed={100}
                        deletingSpeed={50}                    
                    />
                </div>
            </div>
            <button type="button" className={styles.visitWeb} onClick={() => Tools.scrollTo(props.about.current)}>
                Take a look!
            </button>
        </div>
    );
    
}