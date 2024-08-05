import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";
import Subscribe from "../components/Subscribe";

const Contact = () => {
    return (
        <section className="flex flex-col gap-16">
            <div className="pt-[4rem]" />
            <ContactForm />
            <Faq />
            <Subscribe />
        </section>
    );
}

export default Contact;