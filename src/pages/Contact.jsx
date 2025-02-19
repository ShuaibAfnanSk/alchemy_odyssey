import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";

const Contact = () => {
    return (
        <section className="flex flex-col gap-16">
            <ContactForm />
            <Faq />
        </section>
    );
}

export default Contact;