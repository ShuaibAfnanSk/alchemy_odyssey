import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className="flex flex-col gap-16">
                <ContactForm />
                <Faq />
            </section>
            <Footer />
        </>
    );
}

export default Contact;