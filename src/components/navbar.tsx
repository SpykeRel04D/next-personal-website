import { useEffect, useState, useRef } from "react";

function getDimensions(element) {
    const { height } = element.getBoundingClientRect();
    const offsetTop = element.offsetTop;
    const offsetBottom = offsetTop + height;
  
    return {
        height,
        offsetTop,
        offsetBottom,
    };
};

function scrollTo(element) {
    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
}

function NavBar(props: { sections: any[]; }) {
    const navRef = useRef(null);
    const [currentSection, setCurrentSection] = useState();

    function addButtons() {
        const buttonsList = props.sections;
        let buttons = [];
        buttonsList.forEach((section) => {
            buttons.push(
                <button type="button" className={`navButton ${currentSection === section.section ? "selected" : ""}`} key={"button_"+section.section} onClick={() => scrollTo(section.ref.current)}>
                    {section.section}
                </button>
            )
        })
        return buttons;
    }

    useEffect(() => {
        function handleScrollPosition() {
            const { height: headerHeight } = getDimensions(navRef.current);
            const scrollPosition = window.scrollY + headerHeight;
      
            const selected = props.sections.find(({ section, ref }) => {
                const ele = ref.current;
                if (ele) {
                    const { offsetBottom, offsetTop } = getDimensions(ele);
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
        <header className="navBar" ref={navRef}>
            {props.sections !== null && addButtons()}
        </header>
    );
}
export default NavBar;