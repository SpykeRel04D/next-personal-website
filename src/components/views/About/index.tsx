import styles from "./about.module.scss";

export default function About() {
    return(
        <div className={`section ${styles.about}`}>
            <h2 className="sectionTitle">ABOUT</h2>
            <div className="sectionContentZone">
                <img className={styles.portrait} src="/hex_portrait.png" alt="Portrait" />
                <div className={styles.textZone}>
                    <p>
                        My name is <b>Roger Vidal</b> and I am a developer from <a href="https://en.wikipedia.org/wiki/Vilanova_i_la_Geltr%C3%BA">Vilanova i la Geltrú</a>, a city very close to Barcelona (Spain).
                    </p>
                    <p>
                        After finishing High School, I decided to study Telecommunications engineering, but after a few months I realized that it wasn't what I expected. Then, I tried to study Electrical Engineering, but after finishing the second year I decided that I wanted to study something more related on programming and multimedia. At this point, I started a BE in Interactive Digital Content, Game and Interactive Media Design.  
                    </p>
                    <p>
                        When I finished my degree, I started to work in a small startup of game development. At the beginning we were only three employees, but after a year, we were almost fifteen employees. Also, during this stage, I spent my free time cursing a M.S in Multimedia Applications.
                    </p>
                    <p>
                        Although my work experience is focused on Web Development, I don't like to consider myself a web developer. In my opinion, the most important ability on a programmer is to being able to research and learn every time you code, because you have a good base. With this, you can swap between code disciplines and every day you can learn something new. After releasing two big projects, we decided to close the company.
                    </p>
                    <p>
                        On a personal level, 
                    </p>
                </div>
                
            </div>
        </div>
    );
    
}