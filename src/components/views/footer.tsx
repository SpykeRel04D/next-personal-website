import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaAngleDoubleUp } from 'react-icons/fa';
import Tools from "../../helpers/tools";

export default function Footer(props: { home: any }) {
    return(
        <footer id="Footer">
            <button className="top" type="button" onClick={() => Tools.scrollTo(props.home.current)}>
                <FaAngleDoubleUp className="icon" />
            </button>
            <div className="socialNetwork">
                <a href="https://www.linkedin.com/in/roger-vidal-lloveras-979786143/">
                    <div className="iconSquare">
                        <FaLinkedin className="icon" />
                    </div>
                </a>
                <a href="https://twitter.com/SpykeRel04D">
                    <div className="iconSquare">
                        <FaTwitterSquare className="icon" />
                    </div>
                </a>
                <a href="https://github.com/SpykeRel04D">
                    <div className="iconSquare">
                        <FaGithubSquare className="icon" />
                    </div>
                </a>
            </div>
            <div className="credit">ROGER VIDAL LLOVERAS - SpykeRel04D <span className="highlight">©2021</span></div>
        </footer>
    );
}