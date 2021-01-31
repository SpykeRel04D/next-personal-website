import { useEffect, useState, useRef } from "react";
import Tools from "../../helpers/tools";
import styles from "./navbar.module.scss";

export default function NavBar(props: { sections: any[]; }) {
    const navRef = useRef(null);
    const [currentSection, setCurrentSection] = useState();

    function addButtons() {
        const buttonsList = props.sections;
        let buttons = [];
        buttonsList.forEach((section) => {
            buttons.push(
                <button type="button" className={`${styles.navButton} ${currentSection === section.section ? styles.selected : ""}`} key={"button_"+section.section} onClick={() => Tools.scrollTo(section.ref.current)}>
                    {section.section}
                </button>
            )
        })
        return buttons;
    }

    useEffect(() => {
        function handleScrollPosition() {
            const { height: headerHeight } = Tools.getDimensions(navRef.current);
            const scrollPosition = window.scrollY + headerHeight;
      
            const selected = props.sections.find(({ section, ref }) => {
                const ele = ref.current;
                if (ele) {
                    const { offsetBottom, offsetTop } = Tools.getDimensions(ele);
                    return scrollPosition > offsetTop && scrollPosition < offsetBottom;
                }
            });
      
            if (selected && selected.section !== currentSection) {
                setCurrentSection(selected.section);
            } else if (!selected && currentSection) {
                setCurrentSection(undefined);
            }
        }

        handleScrollPosition();
        window.addEventListener("scroll", handleScrollPosition);
        return () => {
        window.removeEventListener("scroll", handleScrollPosition);
        };
    },[currentSection]);

    return(
        <header className={styles.navBar} ref={navRef}>
            {props.sections !== null && addButtons()}
        </header>
    );
}