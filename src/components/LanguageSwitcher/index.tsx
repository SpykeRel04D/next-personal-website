import { useContext, useEffect } from "react";
import { LanguageContext } from '../../context/languageContext';

import styles from "./languageswitcher.module.scss";

export default function LanguageSwitcher () {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);
    const handleLanguageChange = (language: string) => userLanguageChange(language);

    useEffect(() => {
        let defaultLanguage = localStorage.getItem('rcml-lang');
        if (!defaultLanguage) {
            defaultLanguage = window.navigator.language.substring(0, 2);
        }
        userLanguageChange(defaultLanguage);
    }, [userLanguageChange]);

    return(
        <div className={styles.switcher}>
            <ul>
                <li className={`${userLanguage === "en" ? styles.selected :""}`} key="EN" onClick={() => handleLanguageChange("en")}>
                    EN
                </li>
                <li className={`${userLanguage === "es" ? styles.selected :""}`} key="ES" onClick={() => handleLanguageChange("es")}>
                    ES
                </li>
                <li className={`${userLanguage === "ca" ? styles.selected :""}`} key="CA" onClick={() => handleLanguageChange("ca")}>
                    CA
                </li>
            </ul>
        </div>
    )
}