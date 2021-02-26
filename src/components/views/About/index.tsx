import { useContext } from 'react';
import { LanguageContext } from '../../../context/languageContext';
import styles from "./about.module.scss";

export default function About() {
    const { dictionary } = useContext(LanguageContext);

    return(
        <div className={`section ${styles.about}`}>
            <h2 className="sectionTitle">{dictionary.about.title}</h2>
            <div className="sectionContentZone">
                <img className={styles.portrait} src="/hex_portrait.png" alt="Portrait" />
                <div className={styles.textZone}>

                    <p dangerouslySetInnerHTML={{__html:dictionary.about.description.p1 }} />
                    
                    <p>
                        {dictionary.about.description.p2} 
                    </p>
                    <p>
                        {dictionary.about.description.p3} 
                    </p>
                    <p>
                        {dictionary.about.description.p4} 
                    </p>
                    <p>
                        {dictionary.about.description.p5} 
                    </p>
                    <p>
                        {dictionary.about.description.p6} 
                    </p>
                </div>
                
            </div>
        </div>
    );
    
}