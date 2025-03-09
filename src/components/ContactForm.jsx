import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ContactForm = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <section className="flex flex-col gap-16 mt-[7rem] px-4 overflow-hidden">
            <div className="flex flex-col items-center">
                <h4 data-aos="fade-up">talk to us</h4>
                <h3 data-aos="fade-up" className="text-5xl">Contact</h3>
            </div>
            <div className="contact">
                <div data-aos="fade-right" className="contactLeft">
                    <div className="contact-box">
                        <h5>phone/ <span>+91-7075818209</span></h5>
                        <h5>email/ <span>alchemy.odyssey@gmail.com</span></h5>
                        <h5>office/ <span>california, USA</span></h5>
                    </div>
                </div>
                <div data-aos="fade-up" className="contactRight">
                    <form className="contactForm">
                        <input type="text" name="from_name" placeholder="name" id="" />
                        <input type="email" name="from_email" placeholder="email" id="" />
                        <input type="text" name="subject" placeholder="subject" id="" />
                        <textarea name="message" id="" cols="30" rows="7" placeholder="message" />
                        <button type="submit" className="bg-mintish">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;