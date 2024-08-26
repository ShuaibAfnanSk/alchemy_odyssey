const ContactForm = () => {
    return (
        <section className="flex flex-col gap-16 mt-[7rem]">
            <div className="flex flex-col items-center">
                <h4>talk to us</h4>
                <h3 className="text-5xl sm:text-8xl font-black">Contact</h3>
            </div>
            <div className="contact">
                <div className="contactLeft">
                    <div className="contact-box">
                        <h5>phone/ <span>+91-7075818209</span></h5>
                        <h5>email/ <span>alchemy.odyssey@gmail.com</span></h5>
                        <h5>office/ <span>california, USA</span></h5>
                    </div>
                </div>
                <div className="contactRight">
                    <form className="contactForm">
                        <input type="text" name="from_name" placeholder="name" id="" />
                        <input type="email" name="from_email" placeholder="email" id="" />
                        <input type="text" name="subject" placeholder="subject" id="" />
                        <textarea name="message" id="" cols="30" rows="7" placeholder="message" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;