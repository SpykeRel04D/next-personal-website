import TypeWritter from "../typewritter";
import Tools from "../../helpers/tools";

export default function Home(props: { about: any }) {
    return(
        <div id="Home">
            <div className="mainZone">
                <div className="presentation">
                    Hello, I'm <span className="highlight">Roger Vidal</span>.<br/>
                    I'm a <TypeWritter 
                        input={["full-stack web developer.", "software developer.", "code enthusiast."]} 
                        typingSpeed={100}
                        deletingSpeed={50}                    
                    />
                </div>
            </div>
            <button type="button" className="visitWeb" onClick={() => Tools.scrollTo(props.about.current)}>
                Take a look!
            </button>
        </div>
    );
    
}