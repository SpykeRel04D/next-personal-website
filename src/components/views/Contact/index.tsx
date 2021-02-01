import styles from './contact.module.scss';

export default function Contact() {
    return(
        <div className={`${styles.contact} section`}>
            <h2 className={`${styles.contactTitle} sectionTitle`}>CONTACT</h2>
            <form className={styles.contactForm} name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <input type="text" id="email" name="contactmail" placeholder="Your mail.." />
                <textarea id="subject" name="subject" rows={10} placeholder="Write something.." />

                <input type="submit" value="Submit" />
            </form>
            <hr/>
            <span className={styles.email}>roger.vidal.lloveras@gmail.com</span>
        </div>
    );
}