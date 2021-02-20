import { useContext } from "react";
import { LanguageContext } from "../../../context/languageContext";
import styles from "./contact.module.scss";

export default function Contact() {
	const { dictionary } = useContext(LanguageContext);
	return (
		<div className={`${styles.contact} section`}>
			<h2 className={`${styles.contactTitle} sectionTitle`}>{dictionary.contact.title}</h2>
			<form className={styles.contactForm} name="contact" method="POST" data-netlify="true">
				<input type="hidden" aria-label="Hidden input" name="form-name" value="contact" />
				<input
					type="text"
					aria-label="First name"
					id="fname"
					name="firstname"
					placeholder={dictionary.contact.form.name}
				/>
				<input
					type="text"
					aria-label="Email"
					id="email"
					name="contactmail"
					placeholder={dictionary.contact.form.mail}
				/>
				<textarea
					aria-label="Write your message here"
					id="subject"
					name="subject"
					rows={10}
					placeholder={dictionary.contact.form.message}
				/>

				<input type="submit" aria-label="Send contact form" value={dictionary.contact.form.submit} />
			</form>
			<hr />
			<span className={styles.email}>roger.vidal.lloveras@gmail.com</span>
			<a className={styles.getCV} href="/RogerVidalResume.pdf" download>
				{dictionary.contact.cv}
			</a>
		</div>
	);
}
