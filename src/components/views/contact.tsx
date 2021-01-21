export default function Contact() {
    return(
        <div id="Contact" className="section">
            <h2 className="sectionTitle">CONTACT</h2>
            <form className="contactForm">
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <input type="text" id="email" name="contactmail" placeholder="Your mail.." />
                <textarea id="subject" name="subject" rows={10} placeholder="Write something.." />

                <input type="submit" value="Submit" />
            </form>
            <hr/>
            <span className="email">roger.vidal.lloveras@gmail.com</span>
        </div>
    );
}